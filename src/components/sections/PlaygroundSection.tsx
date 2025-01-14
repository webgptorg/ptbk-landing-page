'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { getBookTemplates } from '@promptbook/templates';
import Link from 'next/link';

const PTBKIO_INTEGRATION_ID = '1239a0ee-02bd-4aa8-98d2-0dc7a2eb2612';
//     <- TODO: Transfer to env variables

// Configuration for playground examples
const PLAYGROUND_EXAMPLES = getBookTemplates().map((pipeline, index) => {
    const bookFilename = pipeline.pipelineUrl.split('/').pop();
    const book = `miniapps-collection/${bookFilename}`;

    return {
        id: index,
        title: pipeline.title,
        fullStudioUrl: `https://promptbook.studio/miniapp/new?book=${book}`,
        codeUrl: `https://promptbook.studio/embed/code-miniapp?integrationId=${PTBKIO_INTEGRATION_ID}&book=${book}`,
        previewUrl: `https://promptbook.studio/embed/preview-miniapp?integrationId=${PTBKIO_INTEGRATION_ID}&book=${book}`,
    };
});

interface PlaygroundItemProps {
    codeUrl: string;
    previewUrl: string;
}

const PlaygroundItem = ({ codeUrl, previewUrl }: PlaygroundItemProps) => (
    <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* The Book Section */}
        <div className="flex-1 space-y-2">
            <h3 className="text-sm font-medium">The Book</h3>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm border rounded-lg overflow-auto">
                    <iframe title="✨ Book editor" src={codeUrl} className="min-h-[400px] h-full w-full" />
                    {/* <- TODO: [🎇] This should integrated via SDK not <iframe/> */}
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
                    <iframe title="✨ Hello Book Miniapp" src={previewUrl} className="min-h-[400px] h-full w-full" />
                    {/* <- TODO: [🎇] This should integrated via SDK not <iframe/> */}
                </div>
            </div>
        </div>
    </div>
);

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
                                        <PlaygroundItem codeUrl={example.codeUrl} previewUrl={example.previewUrl} />

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
