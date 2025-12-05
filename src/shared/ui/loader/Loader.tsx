'use client'

import React from 'react'
import cn from 'clsx'

import s from './Loader.module.css'

type LoaderSize = 'sm' | 'md' | 'lg'

type LoaderProps = {
  size?: LoaderSize
  variant?: 'light' | 'dark'
  centered?: boolean
  fullscreen?: boolean
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  variant = 'light',
  centered = false,
  fullscreen = false,
  className,
}) => {
  const loaderClassName = cn(
    s.loader,
    {
      [s.loader_small]: size === 'sm',
      [s.loader_large]: size === 'lg',
      [s.loader_dark]: variant === 'dark',
    },
    className
  )

  if (!centered && !fullscreen) {
    return <div className={loaderClassName} />
  }

  const containerClassName = cn(s.centered, {
    [s.fullscreen]: fullscreen,
  })

  return (
    <div className={containerClassName}>
      <div className={loaderClassName} />
    </div>
  )
}
