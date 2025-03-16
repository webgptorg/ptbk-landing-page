'use client';
import { useEffect, useState } from 'react';

export function useRandomSeed(prefix?: string): string {

    const hash = process.env.GIT_HASH || 'null';
    const [seed, setSeed] = useState<string>(process.env.GIT_HASH || 'null');

    useEffect(() => {
        const seed = Math.random().toString(36).substring(2, 15);
        setSeed(seed);
    }, []);


    const pieces = [];

    if (prefix) {
        pieces.push(prefix);
    }

    pieces.push(hash);
    pieces.push(seed);
    

    return pieces.join('-');
}
