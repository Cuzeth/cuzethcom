import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Extract the path segments from the request URL
    const { pathname } = new URL(request.url);
    const pathSegments = pathname.split('/').filter(Boolean);

    // Assume the dynamic segment starts after 'api/siteData'
    const dynamicPath = pathSegments.slice(2).join('/'); // 'api' is at index 0, 'siteData' is at index 1

    // Dynamically import all exports from data.ts
    const data = await import('@/app/data');

    // Select the appropriate object based on the dynamic path
    const responseData = (data as Record<string, any>)[dynamicPath];

    if (responseData) {
        return NextResponse.json(responseData);
    } else {
        return NextResponse.json({ error: 'Object not found' }, { status: 404 });
    }
}