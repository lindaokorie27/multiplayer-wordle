import type { Meta, StoryObj } from '@storybook/react';

import UpvoteCount from './UpvoteCount';

const meta = {
  title: 'ProdFeedback/UpvoteCount',
  component: UpvoteCount,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof UpvoteCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clicked: Story = {
  args: {
    upvotes: 45
  },
};
