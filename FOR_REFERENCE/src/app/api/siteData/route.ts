import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ error: 'Invalid path. Route should be /api/siteData/[object]' }, { status: 400 });
}