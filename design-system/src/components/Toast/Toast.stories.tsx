// src/components/Toast/Toast.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import { useState } from 'react'
import { Button } from '../Button/Button'
import type { ToastVariant } from '../../types'

const meta: Meta<typeof Toast> = {
  title: 'Design System/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'] satisfies ToastVariant[],
    },
  },
}

export default meta

type Story = StoryObj<typeof Toast>

export const Success: Story = {
  args: {
    message: 'Your changes have been saved successfully!',
    variant: 'success',
    onClose: () => {},
  }
}

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toastState, setToastState] = useState<{
      show: boolean
      variant: ToastVariant
      message: string
    }>({
      show: false,
      variant: 'info',
      message: ''
    })

    const showToast = (variant: ToastVariant) => {
      setToastState({
        show: true,
        variant,
        message: `This is a ${variant} toast message!`
      })
    }

    return (
      <div className="space-x-2">
        {(['success', 'error', 'warning', 'info'] as ToastVariant[]).map((variant) => (
          <Button
            key={variant}
            onClick={() => showToast(variant)}
          >
            Show {variant}
          </Button>
        ))}
        
        {toastState.show && (
          <Toast
            message={toastState.message}
            variant={toastState.variant}
            onClose={() => setToastState(prev => ({...prev, show: false}))}
          />
        )}
      </div>
    )
  }
}