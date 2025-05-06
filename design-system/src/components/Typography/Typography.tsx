import type { HTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type ParagraphVariant = 'p'
type SpanVariant = 'span'
type LabelVariant = 'label'
type NonElementVariant = 'caption' | 'helper'

type Variant = HeadingVariant | ParagraphVariant | SpanVariant | LabelVariant | NonElementVariant
type Color = 'primary' | 'error' | 'success' | 'warning' | 'info' | 'default'
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: Variant
  className?: string
  color?: Color
  weight?: Weight
  as?: ElementType
}

const variantClasses: Record<Variant, string> = {
  h1: 'text-4xl tracking-tight leading-tight',
  h2: 'text-3xl tracking-tight leading-tight',
  h3: 'text-2xl tracking-tight leading-snug',
  h4: 'text-xl tracking-tight leading-snug',
  h5: 'text-lg tracking-tight leading-normal',
  h6: 'text-base tracking-tight leading-normal',
  p: 'text-base leading-relaxed',
  span: 'text-base',
  label: 'text-sm leading-none',
  caption: 'text-xs leading-none',
  helper: 'text-xs italic leading-none'
} as const

const colorClasses: Record<Color, string> = {
  primary: 'text-primary dark:text-primary-dark',
  error: 'text-error dark:text-error-dark',
  success: 'text-success dark:text-success-dark',
  warning: 'text-warning dark:text-warning-dark',
  info: 'text-info dark:text-info-dark',
  default: 'text-gray-900 dark:text-white'
} as const

const weightClasses: Record<Weight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
} as const

export const Typography = ({
  variant,
  children,
  className,
  color = 'default',
  weight = 'normal',
  as,
  ...props
}: TypographyProps) => {
  let Component: ElementType
  
  if (as) {
    Component = as
  } else {
    switch (variant) {
      case 'label':
        Component = 'label'
        break
      case 'caption':
      case 'helper':
        Component = 'span'
        break
      default:
        Component = variant
    }
  }

  const accessibilityProps = variant.match(/^h[1-6]$/) 
    ? { role: 'heading', 'aria-level': parseInt(variant[1]) } 
    : {}

  return (
    <Component 
      className={twMerge(
        variantClasses[variant],
        colorClasses[color],
        weightClasses[weight],
        className
      )}
      {...accessibilityProps}
      {...props}
    >
      {children}
    </Component>
  )
}