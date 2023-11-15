import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";

import ChallengeCard from "@/components/ChallengeCard";

export default async function Home() {
  const { userId: authId } = auth();

  if (authId) {
  }

  const user = await currentUser();

  return <div></div>;
}
