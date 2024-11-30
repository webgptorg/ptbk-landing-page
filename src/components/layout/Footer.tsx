export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="font-bold">
                            Prompt<b>book</b>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {`It's time for a paradigm shift!`}
                            <br />
                            {`The future of software is in plain English ✨`}
                        </p>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://github.com/webgptorg/book"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://promptbook.studio/miniapps/new"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Playground
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://promptbook.studio/miniapps/new"
                                    // <- TODO: Some specific URL for examples

                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Examples
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://or-justice-cz.translate.goog/ias/ui/rejstrik-firma.vysledky?subjektId=1223693&typ=UPLNY&_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
                                    //href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1223693&typ=UPLNY"

                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    AI Web, LLC
                                    {/* <- Note: It is "AI Web s.r.o." but for most visitors its usefull to have translation */}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#!!!"
                                    // <- TODO: Scroll to section about us
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#!!!"
                                    // <- TODO: Establish a engineering english bloc, maybe on top of Promptujeme.cz or blob.pavolhejny.com
                                    //          + add this blog to https://github.com/webgptorg/book/blob/main/SIGNPOST.md
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Connect</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://github.com/webgptorg/promptbook"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/company/promptbook"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/x3QWNaa89N"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Discord
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/webgptorg/book/blob/main/SIGNPOST.md"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    More
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} Promptbook
                        <br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
