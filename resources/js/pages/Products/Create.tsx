// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Textarea } from '@/components/ui/textarea';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs = [
    {
        title: 'Creer un nouveau produit',
        href: '/products/create',
    },
];

export default function Index() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('products.store'));
        console.log(data);
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Creer un nouveau produit" />
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(errors).length > 0 && (
                    <ul className="mx-30 mt-2 w-1/4 rounded-lg bg-red-400 p-4">
                        <h4 className="text-red-600">Erreur</h4>
                        {Object.entries(errors).map(([key, message]) => (
                            <li key={key}>{message}</li>
                        ))}
                    </ul>
                )}
                <div className="w-1/2 gap-1.5 p-4">
                    <Label>Nom du produit</Label>
                    <Input placeholder="Entrer le nom du produit" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                </div>
                <div className="w-1/2 gap-1.5 p-4">
                    <Label>Prix</Label>
                    <Input placeholder="Entrer le prix du produit" value={data.price} onChange={(e) => setData('price', e.target.value)} />
                </div>
                <div className="w-1/2 p-4">
                    <Label htmlFor="description">Description</Label>
                    <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} />
                </div>
                <Button className="m-4" type="submit">
                    Creer
                </Button>
            </form>
        </AppLayout>
    );
}
