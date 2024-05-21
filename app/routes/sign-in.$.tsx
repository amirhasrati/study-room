import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex justify-center items-center">
      <SignIn />
    </div>
  );
}
