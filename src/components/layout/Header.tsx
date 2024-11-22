import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
    return (
        <header className="container mx-auto px-6 py-4">
            <div className="flex justify-end">
                <ModeToggle />
            </div>
        </header>
    )
}