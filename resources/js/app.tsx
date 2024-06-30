import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { NextUIProvider } from '@nextui-org/react';

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        let classnames = 'flex flex-col min-h-full';

        const auth = props.initialPage.props.auth;

        // @ts-expect-error
        if (auth && auth.user) {
            classnames = 'flex flex-row min-h-full';
        }

        root.render(
            <NextUIProvider locale="en-GB" className={classnames}>
                <App {...props} />
            </NextUIProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
}).then(() => {});
