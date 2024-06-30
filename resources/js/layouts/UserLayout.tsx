import { PropsWithChildren } from 'react';

export default function UserLayout({ children }: PropsWithChildren) {
    return (
        <>
            <header className="py-3"></header>
            <main className="min-h-screen flex flex-col w-full max-w-[85rem] mx-auto text-black p-4">
                {children}
            </main>
        </>
    );
}
