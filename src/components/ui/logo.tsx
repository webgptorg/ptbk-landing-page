import { LOGO_DARK_SRC } from '@promptbook/core';

export function Logo() {
    return (
        <div className="flex justify-center items-center h-full">
            <img src={LOGO_DARK_SRC} className="w-32 h-auto" alt="Logo" />
        </div>
    );
}
