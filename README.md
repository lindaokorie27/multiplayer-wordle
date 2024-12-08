This is the UI repo for the Mellow Meals App

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
