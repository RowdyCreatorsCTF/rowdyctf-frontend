import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";

import ChallengeCard from "@/components/ChallengeCard";

export default async function Home() {
  const { userId: authId } = auth();

  if (authId) {
  }

  const user = await currentUser();

  return (
    <div className="h-full w-full bg-gradient-to-br from-neutral from-50% via-[rgba(57,0,123,0.8)] via-80% to-neutral to-95%"></div>
  );
}
