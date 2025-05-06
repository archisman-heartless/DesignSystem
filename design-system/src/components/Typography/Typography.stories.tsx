import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'],
    },
    color: {
      control: 'select',
      options: ['primary', 'error', 'success', 'warning', 'info', 'default'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  )
}

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph demonstrating the typography component with some longer text to show how it flows.',
  }
}

export const WithColors: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="p" color="primary">Primary Text</Typography>
      <Typography variant="p" color="error">Error Text</Typography>
      <Typography variant="p" color="success">Success Text</Typography>
      <Typography variant="p" color="warning">Warning Text</Typography>
      <Typography variant="p" color="info">Info Text</Typography>
    </div>
  )
}