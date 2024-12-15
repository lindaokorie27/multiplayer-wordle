"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Rules = () => {
  const router = useRouter();

  const handleGoBackClick = () => router.back();

  return (
    <div className="my-4">
      <Button variant="link" className="my-5" onClick={handleGoBackClick}>
        <ArrowLeft />
        Go Back
      </Button>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mb-3 py-3">
        <h1 className="font-extrabold text-3xl mb-2">Instructions</h1>
        <section id="objectives">
          <h2 className="font-bold text-xl">Objectives</h2>
          <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
            <li>
              Guess your opponent&apos;s secret 5-letter word within 6 attempts.
            </li>
            <li>Take turns setting a word for your opponent to guess.</li>
            <li>The player with the highest score after both turns wins!</li>
          </ul>
        </section>
        <section id="how-to-play">
          <h2 className="font-bold text-xl">How to play</h2>
          <ol className="list-inside list-decimal ps-5 mt-2 space-y-1">
            <li>
              <strong>Setup Phase:</strong>
              <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
                <li>
                  Each player takes turns selecting a valid 5-letter word for
                  their opponent to guess.
                </li>
                <li>Words must be real and can’t contain duplicate letters.</li>
              </ul>
            </li>
            <li>
              <strong>Guessing Phase:</strong>
              <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
                <li>
                  The guessing player has 6 attempts to figure out the word
                </li>
                <li>Each attempt must also be a valid 5-letter word.</li>
              </ul>
            </li>
            <li>
              <strong>Feedback on Guesses:</strong>
              <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
                <li>
                  After each guess, the color of the tiles will change to show
                  how close your guess was to the word.
                </li>
                <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
                  <li>
                    <strong>Green:</strong> The letter is in the correct
                    position.
                  </li>
                  <li>
                    <strong>Yellow:</strong> The letter is in the word but in
                    the wrong position.
                  </li>
                  <li>
                    <strong>Gray:</strong> The letter is not in the word.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <strong>Switch Turns:</strong>
              <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
                <li>
                  Once the round is over, the roles switch. The guesser becomes
                  the word-setter, and vice versa.
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <section id="rules">
          <h2 className="font-bold text-xl">Rules</h2>
          <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
            <li>
              All submitted words (as guesses or secret words) must be real.
            </li>
            <li>
              Players must not reveal their chosen word before the guessing
              phase starts.
            </li>
            <li>
              Players should choose words strategically to make it challenging
              but fair for their opponent.
            </li>
          </ul>
        </section>
        <section id="scoring">
          <h2 className="font-bold text-xl">Scoring</h2>
          <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
            <li>Points are awarded based on guessing performance:</li>
            <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
              <li>
                <strong>6 - (Number of Attempts):</strong> Points earned for
                correctly guessing the word.
              </li>
              <li>
                <strong>0 points:</strong> If the word is not guessed within 6
                attempts.
              </li>
            </ul>
            <li>
              After both players have taken turns, the scores are tallied, and
              the player with the highest total score wins.
            </li>
          </ul>
        </section>
        <section id="winning">
          <h2 className="font-bold text-xl">Winning</h2>
          <ul className="list-inside list-disc ps-5 mt-2 space-y-1">
            <li>
              After both players complete their rounds, the player with the most
              points wins.
            </li>
            <li>In case of a tie, both players are declared winners!</li>
          </ul>
        </section>
      </main>
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
    </div>
  );
};
export default Rules;
