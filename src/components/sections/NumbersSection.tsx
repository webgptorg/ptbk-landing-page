'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Types for our data
interface NpmDownloads {
    date: string;
    downloads: number;
}

interface GithubStars {
    date: string;
    stars: number;
}

export function NumbersSection() {
    const [npmData, setNpmData] = useState<NpmDownloads[]>([]);
    const [githubData, setGithubData] = useState<GithubStars[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch npm download data and GitHub stars data
        const fetchData = async () => {
            try {
                // Fetch NPM download data (this would need to be replaced with actual API calls)
                // For example: const npmResponse = await fetch('https://api.npmjs.org/downloads/range/last-month/@promptbook/utils');
                // For now using mock data
                const mockNpmData = generateMockNpmData(30);

                // Fetch GitHub stars data (this would need to be replaced with actual API calls)
                // For example: const githubResponse = await fetch('https://api.github.com/repos/webgptorg/promptbook/stargazers');
                // For now using mock data
                const mockGithubData = generateMockGithubStars(30);

                setNpmData(mockNpmData);
                setGithubData(mockGithubData);
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper function to generate mock NPM download data
    const generateMockNpmData = (days: number): NpmDownloads[] => {
        const data = [];
        const now = new Date();

        for (let i = days; i > 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            data.push({
                date: date.toISOString().split('T')[0],
                downloads: 500 + Math.floor(Math.random() * 300) + i * 5,
            });
        }

        return data;
    };

    // Helper function to generate mock GitHub stars data
    const generateMockGithubStars = (days: number): GithubStars[] => {
        const data = [];
        const now = new Date();
        let stars = 250;

        for (let i = days; i > 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);

            // Occasionally add some stars
            if (i % 3 === 0) {
                stars += Math.floor(Math.random() * 5) + 1;
            }

            data.push({
                date: date.toISOString().split('T')[0],
                stars,
            });
        }

        return data;
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container relative">
                <h2 className="text-3xl font-bold text-center mb-12">Project Growth</h2>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <p>Loading metrics...</p>
                    </div>
                ) : error ? (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">NPM Downloads: @promptbook/utils</h3>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            data={npmData}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                                            <YAxis tick={{ fontSize: 12 }} />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="downloads"
                                                stroke="#8884d8"
                                                activeDot={{ r: 8 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">GitHub Stars: webgptorg/promptbook</h3>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            data={githubData}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                                            <YAxis tick={{ fontSize: 12 }} />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="stars"
                                                stroke="#82ca9d"
                                                activeDot={{ r: 8 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}
