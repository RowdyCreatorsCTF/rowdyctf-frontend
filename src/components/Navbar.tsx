import ProfileAvatar from "./ProfileAvatar";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import {
  UserButton,
  SignOutButton,
  SignInButton,
  currentUser,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "variable" });

export default async function Navbar() {
  const user = await currentUser();

  return (
    <header className="w-screen">
      <nav className="navbar justify-between border-b border-primary/50 text-primary">
        <div
          className="flex-1"
          style={{
            textShadow: "purple 0px 0px 20px",
          }}
        >
          <Link href="/">
            <h2
              className={[
                "ml-3 self-center text-4xl font-semibold",
                spaceGrotesk.className,
              ].join(" ")}
            >
              RowdyCTF
            </h2>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-lg">
            <li>
              <Link className="link-hover link" href="/challenges">
                Challenges
              </Link>
            </li>
            <li>
              <Link className="link-hover link" href="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </div>

        {/* <ul className="flex items-center gap-x-4">
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
              </SignOutButton>
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
        </ul> */}
      </nav>
    </header>
  );
}
