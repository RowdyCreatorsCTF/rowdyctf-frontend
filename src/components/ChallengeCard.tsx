import Link from "next/link";

import CategoryChip from "./CategoryChip";
import Challenge from "@/types";

type CardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: CardProps) {
  return (
    <div className="border-light card bg-neutral text-neutral-content">
      <div className="card-body">
        <h2 className="card-title">{challenge.name}</h2>
        <h3 className="">Difficulty: {challenge.difficulty ?? "Unknown"}</h3>
        <div>
          {challenge.categories.map((cat, idx) => (
            <div
              key={idx}
              className="badge badge-info badge-lg text-info-content"
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}
