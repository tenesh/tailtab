import { PropsWithChildren, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';

export default function PublicLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    const { appName, auth } = usePage<PageProps>().props;

    return (
        <>
            <header className="py-3">
                <div className="flex items-center justify-between w-full max-w-[85rem] mx-auto text-secondary-900 p-4">
                    <p className="text-secondary-900 text-3xl">{appName}</p>
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/features"
                            className="hover:text-primary-600"
                        >
                            Features
                        </Link>
                        <Link
                            href="/pricing"
                            className="hover:text-primary-600"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/resources"
                            className="hover:text-primary-600"
                        >
                            Resources
                        </Link>
                        {!auth.user && (
                            <Link
                                href="/register"
                                className="bg-primary-500 rounded-md text-white px-4 py-2 hover:bg-primary-600"
                            >
                                Register
                            </Link>
                        )}
                        {auth.user && (
                            <Link
                                href="/dashboard"
                                className="bg-primary-500 rounded-md text-white px-4 py-2 hover:bg-primary-600"
                            >
                                Dashboard
                            </Link>
                        )}
                    </nav>
                    <div className="lg:hidden">
                        <Button
                            isIconOnly
                            variant="light"
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <Bars3Icon className="w-8 text-secondary-900" />
                        </Button>
                        <motion.div
                            initial="closed"
                            animate={open ? 'open' : 'closed'}
                            variants={{
                                open: { opacity: 1, width: '100%' },
                                closed: { opacity: 0, width: 0 },
                            }}
                            className="fixed top-0 left-0 w-full h-full py-3 bg-secondary-50 lg:hidden"
                        >
                            <div className="flex justify-between w-full text-secondary-900 p-4">
                                <p className="text-secondary-900 text-3xl">
                                    {appName}
                                </p>
                                <Button
                                    isIconOnly
                                    variant="light"
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                >
                                    <XMarkIcon className="w-8 text-secondary-900" />
                                </Button>
                            </div>
                            <nav className="flex flex-col w-full justify-center space-y-4 p-4 text-xl">
                                <Link
                                    href="/features"
                                    className="hover:text-primary-500"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="hover:text-primary-500"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/resources"
                                    className="hover:text-primary-500"
                                >
                                    Resources
                                </Link>
                            </nav>
                            <div className="flex flex-col justify-between w-full text-secondary-900 p-4 text-xl">
                                {!auth.user && (
                                    <Link
                                        href="/register"
                                        className="bg-primary-500 rounded-md text-white text-center px-4 py-2 hover:bg-primary-600"
                                    >
                                        Register
                                    </Link>
                                )}
                                {auth.user && (
                                    <Link
                                        href="/dashboard"
                                        className="bg-primary-500 rounded-md text-white text-center px-4 py-2 hover:bg-primary-600"
                                    >
                                        Dashboard
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>
            <main className="min-h-screen flex flex-col w-full max-w-[85rem] mx-auto text-black p-4">
                {children}
            </main>
            <footer className="w-full max-w-[85rem] mx-auto text-black p-4">
                <div className="flex flex-col gap-8 lg:flex-row py-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-secondary-900 text-3xl">{appName}</p>
                        <p className="max-w-xl">
                            Leading the way in efficient time management to help
                            you make the most of every moment.
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
        </>
    );
}
