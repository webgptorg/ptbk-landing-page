'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { getBookTemplates } from '@promptbook/templates';
import type { PipelineString } from '@promptbook/types';
import Link from 'next/link';
import { useState } from 'react';
import { BookCodeEditor } from '../BookCodeEditor/BookCodeEditor';
import { FrozenFrame } from '../FrozenFrame/FrozenFrame';

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
            bookSourcecode: pipeline.sources[0]!.content!,
        };
    });

interface PlaygroundItemProps {
    title: string;
    codeUrl: string;
    previewUrl: string;
    bookSourcecode: PipelineString;
    fullStudioUrl: string;
}

export function PlaygroundItem(props: PlaygroundItemProps) {
    const { title, /* codeUrl, */ previewUrl, bookSourcecode, fullStudioUrl } = props;

    const [isActivated, setActivated] = useState(false);

    // !!! Do not activate
    // !!! Add NPM downloads and other proofs

    return (
        <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* The Book Section */}
            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-medium">The Book</h3>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm border rounded-lg overflow-auto flex items-center justify-center">
                        <BookCodeEditor
                            // title={`${title} Book sourcecode`}
                            className="min-h-[400px] h-full w-full"
                            bookSourcecode={bookSourcecode}
                            {...{ fullStudioUrl }}
                            // {...{ isActivated, setActivated }}
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
                            {...{ isActivated, setActivated, fullStudioUrl }}
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
                                            fullStudioUrl={example.fullStudioUrl}
                                            codeUrl={example.codeUrl}
                                            previewUrl={example.previewUrl}
                                            bookSourcecode={example.bookSourcecode}
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
