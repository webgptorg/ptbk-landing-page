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
            .select('id, url, landingPage')
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

        if (data.landingPage) {
            // Check for raw HTML markers
            const isRawHtml =
                data.landingPage.includes('<!--no-template-->') || data.landingPage.includes('<!DOCTYPE html>');

            // Replace #url header with selectedUrl
            let landingContent = data.landingPage.replace(/^#url.*$/m, `# ${selectedUrl}`);

            // Check for existing link/button to selectedUrl or #url
            const linkRegex = new RegExp(
                `(\\[.*?\\]\\((?:${selectedUrl}|#url)\\))|(<a\\s+[^>]*href=["'](?:${selectedUrl}|#url)["'][^>]*>)|(<button[^>]*>(.|\\n)*?<\/button>)`,
                'i',
            );
            if (!linkRegex.test(landingContent)) {
                landingContent += `

<a href="${selectedUrl}" class="inline-block bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition no-underline">
  Go to link
</a>
`;
            }

            if (isRawHtml) {
                return <div dangerouslySetInnerHTML={{ __html: landingContent }} />;
            } else {
                const { MarkdownContent } = await import('@/components/utils/MarkdownContent/MarkdownContent');
                return (
                    <div className="min-h-screen">
                        <Header />
                        <Logo />
                        <main className="container mx-auto px-6 py-8">
                            <MarkdownContent>{landingContent}</MarkdownContent>
                            <Footer />
                        </main>
                    </div>
                );
            }
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
