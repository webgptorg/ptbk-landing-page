'use client';

import { TODO_any } from '@/organization/TODO_any';
import { $isRunningInBrowser, normalizeTo_camelCase } from '@promptbook/utils';
import { useEffect, useState } from 'react';

type TestVariabiles = Record<string, string> & Record<`is${string}`, boolean>;

export function useTestVariabiles() {
    // Start with false as the initial state - this matches the server-side behavior
    const [testVariabiles, setTestVariabiles] = useState<TestVariabiles>({});

    useEffect(() => {
        // Only run this check once the component is mounted
        if ($isRunningInBrowser()) {
            const testVariabiles: TestVariabiles = {};

            const urlParams = new URLSearchParams(window.location.search);

            for (let [key, value] of urlParams.entries()) {
                if (!key.startsWith('test_')) {
                    continue;
                }

                key = key.replace(/^test_/, '');
                key = normalizeTo_camelCase(key);

                if (key.startsWith('is') && value === '1') {
                    value = true as TODO_any;
                }

                testVariabiles[key] = value;
            }

            console.log('!!! testVariabiles', testVariabiles);

            setTestVariabiles(testVariabiles);
        }
    }, []); // Empty dependency array means this runs once after mount

    return testVariabiles;
}
