// src/app/cdn-test/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CDN Mirror Test - PTBK',
    description: 'Test page for the CDN mirror functionality',
};

export default function CdnTestPage() {
    const testFiles = [
        {
            name: 'PDF Document',
            originalUrl: 'https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/user/knowledge-source/d/1/ao-f-final.pdf',
            mirrorUrl: '/api/files/user/knowledge-source/d/1/ao-f-final.pdf',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">CDN Mirror Test</h1>
            
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">How it works</h2>
                <p className="text-gray-600 mb-4">
                    The CDN mirror proxies requests from <code className="bg-gray-100 px-2 py-1 rounded">https://ptbk.io/files/*</code> 
                    to <code className="bg-gray-100 px-2 py-1 rounded">https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/*</code>
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-blue-800 mb-2">URL Mapping:</h3>
                    <div className="space-y-2 text-sm">
                        <div>
                            <strong>Original:</strong> 
                            <code className="ml-2 text-blue-600">https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/[path]</code>
                        </div>
                        <div>
                            <strong>Mirror:</strong> 
                            <code className="ml-2 text-green-600">https://ptbk.io/files/[path]</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-semibold">Test Files</h2>
                
                {testFiles.map((file, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">{file.name}</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-700 mb-2">Original CDN URL:</h4>
                                <a 
                                    href={file.originalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline break-all text-sm"
                                >
                                    {file.originalUrl}
                                </a>
                            </div>
                            
                            <div>
                                <h4 className="font-medium text-gray-700 mb-2">Mirror URL:</h4>
                                <a 
                                    href={file.mirrorUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-800 underline break-all text-sm"
                                >
                                    {`https://ptbk.io${file.mirrorUrl}`}
                                </a>
                                <div className="mt-2">
                                    <a 
                                        href={file.mirrorUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                                    >
                                        Test Mirror
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Features</h2>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Streams files directly from the original CDN
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Preserves original content-type and headers
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Supports CORS for cross-origin requests
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Handles GET, HEAD, and OPTIONS requests
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Proper error handling for missing files
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Caching headers for improved performance
                    </li>
                </ul>
            </div>
        </div>
    );
}
