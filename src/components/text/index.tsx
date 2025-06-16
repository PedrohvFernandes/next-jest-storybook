import { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/utils/cn'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Text({ size = 'md', children, asChild, className, color }: TextProps) {
  // Se asChield for true, ela usa o Slot como component e com isso o Slot pega o filho dele e o transforma como o componente principal o substituindo
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={cn(
        'text-white',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        },
        className
      )}
      style={{ color }}
    >
      {children}
    </Comp>
  )
}