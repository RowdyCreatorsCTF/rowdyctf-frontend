import Link from "next/link";

import CategoryChip from "./CategoryChip";
import Challenge from "@/types";

type CardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: CardProps) {
  return (
    <div>
      <div className="rounded-lg w-full h-full bg-rowdy-light-blue border border-rowdy-orange/20 shadow-inner shadow-white-50">
        <div className="p-4 flex flex-col gap-y-2">
          <Link
            href={`/challenges/${challenge.id ?? "unknown"}`}
            className="text-xl truncate"
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
