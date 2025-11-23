import s from './LoginBlock.module.css'
import { Container } from '@/shared/ui/container'

export const LoginBlock = () => {
  return (
    <section className={s.loginBlockSection}>
      <Container>
        <h2 className={s.title}>About Cowboys Casino Login</h2>
        <p className={s.introText}>
          Cowboys Casino is a prominent entertainment venue in Calgary, known for its dynamic gaming
          environment and variety of entertainment options. It houses numerous gaming tables, slot
          machines, and an exclusive poker room that attracts both local and visiting patrons. The
          casino also offers a rich selection of dining and live event experiences, making it a
          comprehensive destination for leisure and entertainment.
        </p>
        <p className={s.introText}>
          For guests looking to enhance their experience, Cowboys Casino provides a streamlined
          login procedure through their website. This system allows patrons to manage their
          accounts, check points and rewards, and receive updates on upcoming Cowboys Casino events
          and promotions. Users can easily register online by entering personal details to create a
          secure account, which can then be used for a variety of services, including advance
          bookings and personalized gaming experiences.
        </p>
        <div className={s.columnsContainer}>
          <div className={s.column}>
            <h3 className={s.columnTitle}>Deposit Methods</h3>
            <p className={s.columnText}>
              At Cowboys Casino, patrons are afforded a variety of convenient deposit methods to
              fund their accounts, ensuring that they can start playing without delay. The casino
              accepts major credit cards like Visa and MasterCard, which are among the most popular
              choices due to their wide accessibility and immediate transaction approval.
              Additionally, direct bank transfers are available, allowing for secure deposits
              straight from personal bank accounts.
            </p>
          </div>
          <div className={s.column}>
            <h3 className={s.columnTitle}>Withdrawal Methods</h3>
            <p className={s.columnText}>
              When it comes to withdrawing winnings, Cowboys Casino hours provide several
              straightforward and efficient options. Similar to deposits, players can choose to
              receive their funds through direct bank transfers, which safely move winnings directly
              into their personal bank accounts, usually within a few business days. Credit cards
              such as Visa and MasterCard are also supported for withdrawals, offering a convenient
              way to credit funds back to the same card used for deposits.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
