import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";

import MainContainer from "@/components/MainContainer";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Multiplayer Wordle",
  description: "A two player version of the famous wordle game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased className="bg-white pl-[calc(100vw-100%)] text-black dark:bg-gray-950 dark:text-white"`}
      >
        <Providers>
          <MainContainer>{children}</MainContainer>
          <Toaster />
          <footer className="flex-wrap items-center justify-items-center mt-3 py-2">
            <p className="flex gap-1">
              Created with &#x2764;&#xfe0f; by
              <a
                className="flex items-center underline hover:underline hover:underline-offset-4"
                href="https://linkedin.com/in/linda-okorie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linda Okorie
              </a>
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
