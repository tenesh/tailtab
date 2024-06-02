import React, {PropsWithChildren, useState} from 'react';
import NavigationBar from '@/components/public/NavigationBar';

interface PublicLayoutProps extends PropsWithChildren {
    auth: any;
}

export default function PublicLayout({auth, children}: PublicLayoutProps) {

    const appName = import.meta.env.VITE_APP_NAME;
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                <NavigationBar
                    auth={auth}
                    isOpen={open}
                    onClose={
                        () => {
                            setOpen(false)
                        }}
                />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
