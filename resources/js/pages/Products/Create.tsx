// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';

import { Head } from '@inertiajs/react';


const breadcrumbs = [
    {
        title: 'Creer un nouveau produit',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Creer un nouveau produit" />
            <form action="">
                <div className="gap-1.5 w-1/2 p-4">
                    <Label >Nom du produit</Label>
                    <Input placeholder='Entrer le nom du produit'/>
                </div>
                <div className="gap-1.5 w-1/2 p-4">
                    <Label>Prix</Label>
                    <Input placeholder='Entrer le prix du produit'/>
                </div>

            </form>
        </AppLayout>
    );
}
