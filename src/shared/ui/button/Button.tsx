import { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import s from './Button.module.css'

type Props = {
  variant?: 'yellow' | 'blue' | 'none'
  href?: string
  target?: '_blank' | '_self'
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const Button = ({
  variant = 'yellow',
  href,
  target,
  children,
  className,
  onClick,
}: Props) => {
  const classes = clsx(s.button, s[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
