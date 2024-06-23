import { usePage, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent, useState } from 'react';
import { Button } from '@nextui-org/react';

export default function VerifyEmailPromptPage() {
    const { post, processing } = useForm({});
    const { appName, auth } = usePage<PageProps>().props;

    const [isExpired, setIsExpired] = useState(false);
    const [isResent, setIsResent] = useState(false);

    function submit(e: FormEvent) {
        e.preventDefault();
        setIsResent(true);
        post(route('verification.send'));
    }

    return (
        <main className="min-h-screen flex flex-col w-full text-black p-4">
            <p className="text-secondary-900 text-xl">{appName}</p>
            <div className="flex flex-col w-full max-w-lg m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Hey {auth.user.name},
                    </h1>
                    <p className="text-sm">Activate your account</p>
                </div>
                <form className="flex flex-col gap-5" onSubmit={submit}>
                    {!isExpired && (
                        <>
                            <p>
                                We have sent an email to teneshbecs@gmail.com to
                                verify your email address and activate your
                                account. The link in the email will expire in 24
                                hours.
                            </p>
                            <p>
                                If you did not receive an email or the link has
                                expired. Not to worry, we can send the link
                                again.
                            </p>
                        </>
                    )}

                    {isExpired && (
                        <>
                            <p>
                                Looks like the verification link has expired.
                                Not to worry, we can send the link again.
                            </p>
                        </>
                    )}
                    <Button
                        isLoading={processing}
                        isDisabled={isResent}
                        color="primary"
                    >
                        Resend verification link
                    </Button>
                </form>
            </div>
        </main>
    );
}
