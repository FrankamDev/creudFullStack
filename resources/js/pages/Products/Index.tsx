// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Megaphone } from 'lucide-react';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs = [
    {
        title: 'Produits',
        href: '/products',
    },
];
interface PageProps {
    flash: {
        message?: string;
    };
}
export default function Index() {
    const { flash } = usePage().props as pageProps;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Produits" />
            <div className="m-4">
                <Link href={route('products.create')}>
                    <Button>Creer un produit</Button>
                </Link>
            </div>
            <div className="m-4">
                {flash.message && (
                    <Alert>
                        <Megaphone className="h-4 w-4" />
                        <AlertTitle>Notification!</AlertTitle>
                        <AlertDescription>{flash.message}</AlertDescription>
                    </Alert>
                )}
            </div>
        </AppLayout>
    );
}
