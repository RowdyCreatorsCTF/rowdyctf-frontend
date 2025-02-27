import Link from "next/link";
import ChallengeCard from "@/components/ChallengeCard";
// import Challenge from "@/types";
import challenges from "@/utils/dummy/challenges";
import { Orbitron } from "next/font/google";
import { URLSearchParams } from "url";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

async function getData(queryParams: { [key: string]: string }) {
  const res = await fetch(
    "http://localhost:1323/api/v1/challenges?" +
      new URLSearchParams(queryParams),
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// type SearchParamValue = string | undefined;

export default async function Challenges({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // const challenges: Challenge[] = (await getData(searchParams["category"])).map(
  //   (challenge: string) => JSON.parse(challenge),
  // );
  //

  const updatedParamRoute = (k: string, v: string) => {
    return (
      "/challenges?" + new URLSearchParams({ ...{ [k]: v }, ...searchParams })
    );
  };

  // const challenges = await getData(
  //   Object.entries(searchParams).reduce(
  //     (a: any, [k, v]) => (v == null ? a : ((a[k] = v), a)),
  //     {},
  //   ),
  // );

  // const challenges = await getData(searchParams);

  return (
    <div className="flex gap-4 p-4">
      <div>
        <div className="first-letter h-full rounded-box bg-neutral p-4">
          <h2 className={"mb-3 font-orbitron text-4xl"}>Challenges</h2>
          <nav>
            <h3 className="text-2xl">Categories</h3>
            <ul className="text-neutral-content">
              <li>
                <Link href={updatedParamRoute("category", "web")}>Web</Link>
              </li>
              <li>
                <Link href={updatedParamRoute("category", "scripting")}>
                  Scripting
                </Link>
              </li>
              <li>
                <Link href={updatedParamRoute("category", "cryptography")}>
                  Cryptography
                </Link>
              </li>
            </ul>
            <br />
            <h3 className="text-2xl">Difficulty</h3>
            <ul className="text-neutral-content">
              <li>
                <Link href={updatedParamRoute("difficulty", "easy")}>Easy</Link>
              </li>
              <li>
                <Link href={updatedParamRoute("difficulty", "medium")}>
                  Medium
                </Link>
              </li>
              <li>
                <Link href={updatedParamRoute("difficulty", "large")}>
                  Hard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-4 p-2">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  );
}
