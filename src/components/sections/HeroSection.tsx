'use client';
import { BackgroundGrid } from '@/components/ui/background-grid';
import { Button } from '@/components/ui/button';
import { useRandomSeed } from '@/hooks/useRandomSeed';
import { spaceTrim } from '@promptbook/utils';
import Link from 'next/link';
import { CLAIMS } from '../../../claims';
import { MarkdownContent } from '../utils/MarkdownContent/MarkdownContent';
import { randomItem } from '../utils/Shuffle/randomItem';

export function HeroSection() {
    const seed = useRandomSeed('claim');
    const claim = randomItem(seed, ...CLAIMS);
    const [headclaim, ...subclaimItems] = spaceTrim(claim).split('\n');
    const subclaim = subclaimItems.join('\n');
    console.log('!!!', { claim, headclaim, subclaim });

    return (
        <div className="relative overflow-hidden p-6">
            <BackgroundGrid />
            <div className="max-w-3xl space-y-8 relative z-10">
                {/* added z-10 to put content above grid */}
                <h1 className="scroll-m-20 text-6xl tracking-tight lg:text-7xl">
                    <MarkdownContent>{headclaim}</MarkdownContent>
                </h1>
                <p className="text-xl text-muted-foreground">
                    <MarkdownContent>{subclaim}</MarkdownContent>
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
