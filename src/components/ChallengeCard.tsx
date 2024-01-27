import Link from "next/link";

import CategoryChip from "./CategoryChip";
import Challenge from "@/types";

type CardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: CardProps) {
  return (
    <div className="border-light card card-compact bg-neutral text-neutral-content">
      <div className="card-body">
        <h2 className="card-title">{challenge.name}</h2>
        <h3 className="card-normal">
          Difficulty: {challenge.difficulty ?? "Unknown"}
        </h3>
        <div className="flex flex-wrap gap-1">
          {challenge.categories.map((cat, idx) => (
            <div
              key={idx}
              className="badge badge-accent badge-lg text-info-content"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
