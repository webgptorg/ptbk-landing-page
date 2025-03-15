import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ArticleSection } from '@/components/sections/ArticleSection';
import { Logo } from '@/components/ui/logo';

async function fetchContent() {
    // TODO: [🙄] DRY, maybe make hook for this
    const response = await fetch('https://raw.githubusercontent.com/webgptorg/book/refs/heads/main/SIGNPOST.md', {
        cache: 'no-store', // <- Note: Ensures fresh content
    });

    if (!response.ok) {
        throw new Error('Failed to fetch README content');
    }

    return response.text();
}

export default async function ContactPage() {
    const content = await fetchContent();

    return (
        <div className="min-h-screen">
            <Header />
            <Logo />
            <main className="container mx-auto px-6 py-8">
                <ArticleSection>{content}</ArticleSection>
                <Footer />
            </main>
        </div>
    );
}
