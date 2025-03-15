import { BackgroundGrid } from '@/components/ui/background-grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MarkdownContent } from '../utils/MarkdownContent/MarkdownContent';

export function NotFoundSection() {
    return (
        <div className="relative overflow-hidden p-6">
            <BackgroundGrid />
            <div className="max-w-3xl space-y-8 relative z-10">
                {/* added z-10 to put content above grid */}
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">Page not found :(</h1>
                <p className="text-xl text-muted-foreground">
                    <MarkdownContent>
                        {`
                            We can generate a page specifically for you, or better still,
                            you can find all the information you need on our [home page](https://www.ptbk.io/).
                        `}
                    </MarkdownContent>
                </p>
                <div className="flex gap-4">
                    <Button size="lg">
                        <Link href={'/'}>Homepage</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
