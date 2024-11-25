"use client"

export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full">
            {/* Base grid pattern */}
            <div className="absolute h-full w-full dark:opacity-20 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Circuit-like lines */}
            <div className="absolute h-full w-full dark:opacity-10 opacity-5">
                <svg width="100%" height="100%">
                    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="10" cy="10" r="2" fill="currentColor" />
                        <circle cx="90" cy="90" r="2" fill="currentColor" />
                        <path d="M10 10l80 80M90 10l-80 80" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>
            </div>

            {/* Gradient overlays */}
            <div className="absolute h-full w-full bg-gradient-to-br from-primary/10 via-background to-primary/10" />
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
        </div>
    )
}