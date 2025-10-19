import AppLayout from '@/components/layout/AppLayout';
import './globals.css';

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return <AppLayout>{children}</AppLayout>;
}
