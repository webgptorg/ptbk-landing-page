import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { SocialProofSection } from "@/components/sections/SocialProofSection"
import {FeaturesSection} from "@/components/sections/FeaturesSection"
import { PlaygroundSection } from "@/components/sections/PlaygroundSection"
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-6 py-24">
                <HeroSection />
                <PlaygroundSection />
                <FeaturesSection />
                <SocialProofSection />
                <Footer />
            </main>
        </div>
    )
}