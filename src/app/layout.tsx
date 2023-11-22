import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider, auth } from "@clerk/nextjs";

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
      <html lang="en">
        <body
          className={
            inter.className +
            " bg-black text-rowdy-orange h-screen w-screen flex flex-col"
          }
        >
          <Navbar />
          <main className="h-[750px] text-gray-300 flex-grow">{children}</main>
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
