import ProfileAvatar from "./ProfileAvatar";
import Link from "next/link";
import { UserButton, SignOutButton, currentUser } from "@clerk/nextjs";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <header className="w-screen bg-rowdy-blue">
      <nav className="p-4 flex justify-between">
        <h2 className="text-3xl self-center">RowdyCTF</h2>
        <ul className="flex items-center gap-x-2">
          <li>
            <Link href="/challenges">Challenges</Link>
          </li>
          <li>
            <Link href="/leaderboard">Leaderboard</Link>
          </li>
          {user ? (
            <li>
              <SignOutButton>
                <ProfileAvatar
                  src="https://static.acmutsa.org/acm-logo.png"
                  alt="pfp"
                />
              </SignOutButton>
            </li>
          ) : (
            <>
              <li>
                <Link href="/sign-in">Log In</Link>
              </li>
              <li>
                <Link href="/sign-up">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
