import { usePage, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';
import { Input, Button } from '@nextui-org/react';

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
                    <Input
                        type="password_confirmation"
                        label="Confirm Password"
                        value={data.password_confirmation}
                        onChange={(event) =>
                            setData('password_confirmation', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.password_confirmation}
                        errorMessage={errors.password_confirmation}
                    />
                    <Button
                        isLoading={processing}
                        color="primary"
                        type="submit"
                    >
                        Reset password
                    </Button>
                </form>
            </div>
        </main>
    );
}
