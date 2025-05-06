import { useEffect } from 'react'
import { FiX, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi'
import { Typography } from '../Typography'
import type { ToastVariant } from '../../types'


interface Props {
    message: string
    variant: ToastVariant
    onClose: () => void
    duration?: number
  }

const variantIcons = {
  success: <FiCheckCircle className="text-success" size={20} />,
  error: <FiAlertCircle className="text-error" size={20} />,
  warning: <FiAlertCircle className="text-warning" size={20} />,
  info: <FiInfo className="text-info" size={20} />,
}

const variantColors = {
  success: 'bg-success/10 border-success/20',
  error: 'bg-error/10 border-error/20',
  warning: 'bg-warning/10 border-warning/20',
  info: 'bg-info/10 border-info/20',
}

export const Toast = ({
  message,
  variant = 'info',
  onClose,
  duration = 3000,
}: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className={`
      fixed bottom-4 right-4 flex items-center p-4 rounded-lg border
      shadow-lg min-w-[300px] max-w-md
      ${variantColors[variant]}
    `}>
      <div className="mr-3">
        {variantIcons[variant]}
      </div>
      <Typography variant="p" className="flex-1">
        {message}
      </Typography>
      <button 
        onClick={onClose}
        className="ml-3 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <FiX size={18} />
      </button>
    </div>
  )
}