import ProfileAvatar from "./ProfileAvatar";
import Link from "next/link";
import {
  UserButton,
  SignOutButton,
  currentUser,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <header className="w-screen bg-rowdy-blue">
      <nav className="flex justify-between p-4">
        <Link href="/">
          <h2 className="self-center text-3xl">RowdyCTF</h2>
        </Link>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link href="/challenges">Challenges</Link>
          </li>
          <li>
            <Link href="/leaderboard">Leaderboard</Link>
          </li>
          <SignedIn>
            <li>
              {/* <SignOutButton>
                <ProfileAvatar
                  src="https://static.acmutsa.org/acm-logo.png"
                  alt="pfp"
                />
              </SignOutButton> */}
              <UserButton />
            </li>
          </SignedIn>
          <SignedOut>
            <li>
              <Link href="/sign-in">Log In</Link>
            </li>
            <li>
              <Link href="/sign-up">Register</Link>
            </li>
          </SignedOut>
        </ul>
      </nav>
    </header>
  );
}
