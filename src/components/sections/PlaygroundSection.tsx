'use client';

import { Separator } from '@/components/ui/separator';

/*
TODO: Remove
import { spaceTrim } from '@promptbook/utils';
import { useState } from 'react';

const PLACEHOLDER_TEXT = spaceTrim(`

    # ✨ Hello Book

    -   INPUT PARAMETER {yourName} Your name
    -   OUTPUT PARAMETER {letter} Letter for you

    ## Writing Greeting

    -   PERSONA Jane, linguist and computer scientist
    -   EXPECT MIN 3 Words
    -   EXPECT MAX 1 Page
    
    > Write a letter for {yourName}

    -> {letter}
    
`);
*/

export function PlaygroundSection() {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container max-w-6xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">✨ Try It Yourself</h2>
                <div className="flex gap-8">
                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">The Book</h3>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div
                                className={`
                                    min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm 
                                    border rounded-lg  overflow-auto`}
                            >
                                <iframe
                                    title="✨ Book editor"
                                    src={`https://promptbook.studio/embed/code-miniapp?integrationId=1239a0ee-02bd-4aa8-98d2-0dc7a2eb2612`}
                                    className="min-h-[400px] h-full w-full"
                                />
                                {/* <- TODO: [🎇] This should integrated via SDK not <iframe/> */}
                            </div>
                        </div>
                    </div>

                    <Separator orientation="vertical" className="h-[400px] bg-primary/20" />

                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Your App</h3>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div
                                className={`
                                    min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm 
                                    border rounded-lg  overflow-auto`}
                            >
                                <iframe
                                    title="✨ Hello Book Miniapp"
                                    src={`https://promptbook.studio/embed/preview-miniapp?integrationId=1239a0ee-02bd-4aa8-98d2-0dc7a2eb2612`}
                                    className="min-h-[400px] h-full w-full"
                                />
                                {/* <- TODO: [🎇] This should integrated via SDK not <iframe/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
