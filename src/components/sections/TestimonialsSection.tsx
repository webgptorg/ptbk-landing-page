"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        quote: "This is revolutionizing how we write software. What used to take weeks now takes hours.",
        author: "Sarah Chen",
        role: "CTO, TechStart",
        avatar: "/avatar1.png"  // We'll add these images later
    },
    {
        quote: "The ability to describe features in plain English and get working code is incredible.",
        author: "Michael Rodriguez",
        role: "Lead Developer, EnterpriseAI",
        avatar: "/avatar2.png"
    },
    {
        quote: "This tool has completely transformed our development workflow. Game-changing technology.",
        author: "Emily Watson",
        role: "Product Manager, InnovateCo",
        avatar: "/avatar3.png"
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Developers Are Saying
                </h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                <Card>
                                    <CardContent className="p-6">
                                        <blockquote className="space-y-4">
                                            <p className="text-muted-foreground">"{testimonial.quote}"</p>
                                            <footer className="flex items-center space-x-4">
                                                <Avatar>
                                                    <AvatarImage src={testimonial.avatar} />
                                                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold">{testimonial.author}</div>
                                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                                </div>
                                            </footer>
                                        </blockquote>
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
    )
}