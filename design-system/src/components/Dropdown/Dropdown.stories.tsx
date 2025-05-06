import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { useState } from 'react'

const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Dropdown>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Disabled Option', disabled: true },
]

export const Basic: Story = {
  args: {
    options,
    placeholder: 'Select an option',
  },
}

export const WithLabel: Story = {
  args: {
    options,
    label: 'Choose an option',
    placeholder: 'Select...',
  },
}

export const WithError: Story = {
  args: {
    options,
    label: 'Country',
    error: 'This field is required',
  },
}

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('option2')
    return (
      <Dropdown 
        options={options}
        value={value}
        onChange={setValue}
        label="Controlled Dropdown"
      />
    )
  }
}