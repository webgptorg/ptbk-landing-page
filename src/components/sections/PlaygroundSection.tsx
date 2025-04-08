'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { getBookTemplates } from '@promptbook/templates';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Vector } from 'xyzt';

const PTBKIO_INTEGRATION_ID = '1239a0ee-02bd-4aa8-98d2-0dc7a2eb2612';
//     <- TODO: Transfer to env variables

// Configuration for playground examples
const PLAYGROUND_EXAMPLES = getBookTemplates()
    .filter(
        ({ pipelineUrl }) =>
            pipelineUrl.includes('/chatbot.book') ||
            pipelineUrl.includes('/corrector.book') ||
            pipelineUrl.includes('/sheets.book'),
    )
    .map((pipeline, index) => {
        const bookFilename = pipeline.pipelineUrl.split('/').pop();
        const book = `miniapps-collection/${bookFilename}`;

        return {
            id: index,
            title: pipeline.title,
            fullStudioUrl: `https://promptbook.studio/?book=${book}`,
            codeUrl: `https://promptbook.studio/embed/code-miniapp?integrationId=${PTBKIO_INTEGRATION_ID}&book=${book}`,
            previewUrl: `https://promptbook.studio/embed/preview-miniapp?integrationId=${PTBKIO_INTEGRATION_ID}&book=${book}`,
        };
    });

interface FrozenFrameProps {
    title: string;
    url: string;
    className: string;
    isActivated: boolean;
    setActivated(isActivated: boolean): void;
}

const GRID_SIZE = 15;

export function FrozenFrame(props: FrozenFrameProps) {
    const { title, url, className, isActivated, setActivated } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<Vector>(Vector.square(512));
    const { theme: landingPageTheme } = useTheme();

    useEffect(() => {
        if (!containerRef.current) return;

        // Store the current ref value to use in cleanup
        const currentRef = containerRef.current;

        // Initial measurement
        const updateDimensions = () => {
            const { clientWidth, clientHeight } = currentRef;
            setDimensions(new Vector(clientWidth, clientHeight));
        };

        updateDimensions();

        // Set up resize observer to update dimensions when container size changes
        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(currentRef);

        return () => {
            // Use the captured ref value in cleanup
            resizeObserver.disconnect();
        };
    }, []);

    const promptbookStudioTheme = landingPageTheme === 'light' ? 'LIGHT' : 'DARK';
    // <- TODO: Some way how to handle `landingPageTheme === 'system'`

    const websiteUrl = new URL(url);
    websiteUrl.searchParams.set('editor', 'MONACO');
    websiteUrl.searchParams.set('theme', promptbookStudioTheme);
    websiteUrl.searchParams.set('nonce', '🛹');
    // <- TODO: !!! Also pass mode here and disable advanced and develope mode

    if (isActivated) {
        return (
            <iframe
                src={websiteUrl.href}
                allow="cross-origin-isolated"
                cross-origin="anonymous"
                loading="eager" // <- Note: Now the miniapp is activated so show it immediately
                {...{ className, title }}
            />
        );
    } else {
        const screenshotUrl = new URL('https://browser.s5.ptbk.io/screenshot'); // <- TODO: Unhardcode https://browser.s5.ptbk.io/, add to config
        const dimensionsRounded = dimensions.map((value) => Math.ceil(value / GRID_SIZE) * GRID_SIZE);
        screenshotUrl.searchParams.set('url', websiteUrl.href);
        screenshotUrl.searchParams.set('theme', promptbookStudioTheme);
        screenshotUrl.searchParams.set('width', dimensionsRounded.x.toString());
        screenshotUrl.searchParams.set('height', dimensionsRounded.y.toString());

        return (
            <div ref={containerRef} className={className}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={screenshotUrl.href}
                    style={{
                        objectFit: 'contain',
                        objectPosition: '0% 0%',
                    }}
                    loading="lazy"
                    alt={title}
                    onClick={() => void setActivated(true)}
                    title={title}
                    className="w-full h-full"
                />
            </div>
        );
    }
}

interface PlaygroundItemProps {
    title: string;
    codeUrl: string;
    previewUrl: string;
}

export function PlaygroundItem(props: PlaygroundItemProps) {
    const { title, codeUrl, previewUrl } = props;
    const { theme } = useTheme();

    const [isActivated, setActivated] = useState(false);

    return (
        <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* The Book Section */}
            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-medium">The Book{theme}</h3>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm border rounded-lg overflow-auto">
                        <FrozenFrame
                            title={`${title} Book text`}
                            url={codeUrl}
                            className="min-h-[400px] h-full w-full"
                            {...{ isActivated, setActivated }}
                        />

                        {/* <- TODO: [🎇] This should integrated via SDK not <iframe/> or <img/>*/}
                    </div>
                </div>
            </div>

            {/* Vertical Separator for large screens */}
            <Separator orientation="vertical" className="hidden md:block h-[400px] bg-primary/20" />

            {/* Your App Section */}
            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-medium">Your App</h3>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm border rounded-lg overflow-auto">
                        <FrozenFrame
                            title={`${title} Miniapp`}
                            url={previewUrl}
                            className="min-h-[400px] h-full w-full"
                            {...{ isActivated, setActivated }}
                        />
                        {/* <- TODO: [🎇] This should integrated via SDK not <iframe/> or <img/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PlaygroundSection() {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="container max-w-6xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">✨ Try It Yourself</h2>
                <Carousel className="w-full">
                    <CarouselContent>
                        {PLAYGROUND_EXAMPLES.map((example) => (
                            <CarouselItem key={example.id}>
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-6 text-center">{example.title}</h3>
                                        <PlaygroundItem
                                            title={example.title}
                                            codeUrl={example.codeUrl}
                                            previewUrl={example.previewUrl}
                                        />
                                        <br />
                                        <Button size="lg">
                                            <Link href={example.fullStudioUrl}>◳ Open in Studio</Link>
                                        </Button>
                                        {/* <- TODO: @JorgeSquared Design better */}
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
