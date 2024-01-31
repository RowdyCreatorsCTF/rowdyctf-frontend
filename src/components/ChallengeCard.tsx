"use client";
import Link from "next/link";

import CategoryChip from "./CategoryChip";
import Challenge from "@/types";
import { useState, useRef, MutableRefObject } from "react";

type CardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: CardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dialogModal = useRef<HTMLDialogElement>();

  return (
    <div
      className="border-light card card-compact cursor-pointer bg-neutral text-neutral-content"
      onClick={() => dialogModal.current!.showModal()}
    >
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

      <dialog
        ref={dialogModal as MutableRefObject<HTMLDialogElement>}
        className="modal"
      >
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
