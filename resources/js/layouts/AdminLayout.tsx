import { PropsWithChildren, useState } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Avatar } from '@nextui-org/react';
import {
    HomeIcon,
    Cog6ToothIcon,
    BuildingOfficeIcon,
    Bars3Icon,
    XMarkIcon,
    UsersIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function AdminLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState<boolean>(false);
    const { url } = usePage();
    const { appName, auth } = usePage<PageProps>().props;
    const avatarChar = auth.user.name.charAt(0).toUpperCase();

    function navContent() {
        return (
            <>
                <ul className="flex flex-col gap-4">
                    <li
                        className={`px-4 py-2 mx-4 rounded-md text-sm ${url === '/admin' ? 'bg-primary-100' : ''}`}
                    >
                        <Link
                            href={route('admin.dashboard')}
                            className={`flex items-center gap-2 ${url === '/admin' ? 'text-primary-500 font-medium' : 'text-gray-500'}`}
                        >
                            <HomeIcon className="w-6" />
                            Dashboard
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-2 mx-4 rounded-md text-sm ${url === '/organizations' ? 'bg-primary-100' : ''}`}
                    >
                        <Link
                            href={route('admin.dashboard')}
                            className={`flex items-center gap-2 ${url === '/organizations' ? 'text-primary-500 font-medium' : 'text-gray-500'}`}
                        >
                            <BuildingOfficeIcon className="w-6" />
                            Organizations
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-2 mx-4 rounded-md text-sm ${url === '/users' ? 'bg-primary-100' : ''}`}
                    >
                        <Link
                            href={route('admin.dashboard')}
                            className={`flex items-center gap-2 ${url === '/users' ? 'text-primary-500 font-medium' : 'text-gray-500'}`}
                        >
                            <UsersIcon className="w-6" />
                            Users
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-2 mx-4 rounded-md text-sm ${url === '/settings' ? 'bg-primary-100' : ''}`}
                    >
                        <Link
                            href={route('admin.dashboard')}
                            className={`flex items-center gap-2 ${url === '/settings' ? 'text-primary-500 font-medium' : 'text-gray-500'}`}
                        >
                            <Cog6ToothIcon className="w-6" />
                            Settings
                        </Link>
                    </li>
                </ul>
            </>
        );
    }

    return (
        <>
            <motion.nav
                initial="closed"
                animate={open ? 'open' : 'closed'}
                variants={{
                    open: { opacity: 1, width: '100%', display: 'flex' },
                    closed: { opacity: 0, width: 0, display: 'none' },
                }}
                className="absolute top-0 left-0 h-full w-full flex flex-col shadow-md gap-8 bg-white z-50 lg:hidden"
            >
                <div className="flex justify-between text-center p-4">
                    <p className="text-secondary-900 text-2xl text-center px-4">
                        {appName}
                    </p>
                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(false)}
                    >
                        <XMarkIcon className="w-6" />
                    </button>
                </div>
                {navContent()}
            </motion.nav>
            <aside className="hidden lg:flex flex-col min-w-60 shadow-md gap-8 bg-white">
                <div className="text-center p-4">
                    <p className="text-secondary-900 text-2xl">{appName}</p>
                </div>
                {navContent()}
            </aside>
            <div className="flex flex-col w-full">
                <header className="flex flex-row w-full p-4 justify-between lg:justify-end">
                    <button className="lg:hidden" onClick={() => setOpen(true)}>
                        <Bars3Icon className="w-6" />
                    </button>
                    <button>
                        <Avatar name={avatarChar} isBordered={true} />
                    </button>
                </header>
                <main className="flex flex-col grow w-full max-w-[1400px] p-4 mx-auto">
                    {children}
                </main>
            </div>
        </>
    );
}
