import { usePage, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';

export default function ForgotPasswordPage({ status }: { status?: string }) {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(route('password.email'));
    }

    return (
        <main className="min-h-screen flex flex-col w-full text-black p-4">
            <p className="text-secondary-900 text-xl">{appName}</p>
            <div className="flex flex-col w-full max-w-md m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Reset password
                    </h1>
                </div>

                {status === 'password-reset-sent' && (
                    <p className="text-sm">
                        Please check the inbox of your email account, and click
                        the reset link provided.
                    </p>
                )}

                {!status && (
                    <form
                        className="flex flex-col gap-4 text-sm"
                        onSubmit={submit}
                        noValidate={true}
                    >
                        <p>
                            Please provide your email address and we will email
                            you a password reset link that will allow you to
                            choose a new one.
                        </p>
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
                        <button
                            disabled={processing}
                            className="my-5 bg-primary-500 rounded-md text-white text-center px-4 py-2 hover:bg-primary-600"
                            type="submit"
                        >
                            Send password reset link
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
