"use client"

export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full dark:opacity-20 opacity-10">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute h-full w-full bg-gradient-to-br from-primary/10 via-background to-primary/10" />
        </div>
    )
}