import AppLayout from '@/components/layout/AppLayout';
import { getShortcodeLink } from './getShortcodeLink';

type ShortcodeLayoutProps = {
    children: React.ReactNode;
    params: { shortcode: string };
};

export default async function ShortcodeLayout({ children, params }: ShortcodeLayoutProps) {
    const shortcodeLink = await getShortcodeLink(params.shortcode);

    if (shortcodeLink?.landingPage) {
        const isRawHtml =
            shortcodeLink.landingPage.includes('<!--no-template-->') ||
            shortcodeLink.landingPage.includes('<!DOCTYPE html>');

        if (isRawHtml) {
            return <>{children}</>;
        }
    }

    return <AppLayout>{children}</AppLayout>;
}
