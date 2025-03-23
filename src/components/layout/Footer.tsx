import Image from 'next/image';
import Link from 'next/link';
import TechnologyIncubation from '../../../public/sponsors/CI-Technology-Incubation.png';

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="font-bold">
                            Prompt<b>Book</b>
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
                                <Link href="/get-started" className="text-muted-foreground hover:text-foreground">
                                    Get started
                                </Link>
                            </li>
                            <li>
                                <Link href="/manifest" className="text-muted-foreground hover:text-foreground">
                                    Manifest
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/webgptorg/promptbook"
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
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-bold">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://or-justice-cz.translate.goog/ias/ui/rejstrik-firma.vysledky?subjektId=1223693&typ=UPLNY&_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    AI Web, LLC
                                </a>
                            </li>
                            <li>
                                <a href="#about-us" className="text-muted-foreground hover:text-foreground">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#!!!" className="text-muted-foreground hover:text-foreground">
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
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                    More
                                </Link>
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
                <div className="flex flex-col items-center mt-8">
                    <Image src={TechnologyIncubation} alt="Our Sponsor" className="h-32 w-auto" />
                    <p className="text-center text-sm text-muted-foreground mt-4 max-w-lg">
                        This project was implemented with funding from the national budget
                        <br />
                        via the Ministry of Industry and Trade of the Czech Republic within the CzechInvest Technology
                        Incubation programme.
                    </p>
                </div>
            </div>
        </footer>
    );
}
