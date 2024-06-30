import { PropsWithChildren, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Toaster, toast } from 'sonner';

export default function GuestLayout({ children }: PropsWithChildren) {
    const { appName, flash } = usePage<PageProps>().props;

    useEffect(() => {
        if (flash.error && flash.error !== '') {
            toast.error(flash.error);
        }

        if (flash.success && flash.success !== '') {
            toast.success(flash.success);
        }

        if (flash.info && flash.info !== '') {
            toast.info(flash.info);
        }
    }, [flash]);

    return (
        <>
            <header className="p-4">
                <p className="text-secondary-900 text-xl">{appName}</p>
            </header>
            <main className="flex flex-col grow w-full p-4">{children}</main>
            <footer className="p-4">
                <p className="text-sm text-center">
                    © 2024 {appName}. All rights reserved.
                </p>
            </footer>
            <Toaster richColors={true} expand={true} />
        </>
    );
}
