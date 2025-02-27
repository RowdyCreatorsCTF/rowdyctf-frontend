"use client";
import Link from "next/link";

import CategoryChip from "./CategoryChip";
import Challenge from "@/types";
import { useState, useRef, MutableRefObject } from "react";
import ChallengeModal from "./ChallengeModal";

type CardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: CardProps) {
  // const dialogModal = useRef<HTMLDialogElement>();

  return (
    <div
      className="border-light card card-compact cursor-pointer bg-neutral text-neutral-content"
      // onClick={() => dialogModal.current!.showModal()}
    >
      <div className="card-body">
        <div>
          {" "}
          <h2 className="card-title">{challenge.name}</h2>
          <h3 className="card-normal">
            Difficulty: {challenge.difficulty ?? "Unknown"}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1">
          {challenge.categories.map((cat, idx) => (
            <div
              key={idx}
              className="badge badge-primary badge-lg text-info-content"
            >
              {cat}
            </div>
          ))}
        </div>
        <Link className="card-btn" href={`/challenges/${challenge.id}`}>
          View
        </Link>
      </div>

      <ChallengeModal
        // dialogModal={dialogModal as MutableRefObject<HTMLDialogElement>}
        challenge={challenge}
      />
    </div>
  );
}
