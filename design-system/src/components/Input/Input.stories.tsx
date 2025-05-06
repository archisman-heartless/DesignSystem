import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { FiMail, FiLock } from 'react-icons/fi'

const meta = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    startIcon: { control: false }, // Disable control for icons
    endIcon: { control: false },   // Disable control for icons
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta> // Changed to use meta type

export const Default: Story = {
  args: {
    placeholder: 'Enter your text',
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  }
}

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters',
  }
}

export const WithIcons: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    startIcon: <FiMail className="text-gray-400" />,
  }
}

export const PasswordWithIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    startIcon: <FiLock className="text-gray-400" />,
  }
}