import { ThemeProvider } from '@/components/theme-provider';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import { CLAIM, NAME } from '@promptbook/core';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: NAME,
    description: CLAIM,
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <BackgroundPattern />
                    {children}
                </ThemeProvider>

                {/* ----------------- */}

                {/* Promptbook app 💬 Chatbot */}
                <Script id="d753da72-f056-4bc6-99cc-8a09db164931">
                    {`
                    // [🔌] Integration code of Promptbook app 💬 Chatbot into https://ptbk.io/ or https://github.com/webgptorg/promptbook/

                    const bookAppScript = document.createElement('script');
                    bookAppScript.async = true;
                    bookAppScript.src = "https://promptbook.studio/api/embed/miniapp.js?id=d753da72-f056-4bc6-99cc-8a09db164931";
                    document.head.appendChild(bookAppScript);

                    bookAppScript.addEventListener('load', () => {
                        activateEmbeddedChatbot(
                            {
                                "theme": "DARK",
                                "position": "BOTTOM_RIGHT",
                                "isTestingMode": false
                            }
                        );
                    });    
                `}
                </Script>

                {/* ----------------- */}

                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-2B6ZPV8L8W" />
                <Script id="G-2B6ZPV8L8W">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-2B6ZPV8L8W');
                    `}
                </Script>
            </body>
        </html>
    );
}
