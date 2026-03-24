import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export interface AlbumSearchResult {
  id: string;
  title: string;
  artist: string;
  year: string;
  thumb: string;
  fullArt: string;
}

interface MBReleaseGroup {
  id: string;
  title: string;
  'primary-type'?: string;
  'first-release-date'?: string;
  'artist-credit'?: { name: string }[];
}

const USER_AGENT = 'CoverQuad/1.0 (https://cuzeth.com/lab/coverquad)';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim();

  if (!query) {
    return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
  }

  try {
    const mbUrl = `https://musicbrainz.org/ws/2/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=16`;

    const res = await fetch(mbUrl, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'MusicBrainz search failed' }, { status: 502 });
    }

    const data = (await res.json()) as { 'release-groups': MBReleaseGroup[] };
    const groups = data['release-groups'] || [];

    // Filter to albums/EPs that have a title and artist
    const results: AlbumSearchResult[] = groups
      .filter((g) => g.title && g['artist-credit']?.length)
      .map((g) => {
        const artist = g['artist-credit']!.map((a) => a.name).join(', ');
        const year = g['first-release-date']?.slice(0, 4) || '';
        return {
          id: g.id,
          title: g.title,
          artist,
          year,
          thumb: `https://coverartarchive.org/release-group/${g.id}/front-250`,
          fullArt: `https://coverartarchive.org/release-group/${g.id}/front-1200`,
        };
      });

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
