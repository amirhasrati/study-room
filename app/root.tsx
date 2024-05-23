import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import { dark } from "@clerk/themes";

export const loader = (args: LoaderFunctionArgs) => {
    const { context } = args;
    const { env } = context.cloudflare;

    return rootAuthLoader(args, {
        publishableKey: env.CLERK_PUBLISHABLE_KEY,
        secretKey: env.CLERK_SECRET_KEY,
    });
};

import styles from "./tailwind.css?url";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta title="Study Room" />
                <Meta />
                <Links />
            </head>
            <body className="font-sans overscroll-none">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

function App() {
    return <Outlet />;
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default ClerkApp(App, {
    appearance: {
        baseTheme: dark,
    },
});
