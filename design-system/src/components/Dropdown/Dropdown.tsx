import { useState, useRef, useEffect } from 'react'
import { Typography } from '../Typography'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  options: Option[]
  value?: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  error?: string
  className?: string
}

export const Dropdown = ({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
  error,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selectedOption = options.find(option => option.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {label && <Typography variant="label" className="mb-1">{label}</Typography>}
      <button
        type="button"
        className={`
          w-full px-3 py-2 text-left border rounded-md
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          ${error ? 'border-error focus:ring-error' : 'border-gray-300'}
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={!selectedOption ? 'text-gray-400' : ''}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`
                px-3 py-2 cursor-pointer
                ${option.value === value ? 'bg-primary/10' : 'hover:bg-gray-100'}
                ${option.disabled ? 'text-gray-400 cursor-not-allowed' : ''}
              `}
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value)
                  setIsOpen(false)
                }
              }}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      
      {error && (
        <Typography variant="helper" color="error">
          {error}
        </Typography>
      )}
    </div>
  )
}