import { BackgroundGrid } from '@/components/ui/background-grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MarkdownContent } from '../utils/MarkdownContent/MarkdownContent';

export function HeroSection() {
    return (
        <div className="relative overflow-hidden p-6">
            <BackgroundGrid />
            <div className="max-w-3xl space-y-8 relative z-10">
                {/* added z-10 to put content above grid */}
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    <MarkdownContent>
                        {`
                            Program in Plain English
                        `}
                    </MarkdownContent>
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
                        <Link href={'https://promptbook.studio/miniapps/create'}>Get Started</Link>
                    </Button>
                    <Button variant="outline" size="lg">
                        <Link href={'https://github.com/webgptorg/book'}>Learn More</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
