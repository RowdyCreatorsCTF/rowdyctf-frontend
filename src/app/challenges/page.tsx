import Link from "next/link";
import ChallengeCard from "@/components/ChallengeCard";
import Challenge from "@/types";

async function getData(category?: SearchParamValue) {
  let res;
  if (category) {
    res = await fetch(
      `http://localhost:1323/api/v1/challenges?category=${category}`,
      {
        cache: "no-cache",
      },
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
    <div className="flex gap-4 p-4">
      <div>
        <div className="border-light rounded-box bg-neutral">
          <h2 className="mb-3 text-4xl">Challenges</h2>
          <nav>
            <h3 className="text-2xl">Categories</h3>
            <ul className="text-neutral-content">
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
            <br />
            <h3 className="text-2xl">Difficulty</h3>
            <ul className="text-neutral-content">
              <li>
                <Link href="/challenges?difficulty=easy">Easy</Link>
              </li>
              <li>
                <Link href="/challenges?difficulty=medium">Medium</Link>
              </li>
              <li>
                <Link href="/challenges?difficulty=hard">Hard</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-4 border border-white">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  );
}
