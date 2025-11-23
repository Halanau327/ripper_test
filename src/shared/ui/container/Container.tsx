import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export const Container = ({ className, children }: Props) => {
  return <div className={clsx('container', className)}>{children}</div>
}
