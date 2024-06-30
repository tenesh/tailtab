import { useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';
import { Button, Input } from '@nextui-org/react';
import GuestLayout from '@/layouts/GuestLayout';
import { PageProps } from '@/types';

export default function ForgotPasswordPage() {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(route('password.email'));
    }

    return (
        <GuestLayout>
            <div className="flex flex-col w-full max-w-md m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Reset password
                    </h1>
                </div>

                {flash.success && (
                    <p className="text-sm">
                        Please check the inbox of your email account, and click
                        the reset link provided.
                    </p>
                )}

                {!flash.success && (
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
                        <Button
                            isLoading={processing}
                            color="primary"
                            type="submit"
                        >
                            Send password reset link
                        </Button>
                    </form>
                )}
            </div>
        </GuestLayout>
    );
}
