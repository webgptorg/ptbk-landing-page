'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Types for our data
interface NpmDownloads {
    date: string;
    downloads: number;
}

interface GithubStarsHistory {
    date: string;
    stars: number;
}

interface GithubApiResponse {
    stargazers_count: number;
}

export function NumbersSection() {
    const [npmData, setNpmData] = useState<NpmDownloads[]>([]);
    const [githubData, setGithubData] = useState<GithubStarsHistory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch NPM download data
                const npmResponse = await fetch('https://api.npmjs.org/downloads/range/last-year/@promptbook/utils');
                const npmJson = await npmResponse.json();

                if (npmJson.error) {
                    throw new Error(`NPM API error: ${npmJson.error}`);
                }

                const formattedNpmData = npmJson.downloads.map((item: any) => ({
                    date: item.day,
                    downloads: item.downloads,
                }));

                setNpmData(formattedNpmData);

                // Fetch current GitHub stars
                const githubResponse = await fetch('https://api.github.com/repos/webgptorg/promptbook', {
                    headers: {
                        Accept: 'application/vnd.github.v3+json',
                    },
                });

                if (!githubResponse.ok) {
                    throw new Error(`GitHub API error: ${githubResponse.status}`);
                }

                const githubJson: GithubApiResponse = await githubResponse.json();
                const currentStars = githubJson.stargazers_count;

                // Since GitHub API doesn't provide historical star data in a simple API call,
                // we'll create a simulated history based on the current star count
                const starHistory = generateEstimatedStarHistory(currentStars);
                setGithubData(starHistory);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
                setError(errorMessage);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper function to generate estimated star history based on current count
    // Since we can't easily get historical star data without multiple API calls or a specialized service
    const generateEstimatedStarHistory = (currentStars: number): GithubStarsHistory[] => {
        const data = [];
        const now = new Date();
        // Assume the project has been gaining stars at a steady rate
        // This is just an estimation for visualization purposes
        const startingStars = Math.max(1, Math.floor(currentStars * 0.3));
        const daysInYear = 365;
        const starsPerDay = (currentStars - startingStars) / daysInYear;

        for (let i = daysInYear; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const dailyStars = Math.floor(startingStars + (daysInYear - i) * starsPerDay);

            data.push({
                date: date.toISOString().split('T')[0],
                stars: dailyStars,
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
                                            <Tooltip formatter={(value) => [`${value} downloads`, 'Downloads']} />
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
                                            <Tooltip formatter={(value) => [`${value} stars`, 'Stars']} />
                                            <Line
                                                type="monotone"
                                                dataKey="stars"
                                                stroke="#82ca9d"
                                                activeDot={{ r: 8 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="text-xs text-gray-500 mt-2 text-center">
                                    *Star history is an estimation based on current count
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}
