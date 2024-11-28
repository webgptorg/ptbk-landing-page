'use client';

import { useLightDarkTheme } from '@/hooks/useLightDarkTheme';
import { LOGO_DARK_SRC, LOGO_LIGHT_SRC } from '@promptbook/core';

export function Logo() {
    const theme = useLightDarkTheme();

    return (
        <div className="flex justify-center items-center h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={
                    {
                        LOGO_DARK_SRC,
                        LOGO_LIGHT_SRC,
                    }[`LOGO_${theme}_SRC`]
                }
                className="w-20 h-auto"
                alt="Logo"
            />
        </div>
    );
}
