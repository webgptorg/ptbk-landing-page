import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, Zap, Brain, Lock } from "lucide-react"

export function FeaturesSection() {
    const features = [
        {
            icon: <Code2 className="h-8 w-8" />,
            title: "Natural Language Programming",
            description: "Write specifications in plain English. Our AI understands your intent and generates the code."
        },
        {
            icon: <Brain className="h-8 w-8" />,
            title: "AI-Powered Generation",
            description: "Advanced language models ensure your specifications are translated accurately into working code."
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Rapid Development",
            description: "Build applications in minutes instead of weeks. Focus on what you want, not how to code it."
        },
        {
            icon: <Lock className="h-8 w-8" />,
            title: "Enterprise Ready",
            description: "Production-grade code with built-in security, testing, and scalability considerations."
        }
    ]

    return (
        <section className="py-24 relative">
            {/* Add subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container relative">
                <h2 className="text-3xl font-bold text-center mb-12">
                    The Future of Programming
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background to-primary/5"
                        >
                            <CardHeader>
                                <div className="mb-4 text-primary/80 group-hover:text-primary transition-colors duration-300 relative">
                                    {/* Add glow effect behind icon */}
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                    <div className="relative">{feature.icon}</div>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription>
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}