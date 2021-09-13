/* eslint-disable react/button-has-type */
import * as React from 'react'
import clsx from 'clsx'

import { ButtonProps } from './Button.types'
import {
  // prettier-ignore
  buttonRadius,
  buttonSizes,
  buttonVariants,
  buttonWidth,
} from './Button.styles'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      size = 'normal',
      variant = 'filled',
      radius = 'sm',
      width = 'normal',
      disabled = false,
      children,
      ...rest
    },
    ref,
  ) => (
    <button
      className={clsx(
        {
          'cursor-not-allowed disabled:bg-gray-500': disabled === true,
        },
        buttonVariants(variant),
        buttonSizes(size),
        buttonWidth(width),
        buttonRadius(radius),
        className,
      )}
      disabled={disabled}
      ref={ref}
      style={style}
      type={type ?? 'button'}
      {...rest}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'

export default Button
