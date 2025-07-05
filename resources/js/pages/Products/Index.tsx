// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';

import { Head, Link } from '@inertiajs/react';

const breadcrumbs = [
    {
        title: 'Produits',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Produits" />
            <div className="m-4">
                <Link href={route('products.create')}>
                    <Button>Creer un produit</Button>
                </Link>
            </div>
        </AppLayout>
    );
}
