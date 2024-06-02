import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { PageProps } from '@/types';

export default function HomePage(props: React.PropsWithChildren<PageProps>) {
    return <PublicLayout auth={props.auth}></PublicLayout>;
}
