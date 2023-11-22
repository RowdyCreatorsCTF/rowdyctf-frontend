import Link from "next/link";
import ChallengeCard from "@/components/ChallengeCard";
import Challenge from "@/types";

async function getData(category?: SearchParamValue) {
  let res;
  if (category) {
    res = await fetch(
      `http://localhost:1323/api/v1/challenges?category=${category}`,
    );
  } else {
    res = await fetch("http://localhost:1323/api/v1/challenges");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type SearchParamValue = string | undefined;

export default async function Challenges({
  searchParams,
}: {
  searchParams: { [key: string]: SearchParamValue };
}) {
  const challenges: Challenge[] = (await getData(searchParams["category"])).map(
    (challenge: string) => JSON.parse(challenge),
  );

  return (
    <div className="flex h-full w-full">
      <div className="basis-1/4 p-4">
        <div className="h-full rounded-xl bg-rowdy-light-blue p-4">
          <h2 className="mb-3 text-4xl">Challenges</h2>
          <div>
            <h3 className="text-2xl">Categories</h3>
            <nav>
              <ul className="text-gray-500">
                <li>
                  <Link href="/challenges?category=web">Web</Link>
                </li>
                <li>
                  <Link href="/challenges?category=scripting">Scripting</Link>
                </li>
                <li>
                  <Link href="/challenges?category=cryptography">
                    Cryptography
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 grid-rows-4 gap-4 overflow-y-scroll p-4">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
