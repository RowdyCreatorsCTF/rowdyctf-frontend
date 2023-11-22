import Link from "next/link";

import CategoryChip from "./CategoryChip";
import Challenge from "@/types";

type CardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: CardProps) {
  return (
    <div>
      <div className="h-full w-full rounded-xl bg-rowdy-light-blue shadow-md shadow-white/10">
        <div className="flex flex-col gap-y-2 p-4">
          <Link
            href={`/challenges/${challenge.id}`}
            className="truncate text-xl"
          >
            {challenge.name}
          </Link>
          <div className="flex gap-1">
            {challenge.categories?.map((category, idx) => (
              <CategoryChip
                key={category.toLowerCase() + idx}
                id={category.toLowerCase()}
                title={category}
              />
            ))}
          </div>
          <p>Difficulty: {challenge.difficulty ?? "unknown"}</p>
        </div>
      </div>
    </div>
  );
}
