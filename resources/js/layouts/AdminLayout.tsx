import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <>
            <aside className='w-60 bg-red-300'>

            </aside>
            <div>
                <header className="py-3"></header>
                <main className="flex flex-col grow w-full p-4">
                    {children}
                </main>
            </div>
        </>
    );
}
