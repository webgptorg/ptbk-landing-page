'use client';

import { useLightDarkTheme } from '@/hooks/useLightDarkTheme';
// import { LOGO_DARK_SRC, LOGO_LIGHT_SRC } from '@promptbook/core';
import Image, { StaticImageData } from 'next/image';
import logoBlue from '../../../public/logo/logo-blue-transparent-1024.png';
import logoWhite from '../../../public/logo/logo-white-transparent-1024.png';

export function Logo() {
    const theme = useLightDarkTheme();

    let logo: StaticImageData;

    if (theme === 'DARK') {
        logo = logoWhite;
    } else {
        logo = logoBlue;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <Image src={logo} height={111} alt="Logo" />
        </div>
    );
}
