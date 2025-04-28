import { redirect } from 'next/navigation';

export default function MlPrague2025Redirect() {
    if (typeof window !== 'undefined') {
        // This will never run on the server, but for safety
        return null;
    }
    // Randomly choose destination
    const destinations = ['/', 'https://github.com/webgptorg/promptbook/'];
    const randomIndex = Math.floor(Math.random() * destinations.length);
    redirect(destinations[randomIndex]);
    return null;
}

// For static export, use a client-side redirect as fallback
export const dynamic = 'force-dynamic';