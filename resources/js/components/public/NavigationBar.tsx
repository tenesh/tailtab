import { usePage, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface NavigationBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavigationBar(props: NavigationBarProps) {
    const { appName, auth } = usePage<PageProps>().props;

    return (
        <div className="flex items-center justify-between w-full max-w-[85rem] mx-auto text-secondary-900 p-4">
            <p className="text-secondary-900 text-3xl">{appName}</p>
            <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/features" className="hover:text-primary-600">
                    Features
                </Link>
                <Link href="/pricing" className="hover:text-primary-600">
                    Pricing
                </Link>
                <Link href="/resources" className="hover:text-primary-600">
                    Resources
                </Link>
                {!auth.user && (
                    <Link
                        href="/register"
                        className="bg-primary-500 rounded-xl text-white px-4 py-2 hover:bg-primary-600"
                    >
                        Register
                    </Link>
                )}
                {auth.user && (
                    <Link
                        href="/dashboard"
                        className="bg-primary-500 rounded-xl text-white px-4 py-2 hover:bg-primary-600"
                    >
                        Dashboard
                    </Link>
                )}
            </nav>
            <div className="lg:hidden">
                <button className="lg:hidden" onClick={props.onClose}>
                    <Bars3Icon className="w-8 text-secondary-900" />
                </button>
                <motion.div
                    initial="closed"
                    animate={props.isOpen ? 'open' : 'closed'}
                    variants={{
                        open: { opacity: 1, width: '100%' },
                        closed: { opacity: 0, width: 0 },
                    }}
                    className="absolute top-0 left-0 w-full h-full py-3 bg-secondary-50 lg:hidden"
                >
                    <div className="flex justify-between w-full text-secondary-900 p-4">
                        <p className="text-secondary-900 text-3xl">{appName}</p>
                        <button className="lg:hidden" onClick={props.onClose}>
                            <XMarkIcon className="w-8 text-secondary-900" />
                        </button>
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
                                className="bg-primary-500 rounded-xl text-white text-center px-4 py-2 hover:bg-primary-600"
                            >
                                Register
                            </Link>
                        )}
                        {auth.user && (
                            <Link
                                href="/dashboard"
                                className="bg-primary-500 rounded-xl text-white text-center px-4 py-2 hover:bg-primary-600"
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
