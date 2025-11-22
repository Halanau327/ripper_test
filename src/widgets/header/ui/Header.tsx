import Link from 'next/link'
import clsx from 'clsx'
import s from './Header.module.css'
import { Button } from '@/shared/ui/button'
import buttonStyles from '@/shared/ui/button/Button.module.css'
import Image from 'next/image'

type Props = {
  offerId?: number
}

export const Header = ({ offerId }: Props) => {
  return (
    <header className={s.header}>
      <Link href='/'>
        <Image src='/images/ripper-casino-logo.svg' alt='Ripper Casino' width={97} height={53} />
      </Link>

      <nav className={s.nav}>
        <Link href='/bonus' className={s.navLink}>
          Bonus
        </Link>
        <Link href='/app' className={s.navLink}>
          App
        </Link>
        <Link href='/login' className={s.navLink}>
          Log In
        </Link>

        {offerId && (
          <Button
            href={`/casino/${offerId}`}
            target='_blank'
            variant='yellow'
            className={clsx(s.capitalizeButton, buttonStyles.capitalize)}
          >
            Play Now
          </Button>
        )}
      </nav>
    </header>
  )
}
