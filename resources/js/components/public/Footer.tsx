import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Footer() {
    const { appName } = usePage<PageProps>().props;

    return (
        <footer className="w-full max-w-[85rem] mx-auto text-black p-4">
            <div className="text-center">
                <p>© 2024 {appName}. All rights reserved.</p>
            </div>
        </footer>
    );
}
