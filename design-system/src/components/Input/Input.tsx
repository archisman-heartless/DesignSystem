import { forwardRef } from 'react'
import { Typography } from '../Typography'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, helperText, className, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && <Typography variant="label">{label}</Typography>}
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full px-3 py-2 border rounded-md
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
              ${error ? 'border-error focus:ring-error' : 'border-gray-300'}
              ${startIcon ? 'pl-10' : ''}
              ${endIcon ? 'pr-10' : ''}
              ${className}
            `}
            aria-invalid={!!error}
            {...props}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {endIcon}
            </div>
          )}
        </div>
        {error && (
          <Typography variant="helper" color="error">
            {error}
          </Typography>
        )}
        {helperText && !error && (
          <Typography variant="helper">{helperText}</Typography>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'