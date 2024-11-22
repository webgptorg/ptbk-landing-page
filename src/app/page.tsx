import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
    return (
        <div className="min-h-screen">
            <header className="container mx-auto px-6 py-4">
                <div className="flex justify-end">
                    <ModeToggle />
                </div>
            </header>
            <main className="container mx-auto px-6 py-24">
                <div className="max-w-3xl space-y-8">
                    <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                        Program in Plain English
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A revolutionary 4th generation language that transforms natural language specifications into functional applications. Write what you want, get what you need.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}