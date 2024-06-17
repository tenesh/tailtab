import { usePage, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';

export default function ResetPasswordPage({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(route('password.store'));
    }

    return (
        <main className="min-h-screen flex flex-col w-full text-black p-4">
            <p className="text-secondary-900 text-xl">{appName}</p>
            <div className="flex flex-col w-full max-w-md m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        New password
                    </h1>
                </div>
                <form
                    className="flex flex-col gap-4 text-sm"
                    onSubmit={submit}
                    noValidate={true}
                >
                    <p>
                        Please provide your email address and we will email you
                        a password reset link that will allow you to choose a
                        new one.
                    </p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">New Password</label>
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
                    <div className="flex flex-col gap-2">
                        <label htmlFor="emai">Confirm Password</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(event) =>
                                setData(
                                    'password_confirmation',
                                    event.target.value,
                                )
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.password_confirmation && (
                            <div className="text-error-600 pb-1">
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>
                    {errors.email && (
                        <div className="text-error-600 pb-1">
                            {errors.email}
                        </div>
                    )}
                    <button
                        disabled={processing}
                        className="my-5 bg-primary-500 rounded-md text-white text-center px-4 py-2 hover:bg-primary-600"
                        type="submit"
                    >
                        Reset password
                    </button>
                </form>
            </div>
        </main>
    );
}
