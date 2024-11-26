'use client';

import BackgroundImage from '../../../public/background-ptbk.svg';

console.log('backgroundImage:', BackgroundImage);

export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full">
            {/* Base grid pattern */}
            <div className="absolute h-full w-full dark:opacity-20 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Circuit-like lines */}
            <div className="absolute h-full w-full dark:opacity-10 opacity-5">
                <BackgroundImage width="100%" height="100%" />
            </div>

            {/* Gradient overlays */}
            <div className="absolute h-full w-full bg-gradient-to-br from-primary/10 via-background to-primary/10" />
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
        </div>
    );
}
