import { useForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEvent } from 'react';

export default function DashboardPage() {
    const { appName } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        organization_name: '',
        workspace_name: '',
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
                        Welcome on board
                    </h1>
                    <p className="text-sm">Let&apos;s get started</p>
                </div>
                <form
                    className="flex flex-col gap-4 text-sm"
                    onSubmit={submit}
                    noValidate={true}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="organization_name">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            name="text"
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
                        <label htmlFor="workspace_name">Workspace Name</label>
                        <input
                            type="text"
                            name="text"
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
