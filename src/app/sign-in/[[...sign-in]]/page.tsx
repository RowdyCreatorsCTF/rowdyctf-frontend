import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto flex h-full w-full items-center justify-center">
      <SignIn />
    </div>
  );
}
