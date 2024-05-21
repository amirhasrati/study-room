import { SignIn } from "@clerk/remix";
import Navbar from "~/components/Navbar/Navbar";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Navbar />
      <div className="m-auto">
        <SignIn />
      </div>
    </div>
  );
}
