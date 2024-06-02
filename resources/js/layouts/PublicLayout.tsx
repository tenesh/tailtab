import React, { PropsWithChildren } from 'react';
import NavigationBar from '@/components/public/NavigationBar';

interface PublicLayoutProps extends PropsWithChildren {
    auth: any;
}

export default function PublicLayout({ auth, children }: PublicLayoutProps) {
    return (
        <>
            <header>
                <NavigationBar />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
