import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Footer() {
    const { appName } = usePage<PageProps>().props;

    return (
        <footer className="w-full max-w-[85rem] mx-auto text-black p-4">
            <div className="flex flex-col gap-8 lg:flex-row py-6">
                <div className="flex flex-col gap-2">
                    <p className="text-secondary-900 text-3xl">{appName}</p>
                    <p className="max-w-xl">
                        Leading the way in efficient time management to help you
                        make the most of every moment.
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Solutions</p>
                        <Link href="">Marketing</Link>
                        <Link href="">Analytics</Link>
                        <Link href="">Commerce</Link>
                        <Link href="">Insights</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Support</p>
                        <Link href="">Pricing</Link>
                        <Link href="">Documentation</Link>
                        <Link href="">Guides</Link>
                        <Link href="">API Status</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Company</p>
                        <Link href="">About</Link>
                        <Link href="">Blog</Link>
                        <Link href="">Jobs</Link>
                        <Link href="">Partners</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Legal</p>
                        <Link href="">Claim</Link>
                        <Link href="">Privacy</Link>
                        <Link href="">Terms</Link>
                        <Link href="">Cookies</Link>
                    </div>
                </div>
            </div>
            <p className="text-sm w-full text-start border-t-2 pt-6 pb-4">
                © 2024 {appName}. All rights reserved.
            </p>
        </footer>
    );
}
