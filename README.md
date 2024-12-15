This is a wordle with a twist - two-player wordle!

The rules are simple;

- There are two players. Player 1 gives Player 2 a word to guess.
- Player 2 goes through a typical wordle game with the number of guesses saved on the scoreboard.
- The process repeats for 3 rounds per player.
- The player with the lowest score wins!

## Getting Started

First, make sure you have pnpm installed.

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

Storybook is used to manage component development. Components are built using [https://ui.shadcn.com/](Shadcn) and [https://tailwindcss.com](Tailwind CSS).

To run stroybook in dev mode:

```bash
pnpm storybook
```

To build storybook:

```bash
pnpm build-storybook
```

## Testing

To run unit tests with Vitest:

```bash
pnpm test
```

To run end-to-end tests locally with Playwright:

```bash
pnpm exec playwright test
```

To see reports:

```bash
pnpm exec playwright show-report
```
