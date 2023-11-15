import Link from "next/link";

import CategoryChip from "./CategoryChip";

type CardProps = {
  id?: number;
  points?: number;
};

export default function ChallengeCard({ id, points }: CardProps) {
  return (
    <Link href={`/challenges/${id}`}>
      <div className="rounded-lg w-full h-full bg-rowdy-light-blue border border-rowdy-orange/20 shadow-inner shadow-white-50">
        <div className="p-4 flex flex-col gap-y-2">
          <h3 className="text-xl truncate">Really Long Challenge Name</h3>
          <div className="flex gap-1">
            <CategoryChip id="web" title="Web" color="red-700" />
            <CategoryChip id="crypto" title="Cryptography" color="orange-700" />
            <CategoryChip id="scripting" title="Scripting" color="amber-400" />
          </div>
          <p className="">Points: {points ?? "unknown"}</p>
        </div>
      </div>
    </Link>
  );
}
