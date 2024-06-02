import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

interface NavigationBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavigationBar(props: NavigationBarProps) {
    const { appName, auth } = usePage<PageProps>().props;

    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useClickOutside(mobileMenuRef, () => {
        if (props.isOpen) {
            props.onClose();
        }
    });

    return (
        <div className="flex items-center justify-between w-full max-w-[85rem] mx-auto text-secondary-900 p-4">
            <p className="text-secondary-900 text-3xl">{appName}</p>
            {props.isOpen ? (
                <motion.button
                    initial="hide"
                    animate={props.isOpen ? 'show' : 'hide'}
                    variants={{
                        show: { opacity: 1 },
                        hide: { opacity: 0 },
                    }}
                    className="lg:hidden"
                    onClick={props.onClose}
                >
                    <XMarkIcon className="w-8 text-secondary-900" />
                </motion.button>
            ) : (
                <motion.button
                    initial="show"
                    animate={props.isOpen ? 'hide' : 'show'}
                    variants={{
                        show: { opacity: 1 },
                        hide: { opacity: 0 },
                    }}
                    className="lg:hidden"
                    onClick={props.onClose}
                >
                    <Bars3Icon className="w-8 text-secondary-900" />
                </motion.button>
            )}
            <nav className="hidden lg:flex items-center space-x-8">
                <ul className="flex space-x-8">
                    <li className="cursor-pointer">Pricing</li>
                </ul>
                {!auth.user && (
                    <a
                        href="/register"
                        className="bg-primary-500 rounded-xl text-white px-4 py-2 hover:bg-secondary-400"
                    >
                        Register
                    </a>
                )}
                {auth.user && (
                    <a
                        href="/dashboard"
                        className="bg-primary-500 rounded-xl text-white px-4 py-2 hover:bg-secondary-400"
                    >
                        Dashboard
                    </a>
                )}
            </nav>
            <motion.nav
                initial="closed"
                animate={props.isOpen ? 'open' : 'closed'}
                variants={{
                    open: { opacity: 1, width: 220 },
                    closed: { opacity: 0, width: 0 },
                }}
                className="absolute top-0 left-0 max-w-[220px] h-full py-3 bg-secondary-50 lg:hidden"
                ref={mobileMenuRef}
            >
                <div className="flex justify-between w-full text-secondary-900 p-4">
                    <p className="text-secondary-900 text-3xl">{appName}</p>
                </div>
                <ul className="flex flex-col space-y-2 m-5">
                    <a href="/pricing" className="cursor-pointer">
                        Pricing
                    </a>
                    {!auth.user && (
                        <a href="/register" className="cursor-pointer">
                            Register
                        </a>
                    )}
                    {auth.user && (
                        <a href="/dashboard" className="cursor-pointer">
                            Dashboard
                        </a>
                    )}
                </ul>
            </motion.nav>
        </div>
    );
}
