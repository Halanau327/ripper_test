import s from './mainH1Section.module.css'
import { Container } from '@/shared/ui/container'

export const MainH1Section = () => {
  return (
    <section className={s.mainSection}>
      <Container>
        <div className={s.mainTitleContainer}>
          <h1 className={s.mainTitle}>Cowboys Online – Casino & Sports Betting in One Place</h1>
        </div>
      </Container>
    </section>
  )
}