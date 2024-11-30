import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechnicalAboutSection } from '@/components/sections/TechnicalAboutSection';
import { Logo } from '@/components/ui/logo';

export default function About() {
    return (
        <div className="min-h-screen">
            <Header />
            <Logo />
            <main className="container mx-auto px-6 py-8">
                <HeroSection />
                <TechnicalAboutSection />
                <Footer />
            </main>
        </div>
    );
}
