import { Typography } from '../Typography/Typography'

type Variant = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  className?: string
}

const variantClasses = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  error: 'bg-error hover:bg-error-dark text-white',
  success: 'bg-success hover:bg-success-dark text-white',
  warning: 'bg-warning hover:bg-warning-dark text-white',
  info: 'bg-info hover:bg-info-dark text-white',
}

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-md transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      <Typography variant="label" weight="medium">
        {children}
      </Typography>
    </button>
  )
}