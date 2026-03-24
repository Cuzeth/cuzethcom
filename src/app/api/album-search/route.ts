import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

// --- Types ---

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

interface SpotifyAlbum {
  id: string;
  name: string;
  artists: { name: string }[];
  images: SpotifyImage[];
  release_date: string;
  album_type: string;
}

interface SpotifySearchResponse {
  albums: {
    items: SpotifyAlbum[];
  };
}

interface ITunesResult {
  collectionId: number;
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
  wrapperType: string;
  collectionType: string;
}

interface ITunesSearchResponse {
  results: ITunesResult[];
}

export interface AlbumSearchResult {
  id: string;
  title: string;
  artist: string;
  year: string;
  thumb: string;       // Spotify 300px thumb
  fullArt: string;     // iTunes 3000px or Spotify 640px fallback
}

// --- Spotify token cache ---

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getSpotifyToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing Spotify credentials');
  }

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Spotify token error: ${res.status}`);
  }

  const data = (await res.json()) as SpotifyTokenResponse;
  cachedToken = data.access_token;
  // Expire 60s early to be safe
  tokenExpiresAt = Date.now() + (data.expires_in - 60) * 1000;
  return cachedToken;
}

// --- iTunes high-res lookup ---

async function getITunesArt(title: string, artist: string): Promise<string | null> {
  try {
    const query = `${artist} ${title}`;
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=3`
    );
    if (!res.ok) return null;

    const data = (await res.json()) as ITunesSearchResponse;

    // Find best match — prioritize exact artist + title match
    const titleLower = title.toLowerCase();
    const artistLower = artist.toLowerCase();

    const match = data.results.find(
      (r) =>
        r.wrapperType === 'collection' &&
        r.artistName.toLowerCase().includes(artistLower) &&
        r.collectionName.toLowerCase().includes(titleLower)
    ) ?? data.results.find(
      (r) =>
        r.wrapperType === 'collection' &&
        r.artistName.toLowerCase().includes(artistLower)
    );

    if (!match) return null;

    return match.artworkUrl100.replace('100x100bb', '3000x3000bb');
  } catch {
    return null;
  }
}

// --- Process Spotify results + iTunes art lookup ---

async function processResults(spotifyData: SpotifySearchResponse): Promise<NextResponse> {
  const seen = new Set<string>();
  const albums = spotifyData.albums.items.filter((a) => {
    const key = `${a.name}::${a.artists[0]?.name}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Fetch iTunes high-res art for each result in parallel
  const itunesArts = await Promise.all(
    albums.map((a) => getITunesArt(a.name, a.artists[0]?.name ?? ''))
  );

  const results: AlbumSearchResult[] = albums.map((a, i) => {
    const thumb =
      a.images.find((img) => img.width === 300)?.url ??
      a.images.find((img) => img.width >= 200 && img.width <= 400)?.url ??
      a.images[1]?.url ??
      a.images[0]?.url ??
      '';

    const spotifyFull = a.images[0]?.url ?? '';
    const fullArt = itunesArts[i] ?? spotifyFull;

    return {
      id: a.id,
      title: a.name,
      artist: a.artists.map((ar) => ar.name).join(', '),
      year: a.release_date?.slice(0, 4) ?? '',
      thumb,
      fullArt,
    };
  });

  return NextResponse.json({ results });
}

// --- Spotify search with auto-retry on 401 ---

async function searchSpotify(query: string): Promise<SpotifySearchResponse> {
  const doSearch = async (token: string) => {
    const q = encodeURIComponent(query);
    const url = `https://api.spotify.com/v1/search?q=${q}&type=album`;
    return fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
  };

  let token = await getSpotifyToken();
  let res = await doSearch(token);

  // Retry once on 401 (stale token)
  if (res.status === 401) {
    cachedToken = null;
    tokenExpiresAt = 0;
    token = await getSpotifyToken();
    res = await doSearch(token);
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Spotify ${res.status}: ${body}`);
  }

  return res.json() as Promise<SpotifySearchResponse>;
}

// --- Route handler ---

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q');
  if (!query) {
    return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
  }

  try {
    const spotifyData = await searchSpotify(query);
    return processResults(spotifyData);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[album-search]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
