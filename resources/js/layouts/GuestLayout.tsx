import { PropsWithChildren } from 'react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function GuestLayout({ children }: PropsWithChildren) {
    const { appName } = usePage<PageProps>().props;

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
        </>
    );
}
