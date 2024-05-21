import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex justify-center items-center">
      <SignUp />
    </div>
  );
}
