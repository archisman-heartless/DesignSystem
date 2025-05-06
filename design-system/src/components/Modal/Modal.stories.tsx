import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'

const meta: Meta<typeof Modal> = {
  title: 'Design System/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Basic Modal">
          <Typography variant="p" className="mb-4">
            This is a basic modal dialog with some content.
          </Typography>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </>
    )
  }
}

export const Sizes: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)
    
    return (
      <>
        <div className="space-x-2 mb-4">
          <Button onClick={() => { setSize('sm'); setIsOpen(true) }}>Small</Button>
          <Button onClick={() => { setSize('md'); setIsOpen(true) }}>Medium</Button>
          <Button onClick={() => { setSize('lg'); setIsOpen(true) }}>Large</Button>
          <Button onClick={() => { setSize('xl'); setIsOpen(true) }}>Extra Large</Button>
        </div>
        
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          title={`${size} Modal`}
          size={size}
        >
          <Typography variant="p" className="mb-4">
            This is a {size} modal dialog.
          </Typography>
          <div className="flex justify-end">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    )
  }
}