"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

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

\`-> {greeting}\``

export function PlaygroundSection() {
    const [input, setInput] = useState(PLACEHOLDER_TEXT)
    const [output, setOutput] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = () => {
        setIsGenerating(true)
        setTimeout(() => {
            setOutput(`$ npx ptbk books/hello.book.md
            √ yourName ... The World
            
            --- Result: ---
            greeting: Hello World!`)
            setIsGenerating(false)
        }, 1000)
    }

    return (
        <section className="py-24 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container max-w-6xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Try It Yourself
                </h2>
                <div className="flex gap-8">
                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Natural Language Input</h3>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <Textarea
                                className="min-h-[400px] font-mono relative bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-colors duration-300"
                                placeholder="Describe your application..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                    </div>

                    <Separator orientation="vertical" className="h-[400px] bg-primary/20" />

                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Generated Code</h3>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <Textarea
                                className="min-h-[400px] font-mono relative bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-colors duration-300"
                                value={output}
                                readOnly
                            />
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
                        {/* Button glow effect */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
                        <span className="relative">
             {isGenerating ? "Generating..." : "Generate Code"}
           </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}