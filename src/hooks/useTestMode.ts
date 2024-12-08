'use client';

import { $isRunningInBrowser } from '@promptbook/utils';
import { useState, useEffect } from 'react';

export function useTestMode() {
    // Start with false as the initial state - this matches the server-side behavior
    const [isTestMode, setIsTestMode] = useState(false);

    useEffect(() => {
        // Only run this check once the component is mounted
        if ($isRunningInBrowser()) {
            const isTestingModeInUrl = window.location.search.includes('test');
            setIsTestMode(isTestingModeInUrl);
        }
    }, []); // Empty dependency array means this runs once after mount

    return isTestMode;
}