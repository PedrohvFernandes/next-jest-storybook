import { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  className?: string;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      className={cn('inline-block cursor-pointer border-0 rounded-full font-bold leading-none font-sans',
        primary ? 'bg-primary-default text-white' : 'bg-transparent text-neutral-text shadow-[inset_0_0_0_1px_var(--neutral-shadow)]',
        {
          small: 'py-[10px] px-[16px] text-[12px]',
          medium: 'py-[11px] px-[20px] text-[14px]',
          large: 'py-[12px] px-[24px] text-[16px]',
        }[size],
        className)
      }
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button >
  );
};
