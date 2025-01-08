// src/app/api/faqs/route.ts
import { spaceTrim } from '@promptbook/utils';
import { NextResponse } from 'next/server';

interface GitHubDiscussion {
    id: string;
    title: string;
    body: string;
    answer?: {
        body: string;
    } | null;
    url: string;
    updatedAt: string;
}

async function fetchGitHubDiscussions(): Promise<GitHubDiscussion[]> {
    const query = `
        query {
            repository(owner: "webgptorg", name: "promptbook") {
                discussions(first: 100, categoryId: "DIC_kwDOKZDPiM4CiNAD") {
                    nodes {
                        id
                        title
                        body
                        answer {
                            body
                        }
                        url
                        updatedAt
                    }
                }
            }
        }
    `;

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (data.status !== '200') {
        throw new Error(
            spaceTrim(
                (block) => `
                    Failed to fetch GitHub Discussions

                    ${block(data.message || 'No message provided')}
                
            `,
            ),
        );
    }
    return data.data.repository.discussions.nodes;
}

export async function GET() {
    try {
        const discussions = await fetchGitHubDiscussions();

        // Transform the discussions into FAQs, properly handling the answer content
        const faqs = discussions
            .map((discussion) => {
                // Use the answer.body if it exists, otherwise check if the main body
                // contains more than just the question
                const answerContent =
                    discussion.answer?.body || (discussion.body !== discussion.title ? discussion.body : '');

                return {
                    id: discussion.id,
                    question: discussion.title,
                    answer: answerContent,
                    url: discussion.url,
                    lastUpdated: new Date(discussion.updatedAt).toISOString(),
                };
            })
            .filter(
                (faq) =>
                    // Filter out FAQs with empty answers or TODO markers
                    faq.answer && faq.answer.trim() !== '' && !faq.answer.includes('TODO'),
            );

        return NextResponse.json({ faqs });
    } catch (error) {
        console.error('Error fetching FAQs:', error);

        if (!(error instanceof Error)) {
            throw error;
        }

        return NextResponse.json(
            {
                error: spaceTrim(
                    (block) => `
            
                        Failed to fetch FAQs

                        ${block(error.message)}
                    
                    `,
                ),
            },
            { status: 500 },
        );
    }
}
