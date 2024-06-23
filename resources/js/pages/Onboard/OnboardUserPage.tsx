import { useForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';
import { Button, Input } from '@nextui-org/react';

export default function DashboardPage() {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        organization_name: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post(route('onboard'));
    }

    return (
        <main className="min-h-screen flex flex-col w-full text-black p-4">
            <p className="text-secondary-900 text-xl">{appName}</p>
            <div className="flex flex-col w-full max-w-md m-auto space-y-10">
                <div>
                    <h1 className="text-secondary-900 text-3xl pb-1">
                        Welcome aboard
                    </h1>
                    <p className="text-sm">Let&apos;s get started</p>
                </div>
                <form
                    className="flex flex-col gap-4 text-sm"
                    onSubmit={submit}
                    noValidate={true}
                >
                    <Input
                        type="text"
                        label="First Name"
                        value={data.first_name}
                        onChange={(event) =>
                            setData('first_name', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.first_name}
                        errorMessage={errors.first_name}
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        value={data.last_name}
                        onChange={(event) =>
                            setData('last_name', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.last_name}
                        errorMessage={errors.last_name}
                    />
                    <Input
                        type="text"
                        label="Organization Name"
                        value={data.organization_name}
                        onChange={(event) =>
                            setData('organization_name', event.target.value)
                        }
                        size="md"
                        isInvalid={!!errors.organization_name}
                        errorMessage={errors.organization_name}
                    />
                    <Button
                        isLoading={processing}
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </main>
    );
}
