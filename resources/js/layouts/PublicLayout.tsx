import { PropsWithChildren, useState } from 'react';
import NavigationBar from '@/components/public/NavigationBar';
import Footer from '@/components/public/Footer';

export default function PublicLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="py-3">
                <NavigationBar
                    isOpen={open}
                    onClose={() => {
                        setOpen(!open);
                    }}
                />
            </header>
            <main className="flex-grow w-full max-w-[85rem] mx-auto text-black p-4">
                {children}
            </main>
            <Footer />
        </>
    );
}
