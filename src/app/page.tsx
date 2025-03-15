import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PlaygroundSection } from '@/components/sections/PlaygroundSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Logo } from '@/components/ui/logo';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <Logo />
            <main className="container mx-auto px-6 py-8">
                <HeroSection />
                <PlaygroundSection />
                <TestimonialsSection />
                <FeaturesSection />
                {/*
                Note: [😴] This section is commented out because it has just lorem-ipsum content and also <TestimonialsSection /> has same purpose
                <SocialProofSection />
                */}
                <AboutUsSection />
                <FAQSection />
                <Footer />
            </main>
        </div>
    );
}
