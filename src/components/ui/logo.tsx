import { LOGO_DARK_SRC } from '@promptbook/core';
import Image from 'next/image';

export function Logo() {
    return (
        <div className="flex justify-center items-center h-full">
            <Image src={LOGO_DARK_SRC} className="w-32 h-auto" alt="Logo" />
        </div>
    );
}
