import { SVGAttributes } from 'react'

interface BarProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Bar(props: BarProps) {
  return (
    <svg
      width={2}
      height={28}
      viewBox="0 0 2 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="var(--tertiary-default)" d="M0 0H2V28H0z" />
    </svg>
  )
}