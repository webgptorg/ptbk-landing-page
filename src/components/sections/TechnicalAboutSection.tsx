import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BOOK_LANGUAGE_VERSION, PROMPTBOOK_ENGINE_VERSION } from '@promptbook/core';
import { Code2 } from 'lucide-react';
import Link from 'next/link';
import { LANDING_PAGE_VERSION, VERCEL_GIT_COMMIT_MESSAGE, VERCEL_GIT_COMMIT_SHA } from '../../../config';

export function TechnicalAboutSection() {
    const features = [
        // TODO: Link should be on entire card and not just the text
        {
            icon: <Code2 className="h-8 w-8" />,
            title: BOOK_LANGUAGE_VERSION,
            description: (
                <>
                    Version of <Link href="https://github.com/webgptorg/book">Book language</Link>
                </>
            ),
        },
        {
            icon: <Code2 className="h-8 w-8" />,
            title: PROMPTBOOK_ENGINE_VERSION,
            description: (
                <>
                    Version of <Link href="https://github.com/webgptorg/promptbook">Promptbook engine</Link>
                </>
            ),
        },
        {
            icon: <Code2 className="h-8 w-8" />,
            title: LANDING_PAGE_VERSION,
            description: (
                <>
                    Version of the landing page on <Link href="https://ptbk.io/">ptbk.io</Link>, commit{' '}
                    <code>
                        <Link href={`https://github.com/hejny/ptbk-landing-page/commit/${VERCEL_GIT_COMMIT_SHA}`}>
                            {VERCEL_GIT_COMMIT_MESSAGE || VERCEL_GIT_COMMIT_SHA}
                        </Link>
                    </code>
                </>
            ),
        },
    ];

    return (
        <section className="py-24 relative">
            {/* Add subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container relative">
                <h2 className="text-3xl font-bold text-center mb-12">Technical information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background to-primary/5"
                        >
                            <CardHeader>
                                <div className="mb-4 text-primary/80 group-hover:text-primary transition-colors duration-300 relative">
                                    {/* Add glow effect behind icon */}
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                    <div className="relative">{feature.icon}</div>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription>{feature.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
