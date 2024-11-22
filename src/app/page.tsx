import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { SocialProofSection } from "@/components/sections/SocialProofSection"

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-6 py-24">
                <HeroSection />
                <SocialProofSection />
            </main>
        </div>
    )
}