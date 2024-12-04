'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    url: string;
    lastUpdated?: string;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export function FAQSection() {
    // State management for our dynamic data
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch FAQs when the component mounts
    useEffect(() => {
        async function fetchFAQs() {
            try {
                setIsLoading(true);
                const response = await fetch('/api/faqs');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQs');
                }
                const data = await response.json();

                // Sort FAQs by last updated date to show newest first
                const sortedFaqs = data.faqs.sort((a: FAQItem, b: FAQItem) =>
                    new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime()
                );

                setFaqs(sortedFaqs);
            } catch (err) {
                setError('Failed to load FAQs. Please try again later.');
                console.error('Error loading FAQs:', err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchFAQs();
    }, []);

    // Loading state with a clean, centered spinner
    if (isLoading) {
        return (
            <section className="py-24 relative">
                <div className="container max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="text-center text-muted-foreground">Loading FAQs...</div>
                    </div>
                </div>
            </section>
        );
    }

    // Error state with clear error message and styling
    if (error) {
        return (
            <section className="py-24 relative">
                <div className="container max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="text-center text-red-500 p-4 rounded-lg bg-red-50 dark:bg-red-900/10">
                        {error}
                    </div>
                </div>
            </section>
        );
    }

    // Main render with enhanced styling and accessibility
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container max-w-4xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="bg-card/50 backdrop-blur-sm rounded-lg px-6 transition-all hover:bg-card/70"
                        >
                            <AccordionTrigger className="text-left hover:no-underline group">
                                <div className="flex flex-col items-start">
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {faq.question}
                                    </h3>
                                    {faq.lastUpdated && (
                                        <span className="text-xs text-muted-foreground mt-1">
                                            Last updated: {formatDate(faq.lastUpdated)}
                                        </span>
                                    )}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-4 pb-2 space-y-4">
                                    <div className="prose dark:prose-invert max-w-none">
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            rehypePlugins={[rehypeRaw]}
                                            components={{
                                                // Custom styling for list items to ensure proper indentation
                                                ul: ({node, ...props}) => (
                                                    <ul className="list-disc pl-4 space-y-2" {...props} />
                                                ),
                                                li: ({node, ...props}) => (
                                                    <li className="ml-2" {...props} />
                                                )
                                            }}
                                        >
                                            {faq.answer}
                                        </ReactMarkdown>
                                    </div>

                                    <a
                                        href={faq.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-4 transition-colors"
                                    >
                                        View discussion on GitHub
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}