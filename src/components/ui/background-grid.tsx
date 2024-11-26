export function BackgroundGrid() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
            <div className="absolute h-full w-full dark:bg-grid-white/[0.05] bg-grid-black/[0.05]" />
            <div className="absolute h-full w-full backdrop-blur-[100px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
        </div>
    );
}

/**
 * TODO: Confusing name - its more like `<HeroSectionBackground/>`
 */
