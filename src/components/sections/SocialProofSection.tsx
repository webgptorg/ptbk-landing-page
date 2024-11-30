import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
    {
        quote: 'The Book programming language has revolutionized how we integrate LLM applications, cutting development time by 70%.',
        author: 'Senior Backend Engineer',
        company: 'Leading AI Driven Software Agency',
        avatar: '/avatars/placeholder1.png',
    },
    {
        quote: 'Using Promptbook feels like magic. We describe features in plain English and get working app immediately.',
        author: 'Frontend Developer',
        company: 'Innovative Fintech Startup',
        avatar: '/avatars/placeholder2.png',
    },
    {
        quote: 'Promptbook has transformed how we design and deploy software with much more personalized content.',
        author: 'Software Architect',
        company: 'Educational Platform Provider',
        avatar: '/avatars/placeholder3.png',
    },
    {
        quote: 'The Book language bridges the gap between technical and non-technical teams, making collaboration seamless.',
        author: 'Product Manager',
        company: 'SaaS Collaboration Platform',
        avatar: '/avatars/placeholder4.png',
    },
    {
        quote: "Promptbook's natural language approach simplifies coding and accelerates project delivery.",
        author: 'Full-Stack Developer',
        company: 'Digital Agency',
        avatar: '/avatars/placeholder5.png',
    },
    {
        quote: "Our CI/CD pipelines are now faster and more reliable thanks to Promptbook's automation capabilities.",
        author: 'DevOps Engineer',
        company: 'Enterprise Software Company',
        avatar: '/avatars/placeholder6.png',
    },
];

export function SocialProofSection() {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">Trusted by Developers Worldwide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex items-center space-x-4">
                                    {/*<Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.author} Avatar`}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />*/}
                                    <div>
                                        <p className="text-sm font-medium">{testimonial.author}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                                <blockquote className="space-y-2">
                                    <p className="text-muted-foreground">{`"${testimonial.quote}"`}</p>
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
