import { NextRequest, NextResponse } from 'next/server';

const CDN_BASE_URL = 'https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk';

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
    try {
        // Reconstruct the file path from the dynamic segments
        const filePath = params.path.join('/');

        // Construct the original CDN URL
        const originalUrl = `${CDN_BASE_URL}/${filePath}`;

        console.log(`Proxying request: /files/${filePath} -> ${originalUrl}`);

        // Fetch the file from the original CDN
        const response = await fetch(originalUrl, {
            method: 'GET',
            headers: {
                // Forward some headers that might be useful
                'User-Agent': request.headers.get('user-agent') || 'ptbk-cdn-mirror',
            },
        });

        if (!response.ok) {
            console.error(`Failed to fetch from CDN: ${response.status} ${response.statusText}`);
            return new NextResponse(`File not found: ${filePath}`, {
                status: response.status,
                statusText: response.statusText,
            });
        }

        // Get the response body as a stream
        const body = response.body;

        if (!body) {
            return new NextResponse('Empty response from CDN', { status: 500 });
        }

        // Create headers for the proxied response
        const headers = new Headers();

        // Copy important headers from the original response
        const headersToProxy = [
            'content-type',
            'content-length',
            'content-disposition',
            'cache-control',
            'etag',
            'last-modified',
            'expires',
        ];

        headersToProxy.forEach((headerName) => {
            const headerValue = response.headers.get(headerName);
            if (headerValue) {
                headers.set(headerName, headerValue);
            }
        });

        // Add CORS headers to allow cross-origin requests
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');

        // Add cache headers for better performance
        if (!headers.has('cache-control')) {
            headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
        }

        // Return the proxied response
        return new NextResponse(body, {
            status: response.status,
            statusText: response.statusText,
            headers,
        });
    } catch (error) {
        console.error('Error proxying CDN request:', error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return new NextResponse(`CDN proxy error: ${errorMessage}`, {
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
}

// Handle HEAD requests for file existence checks
export async function HEAD(request: NextRequest, { params }: { params: { path: string[] } }) {
    try {
        const filePath = params.path.join('/');
        const originalUrl = `${CDN_BASE_URL}/${filePath}`;

        const response = await fetch(originalUrl, {
            method: 'HEAD',
            headers: {
                'User-Agent': request.headers.get('user-agent') || 'ptbk-cdn-mirror',
            },
        });

        const headers = new Headers();

        // Copy relevant headers
        const headersToProxy = ['content-type', 'content-length', 'cache-control', 'etag', 'last-modified', 'expires'];

        headersToProxy.forEach((headerName) => {
            const headerValue = response.headers.get(headerName);
            if (headerValue) {
                headers.set(headerName, headerValue);
            }
        });

        headers.set('Access-Control-Allow-Origin', '*');

        return new NextResponse(null, {
            status: response.status,
            statusText: response.statusText,
            headers,
        });
    } catch (error) {
        console.error('Error in HEAD request:', error);
        return new NextResponse(null, { status: 500 });
    }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400',
        },
    });
}
