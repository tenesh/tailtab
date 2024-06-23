import { useForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';

export default function DashboardPage() {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        gender: '',
        birth_date: '',
        organization_name: '',
        organization_description: '',
        organization_image: '',
        workspace_name: '',
        workspace_description: '',
        workspace_image: '',
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
                        Let&apos;s get started
                    </h1>
                    <p className="text-sm"></p>
                </div>
                <form
                    className="flex flex-col gap-4 text-sm"
                    onSubmit={submit}
                    noValidate={true}
                >
                    <p className="text-lg font-medium">Account</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={data.first_name}
                            onChange={(event) =>
                                setData('first_name', event.target.value)
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.first_name && (
                            <div className="text-error-600 pb-1">
                                {errors.first_name}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={data.last_name}
                            onChange={(event) =>
                                setData('last_name', event.target.value)
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.last_name && (
                            <div className="text-error-600 pb-1">
                                {errors.last_name}
                            </div>
                        )}
                    </div>
                    <p className="pt-4 text-lg font-medium">Organization</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="organization_name">Name</label>
                        <input
                            type="text"
                            name="organization_name"
                            value={data.organization_name}
                            onChange={(event) =>
                                setData('organization_name', event.target.value)
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.organization_name && (
                            <div className="text-error-600 pb-1">
                                {errors.organization_name}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="organization_description">
                            Description
                        </label>
                        <textarea
                            name="organization_description"
                            value={data.organization_description}
                            onChange={(event) =>
                                setData(
                                    'organization_description',
                                    event.target.value,
                                )
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.organization_description && (
                            <div className="text-error-600 pb-1">
                                {errors.organization_description}
                            </div>
                        )}
                    </div>
                    <p className="pt-4 text-lg font-medium">Workspace</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="workspace_name">Name</label>
                        <input
                            type="text"
                            name="workspace_name"
                            value={data.workspace_name}
                            onChange={(event) =>
                                setData('workspace_name', event.target.value)
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.workspace_name && (
                            <div className="text-error-600 pb-1">
                                {errors.workspace_name}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="workspace_description">
                            Description
                        </label>
                        <textarea
                            name="workspace_description"
                            value={data.workspace_description}
                            onChange={(event) =>
                                setData(
                                    'workspace_description',
                                    event.target.value,
                                )
                            }
                            className="border-[1px] rounded-md px-4 py-2"
                        />
                        {errors.workspace_description && (
                            <div className="text-error-600 pb-1">
                                {errors.workspace_description}
                            </div>
                        )}
                    </div>
                    <button
                        disabled={processing}
                        className="my-5 bg-primary-500 rounded-md text-white text-center px-4 py-2 hover:bg-primary-600"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}
