import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NotFoundSection } from '@/components/sections/NotFoundSection';
import { Logo } from '@/components/ui/logo';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <Logo />
            <main className="container mx-auto px-6 py-8">
                <NotFoundSection />
                <Footer />
            </main>
        </div>
    );
}
