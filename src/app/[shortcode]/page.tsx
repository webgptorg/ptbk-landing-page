import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Logo } from '@/components/ui/logo';
import { getSupabaseForServer } from '@/supabase/getSupabaseForServer';
import { headers } from 'next/headers';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import Script from 'next/script';

interface PageProps {
    params: { shortcode: string };
}

export default async function Page({ params }: PageProps) {
    const { shortcode } = params;

    if (!shortcode) {
        notFound();
    }

    try {
        const { data, error } = await getSupabaseForServer()
            .from('ShortcodeLink')
            .select('id, url')
            .eq('shortcode', shortcode)
            .single();

        if (error || !data || !data.url || data.url.length === 0) {
            notFound();
        }

        const headerList = headers();
        const userAgent = headerList.get('user-agent') ?? '';
        const referer = headerList.get('referer') ?? '';
        const ipHeader = headerList.get('x-forwarded-for') ?? '';
        const ip = ipHeader.split(',')[0];
        const language = headerList.get('accept-language') ?? '';
        const platform = headerList.get('sec-ch-ua-platform') ?? '';

        await getSupabaseForServer().from('ShortcodeLinkClick').insert({
            shortcodeLinkId: data.id,
            userAgent,
            referer,
            ip,
            language,
            platform,
            clickedAt: new Date().toISOString(),
        });

        const randomIndex = Math.floor(Math.random() * data.url.length);
        const selectedUrl = data.url[randomIndex];

        if (!selectedUrl) {
            notFound();
        }

        try {
            redirect(selectedUrl);
        } finally {
            return (
                <div className="min-h-screen">
                    <Header />
                    <Logo />
                    <main className="container mx-auto px-6 py-8">
                        <div className="text-center">
                            Redirecting to: <Link href={selectedUrl}>{selectedUrl}</Link>
                        </div>
                        <Footer />
                        <Script id="redirect-script" strategy="beforeInteractive">
                            {`
                                window.location.href = "${selectedUrl}";
                            `}
                        </Script>
                    </main>
                </div>
            );
        }
    } catch (err) {
        console.error('Error processing shortcode:', err);
        notFound();
    }
}
