import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-min mx-auto">
      <SignIn />
    </div>
  );
}
