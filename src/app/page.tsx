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
          {/* Rest of your hero section */}
        </main>
      </div>
  )
}