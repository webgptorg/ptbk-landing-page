"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export function PlaygroundSection() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    return (
        <section className="py-24">
            <div className="container max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Try It Yourself
                </h2>
                <div className="flex gap-8">
                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Natural Language Input</h3>
                        <Textarea
                            className="min-h-[400px] font-mono"
                            placeholder="Describe your application..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <Separator orientation="vertical" className="h-[400px]"/>
                    <div className="flex-1 space-y-2">
                        <h3 className="text-sm font-medium">Generated Code</h3>
                        <Textarea
                            className="min-h-[400px] font-mono bg-muted"
                            value={output}
                            readOnly
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <Button
                        size="lg"
                        onClick={() => setOutput("// Generated code will appear here")}
                    >
                        Generate Code
                    </Button>
                </div>
            </div>
        </section>
    )
}