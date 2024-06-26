import { usePage, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent, useState } from 'react';
import { Button } from '@nextui-org/react';
import GuestLayout from '@/layouts/GuestLayout';

export default function VerifyEmailPromptPage() {
    const { post, processing } = useForm({});
    const { auth } = usePage<PageProps>().props;

    const [isResent, setIsResent] = useState(false);

    function submit(e: FormEvent) {
        e.preventDefault();
        setIsResent(true);
        post(route('verification.send'));
    }

    return (
        <GuestLayout>
            <div className="flex flex-col w-full max-w-lg m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Hey {auth.user.name},
                    </h1>
                    <p className="text-sm">Activate your account</p>
                </div>
                <form className="flex flex-col gap-5" onSubmit={submit}>
                    <p>
                        We have sent an email to {auth.user.email} to verify
                        your email address and activate your account. The link
                        in the email will expire in 24 hours.
                    </p>
                    <p>
                        If you did not receive an email or the link has expired.
                        Not to worry, we can send the link again.
                    </p>
                    <Button
                        isLoading={processing}
                        isDisabled={isResent}
                        color="primary"
                    >
                        Resend verification link
                    </Button>
                </form>
            </div>
        </GuestLayout>
    );
}
