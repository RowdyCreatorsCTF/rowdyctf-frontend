import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs";
import ChallengeCard from "@/components/ChallengeCard";

export default function Challenges() {
  // const { userId: authId } = auth();

  // const user = await currentUser();

  // const searchParams = useSearchParams();
  // if (searchParams.has("category")) {
  // }

  return (
    <div className="flex h-full w-full ">
      <div className="basis-1/4 p-4">
        <div className="h-full rounded-xl bg-rowdy-light-blue  border-rowdy-orange/60 shadow-lg shadow-rowdy-orange/20 p-4">
          <h2 className="text-4xl mb-3">Challenges</h2>
          <div>
            <h3 className="text-2xl">Categories</h3>
            <nav>
              <ul className="text-gray-500">
                <li>
                  <Link href="/challenges/web">Web</Link>
                </li>
                <li>
                  <Link href="/challenges/scripting">Scripting</Link>
                </li>
                <li>
                  <Link href="/challenges/cryptography">Cryptography</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="p-4 w-full grid grid-cols-3 grid-rows-4 gap-4 overflow-y-scroll">
        {Array.from(Array(15).keys()).map((i) => (
          <ChallengeCard key={i} id={i} />
        ))}
      </div>
    </div>
  );
}
