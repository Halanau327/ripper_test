import s from './CowboyCasinoAdvantages.module.css'
import { Container } from '@/shared/ui/container'

export const CowboyCasinoAdvantages = () => {
  return (
    <section className={s.advantagesSection}>
      <Container>
        <h2 className={s.title}>Cowboys Casino Advantages</h2>
        <p className={s.introText}>
          Cowboys Casino, strategically situated in the heart of Calgary, is a premier gaming and
          entertainment destination that offers a plethora of benefits to its visitors. Known for
          its vibrant atmosphere and exceptional service, the casino stands out as a favorite among
          locals and tourists alike. Whether you're there for the games or the live entertainment,
          Cowboys Casino promises a memorable experience with its well-rounded offerings.
        </p>
        <div className={s.columnsContainer}>
          <div className={s.column}>
            <h3 className={s.columnTitle}>Advantages</h3>
            <ul className={s.list}>
              <li className={s.listItem}>Diverse gaming options</li>
              <li className={s.listItem}>Frequent promotions</li>
              <li className={s.listItem}>Multiple dining venues</li>
              <li className={s.listItem}>Live entertainment and events</li>
              <li className={s.listItem}>Central location</li>
            </ul>
          </div>
          <div className={s.column}>
            <h3 className={s.columnTitle}>Disadvantages</h3>
            <ul className={s.list}>
              <li className={s.listItem}>Potentially crowded</li>
              <li className={s.listItem}>Limited parking</li>
              <li className={s.listItem}>Noise level can be high</li>
              <li className={s.listItem}>Occasional wait times</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
