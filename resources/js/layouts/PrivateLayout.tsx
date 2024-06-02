import React, { PropsWithChildren } from 'react';

interface PrivateLayoutProps extends PropsWithChildren {
    auth: any;
}

export default function PrivateLayout({ auth, children }: PrivateLayoutProps) {
    return <main>{children}</main>;
}
