import { SignUp } from "@clerk/remix";
import Navbar from "~/components/Navbar/Navbar/Navbar";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col">
            <Navbar />
            <div className="m-auto">
                <SignUp />
            </div>
        </div>
    );
}
