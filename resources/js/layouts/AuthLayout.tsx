import React, { PropsWithChildren } from 'react';

interface AuthLayoutProps extends PropsWithChildren {
    auth: any;
}

export default function AuthLayout({ auth, children }: AuthLayoutProps) {
    return <main>{children}</main>;
}
