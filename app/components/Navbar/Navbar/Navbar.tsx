import NavBtn from "./NavBtn";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/remix";
export default function Navbar() {
    return (
        <nav className="h-16 px-8 border-b border-emerald-950 text-white flex items-center justify-between">
            <div className="flex gap-4">
                <NavBtn title="Home" href="/" />
                <SignedIn>
                    <NavBtn title="Rooms" href="/rooms" />
                </SignedIn>
            </div>
            <SignedIn>
                <div>
                    <UserButton />
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <p>Login</p>
                </SignInButton>
            </SignedOut>
        </nav>
    );
}
