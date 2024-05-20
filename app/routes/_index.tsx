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
    <div>
      <h1>Study Room</h1>
      <p>Welcome to Study Room!</p>
    </div>
  );
}
