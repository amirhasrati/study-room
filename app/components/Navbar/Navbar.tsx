import NavBtn from "./NavBtn";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";
export default function Navbar() {
  return (
    <nav className="h-16 px-8 border-b border-neutral-900 text-white flex items-center justify-between">
      <div className="flex gap-4">
        <NavBtn title="Home" href="/" />
        <SignedIn>
          <NavBtn title="Rooms" href="/" />
        </SignedIn>
      </div>
      <SignedIn>
        <div>
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button>Login</button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
}
