import Challenge from "@/types";
import { MutableRefObject } from "react";

// TODO: Use nextjs intercepted route
export default function ChallengeModal({
  challenge,
  className,
  // dialogModal,
}: {
  challenge: Challenge;
  className?: string;
  // dialogModal: MutableRefObject<HTMLDialogElement>;
}) {
  return (
    <dialog
      // ref={dialogModal as MutableRefObject<HTMLDialogElement>}
      className={`modal ${className}`}
    >
      <div className="modal-box w-11/12 max-w-4xl bg-primary text-primary-content">
        <h3 className="text-lg font-bold">{challenge.name}</h3>
        <p className="py-4">{challenge.description}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
