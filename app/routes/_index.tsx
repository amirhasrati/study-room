import Navbar from "~/components/Navbar/Navbar";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Study Room" },
    {
      name: "description",
      content: "Welcome to Study Room!",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-950 text-emerald-500">
      <Navbar />
    </div>
  );
}
