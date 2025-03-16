'use client';
import { BackgroundGrid } from '@/components/ui/background-grid';
import { Button } from '@/components/ui/button';
import { useRandomSeed } from '@/hooks/useRandomSeed';
import Link from 'next/link';
import { MarkdownContent } from '../utils/MarkdownContent/MarkdownContent';
import { randomItem } from '../utils/Shuffle/randomItem';

export function HeroSection() {
    const seed1 = useRandomSeed('claim1');
    const claim1 = randomItem(seed1, 'Program in Plain English', 'aaa');

    return (
        <div className="relative overflow-hidden p-6">
            <BackgroundGrid />
            <div className="max-w-3xl space-y-8 relative z-10">
                {/* added z-10 to put content above grid */}
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    <MarkdownContent>{claim1}</MarkdownContent>
                </h1>
                <p className="text-xl text-muted-foreground">
                    <MarkdownContent>
                        {`
                            A revolutionary [4th generation language](https://github.com/webgptorg/promptbook/discussions/180) that transforms
                            natural language specifications into functional applications. Write what you want, get what you need.
                        `}
                    </MarkdownContent>
                </p>
                <div className="flex gap-4">
                    <Button size="lg">
                        <Link href={'/get-started'}>Get Started</Link>
                    </Button>
                    <Button variant="outline" size="lg">
                        <Link href={'/manifest'}>Learn More</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
