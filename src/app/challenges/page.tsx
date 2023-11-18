import Link from "next/link";
import ChallengeCard from "@/components/ChallengeCard";
import Challenge from "@/types";

async function getData() {
  const res = await fetch("http://localhost:1323/api/v1/challenges");
  // console.log(res.json());

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // return JSON.parse(await res.json());
  return res.json();
}

export default async function Challenges() {
  const challenges: Challenge[] = (await getData()).map((challenge: string) =>
    JSON.parse(challenge)
  );

  return (
    <div className="flex h-full w-full">
      <div className="basis-1/4 p-4">
        <div className="h-full rounded-xl bg-rowdy-light-blue border-rowdy-orange/60 p-4">
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
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
