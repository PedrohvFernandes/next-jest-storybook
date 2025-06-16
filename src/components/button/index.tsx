import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  children: ReactNode
  className?: string
  asChild?: boolean
  active?: boolean
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  className,
  asChild,
  active,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'text-white inline-block cursor-pointer border-0 rounded-full font-bold leading-none transition-all hover:bg-tertiary-dark',
        primary
          ? 'bg-primary-default'
          : 'bg-transparent shadow-[inset_0_0_0_1px_var(--tertiary-default)] text-tertiary-light',
        {
          small: 'py-[10px] px-[16px] text-[12px]',
          medium: 'py-[11px] px-[20px] text-[14px]',
          large: 'py-[12px] px-[24px] text-[16px]',
        }[size],
        active ? 'bg-tertiary-dark' : '',
        props.disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      )}
      style={{ backgroundColor }}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </Comp>
  )
}
