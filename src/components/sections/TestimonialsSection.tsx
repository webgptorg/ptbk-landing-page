'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useTestMode } from '@/hooks/useTestMode';
import { motion } from 'framer-motion';

const APPROVED_TESTIMONIALS: Array<{
    quote: string;
    author: string;
    role: string;
    avatar: string;
}> = [];

const NOT_APPROVED_TESTIMONIALS: Array<{
    quote: string;
    author: string;
    role: string;
    avatar: string;
}> = [
    {
        quote: 'Promptbook helped us save hundreds of hours of repetitive tasks.',
        author: 'Matěj Bacovský',
        role: 'Chief Digital Architect, NPI',
        avatar: './avatar1.jpeg',
    },
    {
        quote: 'By enabling programming in your native language, tools like Promptbook are bridging the gap between technology and people.',
        author: 'Daria Hvížďalová',
        role: 'Director, AI & Learning, 42 London',
        avatar: '/avatar2.jpeg',
    },
    {
        quote: 'Promptbook transforms programming into a creative process accessible to everyone. As someone passionate about innovation, I see this as a game-changer.',
        author: 'Tomáš Studeník',
        role: 'Radical Innovator, Founder & Investor',
        avatar: '/avatar3.webp',
    },
];

export function TestimonialsSection() {
    const isTestMode = useTestMode();
    const testimonials = [...APPROVED_TESTIMONIALS, ...(!isTestMode ? [] : NOT_APPROVED_TESTIMONIALS)];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Section background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container relative">
                <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>

                <Carousel
                    opts={{
                        align: 'start',
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                                <div className="h-full p-1">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="h-full"
                                    >
                                        <Card className="h-full relative group hover:-translate-y-1 transition-transform duration-300">
                                            {/* Gradient border effect */}
                                            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                                            <CardContent className="relative p-6 h-full bg-black/40 backdrop-blur-sm rounded-lg border border-primary/10">
                                                <blockquote className="space-y-4">
                                                    <p className="text-muted-foreground relative">
                                                        {`"${testimonial.quote}"`}
                                                    </p>
                                                    <footer className="flex items-center space-x-4">
                                                        <div className="relative">
                                                            {/* Avatar glow effect */}
                                                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                                                            <Avatar className="relative border-2 border-primary/20">
                                                                <AvatarImage src={testimonial.avatar} />
                                                                <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold">{testimonial.author}</div>
                                                            <div className="text-sm text-muted-foreground">
                                                                {testimonial.role}
                                                            </div>
                                                        </div>
                                                    </footer>
                                                </blockquote>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}
