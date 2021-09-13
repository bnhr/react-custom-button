export type ButtonSizes = 'sm' | 'normal' | 'large'
export type ButtonWidth = 'normal' | 'full'
export type ButtonRadius = 'sm' | 'md' | 'lg' | 'full'
export type ButtonVariants = 'filled' | 'outline' | 'custom'

export interface ButtonBaseProps {
  /** Button sizes */
  size?: ButtonSizes

  /** Sets button width to 100% of parent element if width = full */
  width?: ButtonWidth

  /** Button border-radius from Tailwind themes */
  radius?: ButtonRadius

  /** Controls button appearance */
  variant?: ButtonVariants
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>
