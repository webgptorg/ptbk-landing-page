'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Vector } from 'xyzt';

interface FrozenFrameProps {
    title: string;
    url: string;
    className: string;
    isActivated: boolean;
    setActivated(isActivated: boolean): void;
}

const GRID_SIZE = 15;

export function FrozenFrame(props: FrozenFrameProps) {
    const { title, url, className, isActivated, setActivated } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<Vector>(Vector.square(512));
    const { theme: landingPageTheme } = useTheme();

    useEffect(() => {
        if (!containerRef.current) return;

        // Store the current ref value to use in cleanup
        const currentRef = containerRef.current;

        // Initial measurement
        const updateDimensions = () => {
            const { clientWidth, clientHeight } = currentRef;
            setDimensions(new Vector(clientWidth, clientHeight));
        };

        updateDimensions();

        // Set up resize observer to update dimensions when container size changes
        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(currentRef);

        return () => {
            // Use the captured ref value in cleanup
            resizeObserver.disconnect();
        };
    }, []);

    const promptbookStudioTheme = landingPageTheme === 'light' ? 'LIGHT' : 'DARK';
    // <- TODO: Some way how to handle `landingPageTheme === 'system'`

    const websiteUrl = new URL(url);
    websiteUrl.searchParams.set('editor', 'MONACO');
    websiteUrl.searchParams.set('theme', promptbookStudioTheme);
    websiteUrl.searchParams.set('nonce', '✨');
    // <- TODO: !!! Also pass mode here and disable advanced and develope mode

    if (isActivated) {
        return (
            <iframe
                src={websiteUrl.href}
                allow="cross-origin-isolated"
                cross-origin="anonymous"
                loading="eager" // <- Note: Now the miniapp is activated so show it immediately
                {...{ className, title }}
            />
        );
    } else {
        const screenshotUrl = new URL('https://browser.s5.ptbk.io/screenshot'); // <- TODO: Unhardcode https://browser.s5.ptbk.io/, add to config
        const dimensionsRounded = dimensions.map((value) => Math.ceil(value / GRID_SIZE) * GRID_SIZE);
        screenshotUrl.searchParams.set('url', websiteUrl.href);
        screenshotUrl.searchParams.set('theme', promptbookStudioTheme);
        screenshotUrl.searchParams.set('width', dimensionsRounded.x.toString());
        screenshotUrl.searchParams.set('height', dimensionsRounded.y.toString());

        // console.log(websiteUrl.href);

        return (
            <div ref={containerRef} className={className}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={screenshotUrl.href}
                    style={{
                        objectFit: 'contain',
                        objectPosition: '0% 0%',
                    }}
                    loading="lazy"
                    alt={title}
                    onClick={() => void setActivated(true)}
                    title={title}
                    className="w-full h-full"
                />
            </div>
        );
    }
}
