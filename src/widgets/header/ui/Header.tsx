'use client'

import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import s from './Header.module.css'
import { Button } from '@/shared/ui/button'
import buttonStyles from '@/shared/ui/button/Button.module.css'
import { Container } from '@/shared/ui/container/Container'

type Props = {
  offerId?: number
}

export const Header = ({ offerId }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={s.header}>
      <Container className={s.headerInner}>
        <nav className={s.nav}>
          <button
            className={clsx(s.burgerButton, isMenuOpen && s.burgerButtonOpen)}
            onClick={toggleMenu}
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
          </button>
          <Link href='/' className={s.logoLink}>
            <Image
              src='/images/ripper-casino-logo.svg'
              alt='Ripper Casino'
              width={97}
              height={53}
              className={s.imageLogo}
            />
          </Link>
          <div className={s.headerSpacer}></div>

          <ul className={s.navList}>
            <li>
              <Link href='/bonus' className={s.navLink}>
                Bonus
              </Link>
            </li>
            <li>
              <Link href='/app' className={s.navLink}>
                App
              </Link>
            </li>
            <li>
              <Link href='/login' className={s.navLink}>
                Log In
              </Link>
            </li>
          </ul>

          <Button
            href={`/casino/${offerId}`}
            target='_blank'
            variant='yellow'
            className={clsx(s.capitalizeButton, buttonStyles.capitalize)}
          >
            Play Now
          </Button>
        </nav>
      </Container>

      <div className={clsx(s.mobileMenu, isMenuOpen && s.mobileMenuOpen)}>
        <nav className={s.mobileNav}>
          <Link href='/bonus' className={s.mobileNavLink} onClick={closeMenu}>
            Bonus
          </Link>
          <Link href='/app' className={s.mobileNavLink} onClick={closeMenu}>
            App
          </Link>
          <Link href='/login' className={s.mobileNavLink} onClick={closeMenu}>
            Log In
          </Link>
        </nav>
      </div>
    </header>
  )
}
