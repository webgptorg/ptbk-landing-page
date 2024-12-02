'use client';

import { $isRunningInBrowser } from '@promptbook/utils';

export function useTestMode() {
    if (!$isRunningInBrowser()) {
        return false;
    }

    const isTestingModeInUrl = window.location.search.includes('test');
    return isTestingModeInUrl;
}
