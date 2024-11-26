'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { CodeEditor } from '../CodeEditor/CodeEditor';

const PLACEHOLDER_TEXT = `#!/usr/bin/env ptbk

# ✨ Example: Write Hello for a user

-   URL \`https://promptbook.studio/examples/hello.book\`
-   INPUT PARAMETER \`{yourName}\` Name of the user
-   OUTPUT PARAMETER \`{greeting}\` Greeting for the user

## Sample of the name

- SAMPLE

> Paul

\`-> {yourName}\`

## Sample of the name

- SAMPLE

> George

\`-> {yourName}\`

## Writing Greeting

-   PERSONA Jane, HR professional with prior experience in writing emails
-   EXPECT MIN 1 Word
-   EXPECT MAX 1 Line

\`\`\`markdown
You are writing a greeting for {yourName}.

## Rules

-   Write just the greeting, nothing else
\`\`\`

\`-> {greeting}\``;

const TERMINAL_OUTPUT = `$ npx ptbk books/hello.book.md
√ yourName ... The World

--- Result: ---
greeting: Hello World!`;

export function PlaygroundSection() {
    const [input, setInput] = useState(PLACEHOLDER_TEXT);
    const [output, setOutput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [currentChar, setCurrentChar] = useState(0);

    // Typing animation effect
    useEffect(() => {
        if (isGenerating && currentChar < TERMINAL_OUTPUT.length) {
            const timer = setTimeout(() => {
                setOutput(TERMINAL_OUTPUT.slice(0, currentChar + 1));
                setCurrentChar(currentChar + 1);
            }, 25); // Adjust speed here
            return () => clearTimeout(timer);
        } else if (currentChar >= TERMINAL_OUTPUT.length) {
            setIsGenerating(false);
        }
    }, [currentChar, isGenerating]);

    const handleGenerate = () => {
        setIsGenerating(true);
        setCurrentChar(0);
        setOutput('');
    };

    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container max-w-6xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">Try It Yourself</h2>
                <div className="flex gap-8">
                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Natural Language Input</h3>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div
                                style={{ height: 400 }}
                                className="min-h-[400px] font-mono relative bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-colors duration-300"
                            >
                                <CodeEditor defaultValue={input} onChange={(newValue) => void setInput(newValue)} />
                            </div>
                        </div>
                    </div>

                    <Separator orientation="vertical" className="h-[400px] bg-primary/20" />

                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Generated Code</h3>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div
                                className={`
                 min-h-[400px] font-mono relative bg-black/90 backdrop-blur-sm 
                 border border-primary/20 rounded-lg p-4 overflow-auto
                 ${isGenerating ? 'after:content-["▊"] after:ml-1 after:animate-pulse after:text-primary' : ''}
               `}
                            >
                                <pre className="text-primary/90">
                                    <span className="text-green-400">{output.split('\n')[0]}</span>
                                    {output
                                        .split('\n')
                                        .slice(1)
                                        .map((line, i) => (
                                            <span key={i}>
                                                {'\n'}
                                                {line.startsWith('√') ? (
                                                    <span className="text-green-400">{line}</span>
                                                ) : line.includes('Result:') ? (
                                                    <span className="text-blue-400">{line}</span>
                                                ) : (
                                                    <span className="text-gray-300">{line}</span>
                                                )}
                                            </span>
                                        ))}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button
                        size="lg"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`
             relative overflow-hidden
             ${isGenerating ? 'animate-pulse' : 'hover:animate-pulse'}
             bg-gradient-to-r from-primary to-primary/80
             hover:from-primary/90 hover:to-primary/70
             transition-all duration-300
           `}
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
                        <span className="relative">{isGenerating ? 'Generating...' : 'Generate Code'}</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
