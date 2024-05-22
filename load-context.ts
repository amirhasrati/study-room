import { AppLoadContext } from "@remix-run/cloudflare";
import { type PlatformProxy } from "wrangler";
import { createClient } from "@libsql/client/web";

// When using `wrangler.toml` to configure bindings,
// `wrangler types` will generate types for those bindings
// into the global `Env` interface.
// Need this empty interface so that typechecking passes
// even if no `wrangler.toml` exists.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Env {
    CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
    CLERK_SIGN_IN_URL: string;
    CLERK_SIGN_UP_URL: string;
    CLERK_SIGN_IN_FALLBACK_URL: string;
    CLERK_SIGN_UP_FALLBACK_URL: string;
    TURSO_DATABASE_URL: string;
    TURSO_AUTH_TOKEN: string;
}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
    interface AppLoadContext {
        cloudflare: Cloudflare;
    }
}

type GetLoadContext = (args: {
    request: Request;
    context: { cloudflare: Cloudflare }; // load context _before_ augmentation
}) => AppLoadContext;

// Shared implementation compatible with Vite, Wrangler, and Cloudflare Pages
export const getLoadContext: GetLoadContext = ({ context }) => {
    const client = createClient({
        url: context.cloudflare.env.TURSO_DATABASE_URL,
        authToken: context.cloudflare.env.TURSO_AUTH_TOKEN,
    });
    return {
        ...context,
        client,
    };
};
