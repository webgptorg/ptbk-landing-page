import { PartnerUrlForm } from '@/app/create-url/PartnerUrlForm/PartnerUrlForm';
import { Header } from '@/components/layout/Header';
import { Logo } from '@/components/ui/logo';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <Logo />
            <main className="container mx-auto px-6 py-8">
                <PartnerUrlForm />
            </main>
        </div>
    );
}
