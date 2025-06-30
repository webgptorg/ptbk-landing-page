import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import Image from 'next/image';
import logoBlueTransparent1024 from '../../../public/logo/logo-blue-transparent-1024.png';
import logoBlueTransparent128 from '../../../public/logo/logo-blue-transparent-128.png';
import logoBlueTransparent256 from '../../../public/logo/logo-blue-transparent-256.png';
import logoBlueWhite1024 from '../../../public/logo/logo-blue-white-1024.png';
import logoBlueWhite128 from '../../../public/logo/logo-blue-white-128.png';
import logoBlueWhite256 from '../../../public/logo/logo-blue-white-256.png';
import logoWhiteTransparent1024 from '../../../public/logo/logo-white-transparent-1024.png';

export default function Design() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🎨 Design System
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Welcome to the Promptbook design system. Here you&apos;ll find our logos, brand guidelines,
                        colors, typography, and all the visual elements that make up our brand identity.
                    </p>
                </div>

                {/* Logo Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Logo Variations</h2>

                    {/* Blue Transparent Logos */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">Blue Transparent Logos</h3>

                        {/* 1024px */}
                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">1024x1024px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-gray-900">
                                        White Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoBlueTransparent1024}
                                            alt="Blue Logo on White"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoBlueTransparent1024}
                                            alt="Blue Logo on Black"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 256px */}
                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">256x256px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-gray-900">
                                        White Background
                                    </div>
                                    <div className="flex justify-center items-center h-20">
                                        <Image
                                            src={logoBlueTransparent256}
                                            alt="Blue Logo 256 on White"
                                            height={60}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-20">
                                        <Image
                                            src={logoBlueTransparent256}
                                            alt="Blue Logo 256 on Black"
                                            height={60}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 128px */}
                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">128x128px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-gray-900">
                                        White Background
                                    </div>
                                    <div className="flex justify-center items-center h-16">
                                        <Image
                                            src={logoBlueTransparent128}
                                            alt="Blue Logo 128 on White"
                                            height={40}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-16">
                                        <Image
                                            src={logoBlueTransparent128}
                                            alt="Blue Logo 128 on Black"
                                            height={40}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blue White Logos */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">Blue White Logos</h3>

                        {/* 1024px */}
                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">1024x1024px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-gray-900">
                                        White Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoBlueWhite1024}
                                            alt="Blue White Logo on White"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-lg p-6 border shadow-sm" style={{ backgroundColor: '#00007F' }}>
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Dark Blue Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoBlueWhite1024}
                                            alt="Blue White Logo on Dark Blue"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoBlueWhite1024}
                                            alt="Blue White Logo on Black"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 256px */}
                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">256x256px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-gray-900">
                                        White Background
                                    </div>
                                    <div className="flex justify-center items-center h-20">
                                        <Image
                                            src={logoBlueWhite256}
                                            alt="Blue White Logo 256 on White"
                                            height={60}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-lg p-6 border shadow-sm" style={{ backgroundColor: '#00007F' }}>
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Dark Blue Background
                                    </div>
                                    <div className="flex justify-center items-center h-20">
                                        <Image
                                            src={logoBlueWhite256}
                                            alt="Blue White Logo 256 on Dark Blue"
                                            height={60}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-20">
                                        <Image
                                            src={logoBlueWhite256}
                                            alt="Blue White Logo 256 on Black"
                                            height={60}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 128px */}
                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">128x128px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-gray-900">
                                        White Background
                                    </div>
                                    <div className="flex justify-center items-center h-16">
                                        <Image
                                            src={logoBlueWhite128}
                                            alt="Blue White Logo 128 on White"
                                            height={40}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-lg p-6 border shadow-sm" style={{ backgroundColor: '#00007F' }}>
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Dark Blue Background
                                    </div>
                                    <div className="flex justify-center items-center h-16">
                                        <Image
                                            src={logoBlueWhite128}
                                            alt="Blue White Logo 128 on Dark Blue"
                                            height={40}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-16">
                                        <Image
                                            src={logoBlueWhite128}
                                            alt="Blue White Logo 128 on Black"
                                            height={40}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* White Transparent Logo */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">White Transparent Logo</h3>

                        <div className="mb-8">
                            <h4 className="text-lg font-medium mb-4">1024x1024px</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-lg p-6 border shadow-sm" style={{ backgroundColor: '#00007F' }}>
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Dark Blue Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoWhiteTransparent1024}
                                            alt="White Logo on Dark Blue"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                                <div className="bg-black rounded-lg p-6 border shadow-sm">
                                    <div className="text-center mb-2 text-sm font-medium text-white">
                                        Black Background
                                    </div>
                                    <div className="flex justify-center items-center h-24">
                                        <Image
                                            src={logoWhiteTransparent1024}
                                            alt="White Logo on Black"
                                            height={80}
                                            className="max-h-full w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo Usage Guidelines */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold mb-4">Logo Usage Guidelines</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Do</h4>
                                <ul className="text-sm space-y-1 text-muted-foreground">
                                    <li>• Use the appropriate logo for the background</li>
                                    <li>• Maintain clear space around the logo</li>
                                    <li>• Keep the logo proportional when scaling</li>
                                    <li>• Use high-resolution versions for print</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Don&apos;t</h4>
                                <ul className="text-sm space-y-1 text-muted-foreground">
                                    <li>• Stretch or distort the logo</li>
                                    <li>• Change the logo colors</li>
                                    <li>• Add effects or shadows</li>
                                    <li>• Use low-resolution versions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Color Palette */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Color Palette</h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Primary Colors */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Primary Colors</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div
                                        className="w-12 h-12 rounded-lg border"
                                        style={{ backgroundColor: '#00007F' }}
                                    ></div>
                                    <div>
                                        <div className="font-medium">Blue</div>
                                        <div className="text-sm text-muted-foreground">#00007F</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Neutral Colors */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Neutral Colors</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gray-900 rounded-lg border"></div>
                                    <div>
                                        <div className="font-medium">Dark Gray</div>
                                        <div className="text-sm text-muted-foreground">#111827</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg border"></div>
                                    <div>
                                        <div className="font-medium">Light Gray</div>
                                        <div className="text-sm text-muted-foreground">#f3f4f6</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accent Colors */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Accent Colors</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg border"></div>
                                    <div>
                                        <div className="font-medium">Success</div>
                                        <div className="text-sm text-muted-foreground">#10b981</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-red-500 rounded-lg border"></div>
                                    <div>
                                        <div className="font-medium">Error</div>
                                        <div className="text-sm text-muted-foreground">#ef4444</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Typography</h2>

                    <div className="space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h3 className="text-xl font-semibold mb-4">Headings</h3>
                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
                                    <code className="text-sm text-muted-foreground">text-4xl font-bold</code>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">Heading 2 - 3xl Bold</h2>
                                    <code className="text-sm text-muted-foreground">text-3xl font-bold</code>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold">Heading 3 - 2xl Semibold</h3>
                                    <code className="text-sm text-muted-foreground">text-2xl font-semibold</code>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Heading 4 - xl Semibold</h4>
                                    <code className="text-sm text-muted-foreground">text-xl font-semibold</code>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h3 className="text-xl font-semibold mb-4">Body Text</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-lg">
                                        Large body text - Perfect for introductions and important content.
                                    </p>
                                    <code className="text-sm text-muted-foreground">text-lg</code>
                                </div>
                                <div>
                                    <p className="text-base">
                                        Regular body text - The standard text size for most content.
                                    </p>
                                    <code className="text-sm text-muted-foreground">text-base</code>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Small text - Used for captions, metadata, and secondary information.
                                    </p>
                                    <code className="text-sm text-muted-foreground">text-sm text-muted-foreground</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spacing & Layout */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Spacing & Layout</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h3 className="text-xl font-semibold mb-4">Spacing Scale</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-blue-500"></div>
                                    <span className="text-sm">2px - 0.5</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-4 h-4 bg-blue-500"></div>
                                    <span className="text-sm">4px - 1</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-6 h-6 bg-blue-500"></div>
                                    <span className="text-sm">6px - 1.5</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 bg-blue-500"></div>
                                    <span className="text-sm">8px - 2</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500"></div>
                                    <span className="text-sm">12px - 3</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-blue-500"></div>
                                    <span className="text-sm">16px - 4</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h3 className="text-xl font-semibold mb-4">Border Radius</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-none"></div>
                                    <span className="text-sm">None - rounded-none</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-sm"></div>
                                    <span className="text-sm">Small - rounded-sm</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded"></div>
                                    <span className="text-sm">Default - rounded</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                                    <span className="text-sm">Large - rounded-lg</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm">Full - rounded-full</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Assets */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Download Assets</h2>

                    <div className="bg-card rounded-lg p-6 border">
                        <h3 className="text-xl font-semibold mb-6">Logo Files</h3>

                        {/* Blue Transparent Logos */}
                        <div className="mb-6">
                            <h4 className="text-lg font-medium mb-3">Blue Transparent Logos</h4>
                            <div className="grid md:grid-cols-3 gap-3">
                                <a
                                    href="/logo/logo-blue-transparent-1024.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">Blue Logo 1024px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 1024x1024</div>
                                    </div>
                                    <div className="text-blue-600">↓</div>
                                </a>
                                <a
                                    href="/logo/logo-blue-transparent-256.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">Blue Logo 256px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 256x256</div>
                                    </div>
                                    <div className="text-blue-600">↓</div>
                                </a>
                                <a
                                    href="/logo/logo-blue-transparent-128.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">Blue Logo 128px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 128x128</div>
                                    </div>
                                    <div className="text-blue-600">↓</div>
                                </a>
                            </div>
                        </div>

                        {/* Blue White Logos */}
                        <div className="mb-6">
                            <h4 className="text-lg font-medium mb-3">Blue White Logos</h4>
                            <div className="grid md:grid-cols-3 gap-3">
                                <a
                                    href="/logo/logo-blue-white-1024.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">Blue White Logo 1024px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 1024x1024</div>
                                    </div>
                                    <div className="text-blue-600">↓</div>
                                </a>
                                <a
                                    href="/logo/logo-blue-white-256.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">Blue White Logo 256px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 256x256</div>
                                    </div>
                                    <div className="text-blue-600">↓</div>
                                </a>
                                <a
                                    href="/logo/logo-blue-white-128.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">Blue White Logo 128px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 128x128</div>
                                    </div>
                                    <div className="text-blue-600">↓</div>
                                </a>
                            </div>
                        </div>

                        {/* White Transparent Logo */}
                        <div>
                            <h4 className="text-lg font-medium mb-3">White Transparent Logo</h4>
                            <div className="grid md:grid-cols-3 gap-3">
                                <a
                                    href="/logo/logo-white-transparent-1024.png"
                                    download
                                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">White Logo 1024px</div>
                                        <div className="text-xs text-muted-foreground">PNG, 1024x1024</div>
                                    </div>
                                    <div className="text-gray-600">↓</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Principles */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Design Principles</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-card rounded-lg p-6 border text-center">
                            <div className="text-3xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold mb-2">Clarity</h3>
                            <p className="text-muted-foreground">
                                Every element should have a clear purpose and be easily understood by users.
                            </p>
                        </div>

                        <div className="bg-card rounded-lg p-6 border text-center">
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                            <p className="text-muted-foreground">
                                Design should enable users to accomplish their goals quickly and effortlessly.
                            </p>
                        </div>

                        <div className="bg-card rounded-lg p-6 border text-center">
                            <div className="text-3xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold mb-2">Consistency</h3>
                            <p className="text-muted-foreground">
                                Maintain visual and functional consistency across all touchpoints.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
