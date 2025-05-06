/* eslint-disable no-constant-binary-expression */
import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { Typography } from '../Typography'

interface Props {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className={`w-full ${sizeClasses[size]} bg-white rounded-lg shadow-xl`}>
        <div className="p-6">
          // eslint-disable-next-line no-constant-binary-expression
          {(title || true) && (
            <div className="flex items-center justify-between mb-4">
              {title && (
                <Typography variant="h5" className="text-gray-900">
                  {title}
                </Typography>
              )}
              <button
                onClick={onClose}
                className="p-1 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>
          )}
          <div className="text-left">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}