import s from './Zen8App.module.css'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'

type Props = {
  offerId?: number
}

export const Zen8App = ({ offerId }: Props) => {
  return (
    <section className={s.zen8Section}>
      <Container>
        <div className={s.topSection}>
          <div className={s.leftContent}>
            <h2 className={s.title}>Zen8 Cowboys Casino App</h2>
            <p className={s.description}>
              Cowboys Casino offers a user-friendly mobile app that allows players to access their
              favorite games from anywhere, at any time. The app is designed for both iOS and
              Android devices, ensuring a broad compatibility range. With intuitive navigation and a
              responsive design, the app provides a seamless mobile gaming experience. Features
              include full account management capabilities, live game streaming, and the ability to
              make deposits and withdrawals directly through the app.
            </p>
            <div className={s.downloadButtons}>
              <Button
                href={`/casino/${offerId}`}
                target='_blank'
                variant='none'
                className={s.downloadButton}
              >
                <Image
                  src='/images/google-play-logo.svg'
                  alt='Get it on Google Play'
                  width={175}
                  height={52}
                  loading="lazy"
                />
              </Button>
              <Button
                href={`/casino/${offerId}`}
                target='_blank'
                variant='none'
                className={s.downloadButton}
              >
                <Image
                  src='/images/apple-store-logo.svg'
                  alt='Download on the App Store'
                  width={156}
                  height={52}
                  loading="lazy"
                />
              </Button>
            </div>
          </div>
          <div className={s.rightContent}>
            <Image
              src='/images/mobile-image.png'
              alt='Cowboys Casino App'
              width={526}
              height={370}
              className={s.mobileImage}
              loading="lazy"
            />
          </div>
        </div>
        <div className={s.bottomSection}>
          <div className={s.bottomColumn}>
            <h3 className={s.columnTitle}>Currencies</h3>
            <p className={s.columnText}>
              Reflecting its international customer base, Cowboys Casino accepts several major
              currencies for transactions. Players can conduct transactions in Canadian dollars
              (CAD), US dollars (USD), and Euros (EUR). This flexibility allows players from
              different regions to play and transact in their preferred or local currency,
              simplifying the process and enhancing their gaming experience.
            </p>
          </div>
          <div className={s.bottomColumn}>
            <h3 className={s.columnTitle}>Languages</h3>
            <p className={s.columnText}>
              To accommodate a diverse clientele, Cowboys Casino offers its services in multiple
              languages. The primary language of operation is English, but the casino also provides
              language support for French and Spanish speakers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
