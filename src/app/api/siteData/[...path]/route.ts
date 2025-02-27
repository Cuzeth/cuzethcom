import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Enhanced path parsing with validation
        const { pathname } = new URL(request.url);
        const pathSegments = pathname.split('/').filter(Boolean);

        // Guard clause for invalid path length
        if (pathSegments.length < 3) {
            return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
        }

        const dynamicPath = pathSegments.slice(2).join('/');

        // Safe dynamic import with error handling
        let data;
        try {
            data = await import('@/app/data');
        } catch (importError) {
            console.error('Data import failed', importError);
            return NextResponse.json({ error: 'Data loading failed' }, { status: 500 });
        }

        const responseData = (data as Record<string, any>)[dynamicPath];

        // More granular response handling
        if (responseData) {
            return NextResponse.json(responseData);
        } else {
            return NextResponse.json({ error: 'Object not found' }, { status: 404 });
        }
    } catch (unexpectedError) {
        console.error('Unexpected error in GET handler', unexpectedError);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}