import s from './WelcomeScreen.module.css'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container/Container'

type Props = {
  offerId?: number
  welcome_bonus: string
}

export const WelcomeScreen = ({ offerId, welcome_bonus }: Props) => {
  return (
    <section className={s.welcomeScreenSection}>
      <Container className={s.welcomeScreenContainer}>
        <div className={s.leftContainer}>
          <h2 className={s.welcomeBonus}>
            {welcome_bonus ? `Exclusive welcome offer of  ${welcome_bonus}` : ''}
          </h2>

          <Button
            href={`/casino/${offerId}`}
            target='_blank'
            variant='yellow'
            className={s.claimButton}
          >
            Claim bonus
          </Button>
        </div>
        <div className={s.rightContainer}></div>
      </Container>
      <div className={s.bottomBanner}>
        <Container>
          <div className={s.mainTitleContainer}>
            <h1 className={s.mainTitle}>Cowboys Online – Casino & Sports Betting in One Place</h1>
          </div>
        </Container>
      </div>
    </section>
  )
}
