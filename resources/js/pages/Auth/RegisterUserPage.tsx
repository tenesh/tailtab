import { usePage, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';

export default function RegisterUserPage() {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(route('register'));
    }

    return (
        <main className="min-h-screen flex flex-col w-full p-4">
            <p className="text-secondary-900 text-xl">{appName}</p>
            <div className="flex flex-col w-full max-w-md m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Get started
                    </h1>
                    <p className="text-sm">Create a new account</p>
                </div>
                <form
                    className="flex flex-col gap-4 text-sm"
                    onSubmit={submit}
                    noValidate={true}
                >
                    <Input
                        type="text"
                        label="Name"
                        value={data.name}
                        onChange={(event) =>
                            setData('name', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.name}
                        errorMessage={errors.name}
                    />
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
                    <Button
                        isLoading={processing}
                        color="primary"
                        type="submit"
                    >
                        Sign Up
                    </Button>
                    <div className="flex flex-col gap-2 text-center">
                        <p>
                            Have an account?{' '}
                            <Link href="/login" className="underline">
                                Sign In
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
        </main>
    );
}
