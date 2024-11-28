'use client';

import { useTheme } from 'next-themes';

/**
 * Returns the current theme as 'DARK' or 'LIGHT'
 *
 * Note: This is helper around annoying `useTheme() -> 'system'` behavior
 */
export function useLightDarkTheme(): 'DARK' | 'LIGHT' {
    const { theme } = useTheme();

    if (theme === 'dark') {
        return 'DARK';
    }

    if (theme === 'light') {
        return 'LIGHT';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK' : 'LIGHT';
}
