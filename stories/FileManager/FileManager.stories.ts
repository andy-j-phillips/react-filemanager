import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import fileData from '../../__mock__/data/fileData';

import FileManager from './FileManager';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/FileManager',
  component: FileManager,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    displayColumns: {
      control: 'array',
      description: 'Array of columns to display',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), displayColumns: ['created_at', 'size', 'kind'], directory: fileData },
} satisfies Meta<typeof FileManager>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'FileManager',
    displayColumns: ['created_at', 'size', 'kind'],
    directory: fileData,
  },
};
