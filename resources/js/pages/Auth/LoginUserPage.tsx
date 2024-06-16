import { usePage, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';

export default function LoginUserPage() {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/login');
    }

    return (
        <main className="min-h-screen flex flex-col w-full text-black p-4">
            <p className="text-secondary-900 text-xl">{appName}</p>
            <div className="flex flex-col w-full max-w-md m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Welcome back
                    </h1>
                    <p className="text-sm">Sign in to your account</p>
                </div>
                <form
                    className="flex flex-col gap-4 text-sm"
                    onSubmit={submit}
                    noValidate={true}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="emai">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(event) =>
                                setData('email', event.target.value)
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.email && (
                            <div className="text-error-600 pb-1">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(event) =>
                                setData('password', event.target.value)
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.password && (
                            <div className="text-error-600 pb-1">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <button
                        disabled={processing}
                        className="my-5 bg-primary-500 rounded-md text-white text-center px-4 py-2 hover:bg-primary-600"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <div className="flex flex-col gap-2 text-center">
                        <p>
                            Don&apos;t have an account?
                            <Link href="/register" className="underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
                <p className="text-center text-xs font-medium max-w-lg mx-auto">
                    By continuing, you agree to Tailtab&apos;s
                    <Link href="/terms" className="underline">
                        Terms of Service
                    </Link>
                    and
                    <Link href="/privacy" className="underline">
                        Privacy Policy
                    </Link>
                    , and to receive periodic emails with updates.
                </p>
            </div>
        </main>
    );
}
