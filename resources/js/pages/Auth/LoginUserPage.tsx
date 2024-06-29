import { Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';
import GuestLayout from '@/layouts/GuestLayout';

export default function LoginUserPage({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <GuestLayout>
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
                    <Input
                        type="email"
                        label="Email"
                        value={data.email}
                        onChange={(event) =>
                            setData('email', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={data.password}
                        onChange={(event) =>
                            setData('password', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.password}
                        errorMessage={errors.password}
                    />
                    <Link
                        href="/forgot-password"
                        className="underline text-xs ml-auto"
                    >
                        Forgot Password?
                    </Link>
                    <Button
                        isLoading={processing}
                        color="primary"
                        type="submit"
                    >
                        Sign In
                    </Button>
                    <div className="flex flex-col gap-2 text-center">
                        <p>
                            Don&apos;t have an account?{' '}
                            <Link href="/register" className="underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
                <p className="text-center text-xs font-medium max-w-lg mx-auto">
                    By continuing, you agree to Tailtab&apos;s{' '}
                    <Link href="/terms" className="underline">
                        Terms of Service{' '}
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="underline">
                        Privacy Policy
                    </Link>
                    , and to receive periodic emails with updates.
                </p>
            </div>
        </GuestLayout>
    );
}
