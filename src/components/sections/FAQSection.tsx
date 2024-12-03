'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Types for our FAQ items
interface FAQItem {
    id: string;
    question: string;
    answer: string;
    githubUrl?: string;
    lastUpdated?: string;
}

// Function to format date consistently
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Sample data for testing
const SAMPLE_FAQS: FAQItem[] = [
    {
        id: '1',
        question: 'What is Promptbook?',
        answer: 'Promptbook is a programming language designed for LLM applications, helping developers integrate AI capabilities more efficiently.',
        lastUpdated: '2024-03-20'
    },
    {
        id: '2',
        question: 'How do I get started?',
        answer: 'You can start by visiting our documentation and trying out the playground examples.',
        lastUpdated: '2024-03-21'
    }
];

export function FAQSection() {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container max-w-4xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="space-y-4">
                    {SAMPLE_FAQS.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="bg-card/50 backdrop-blur-sm rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-left hover:no-underline">
                                <div className="flex flex-col items-start">
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    {faq.lastUpdated && (
                                        <span className="text-xs text-muted-foreground mt-1">
                                            Last updated: {formatDate(faq.lastUpdated)}
                                        </span>
                                    )}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-4 pb-2">
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}