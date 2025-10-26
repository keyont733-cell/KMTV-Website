import type { Metadata } from "next";
import "./globals.css";
import { League_Spartan, Work_Sans } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-head",
  weight: ["400", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KMTV Creative Media",
  description: "Cinematic listing media and brand content.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} ${workSans.variable} bg-[#101316]`}>
        {children}
      </body>
    </html>
  );
}
