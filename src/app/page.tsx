import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="mb-2 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Your multiplayer wordle game!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/game"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Play
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/rules"
            rel="noopener noreferrer"
          >
            Rules
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex-wrap items-center justify-center">
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
    </div>
  );
};
export default Home;
