export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="font-bold">PTBK</h3>
                        <p className="text-sm text-muted-foreground">
                            Building the future of programming through natural language.
                        </p>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Playground</a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Examples</a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Careers</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Connect</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://github.com/webgptorg" className="text-muted-foreground hover:text-foreground">GitHub</a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-foreground">Discord</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>© 2024 PTBK. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}