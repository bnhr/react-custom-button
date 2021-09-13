import {
  // prettier-ignore
  ButtonRadius,
  ButtonSizes,
  ButtonVariants,
  ButtonWidth,
} from './Button.types'

export const buttonSizes = (size?: ButtonSizes) => {
  switch (size) {
    case 'sm': {
      return 'min-w-[60px] py-[4px] px-[8px]'
    }
    case 'large': {
      return 'min-w-[60px] py-[16px] px-[32px]'
    }
    default: {
      return 'min-w-[60px] py-[8px] px-[16px]'
    }
  }
}

export const buttonRadius = (radius?: ButtonRadius) => {
  switch (radius) {
    case 'sm': {
      return 'rounded-sm'
    }
    case 'full': {
      return 'rounded-full'
    }
    case 'lg': {
      return 'rounded-lg'
    }
    default: {
      return 'rounded-md'
    }
  }
}

export const buttonWidth = (width?: ButtonWidth) => {
  switch (width) {
    case 'full': {
      return 'block w-full'
    }
    default: {
      return 'inline-block w-auto'
    }
  }
}

export const buttonVariants = (variant?: ButtonVariants) => {
  switch (variant) {
    case 'custom': {
      return 'transition-color appereance-none'
    }
    case 'outline': {
      return 'transition-color appereance-none border-2 border-black bg-transparent text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
    }
    default: {
      return 'transition-color appereance-none bg-black text-white border border-transparent rounded-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300'
    }
  }
}
