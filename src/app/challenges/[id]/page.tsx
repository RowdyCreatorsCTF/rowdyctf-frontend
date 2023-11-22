import Challenge from "@/types";
import CategoryChip from "@/components/CategoryChip";
import Link from "next/link";

async function getData(id: string) {
  const res = await fetch(`http://localhost:1323/api/v1/challenges/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ChallengeById({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const challenge: Challenge = JSON.parse(await getData(id));

  return (
    <div className="m-4 flex flex-col gap-4 rounded-xl bg-rowdy-light-blue p-4">
      <h1 className="text-serif text-3xl">{challenge.name}</h1>
      <div className="flex gap-1">
        {challenge.categories?.map((category, idx) => (
          <CategoryChip
            key={category.toLowerCase() + idx}
            id={category.toLowerCase()}
            title={category}
          />
        ))}
      </div>
      <p className="text-xl">Difficulty: {challenge.difficulty ?? "unknown"}</p>
      <p className="text-xl">
        Expected Time: {challenge.expectedTime ?? "unknown"} minutes
      </p>
    </div>
  );
}
