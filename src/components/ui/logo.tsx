import { LOGO_DARK_SRC } from '@promptbook/core';

export function Logo() {
    return (
        <div className="flex justify-center items-center h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_DARK_SRC} className="w-20 h-auto" alt="Logo" />
        </div>
    );
}
