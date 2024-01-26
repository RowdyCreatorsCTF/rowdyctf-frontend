import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider, auth } from "@clerk/nextjs";

const orbitron = Orbitron({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RowdyCTF",
  description: "CTF website hosted by Rowdy Creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId: authId } = auth();

  return (
    <ClerkProvider>
      <html lang="en" className="bg-neutral">
        <body
          className={[
            orbitron.className,
            "flex h-screen w-screen flex-col text-primary",
          ].join(" ")}
        >
          <Navbar />
          <main
            className={[
              inter.className,
              "flex flex-grow flex-col text-gray-300 ",
            ].join(" ")}
          >
            {children}
          </main>
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
