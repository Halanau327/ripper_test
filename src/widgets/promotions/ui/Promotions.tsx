import s from './Promotions.module.css'
import { Container } from '@/shared/ui/container'

export const Promotions = () => {
  return (
    <section className={s.promotionsSection}>
      <Container>
        <h2 className={s.title}>Cowboys Casino Bonuses and Promotions</h2>
        <p className={s.introText}>
          Cowboys Casino in Calgary is known for enriching the gaming experience of its visitors
          through an array of enticing bonuses and promotions. These offers are designed to reward
          regular patrons and attract new ones, making each visit potentially more rewarding.
          Whether it&apos;s through additional play credits, cash prizes, or special event access,
          Cowboys Casino ensures that both new and returning customers have plenty of reasons to
          play.
        </p>
        <div className={s.columnsContainer}>
          <div className={s.column}>
            <div className={s.gameSection}>
              <h3 className={s.sectionTitle}>Welcome Bonus</h3>
              <p className={s.sectionText}>
                At Cowboys Casino, the Welcome Bonus serves as a warm introduction for new members,
                offering them free play credits immediately after they register. Typically,
                newcomers receive around C$20 in free play credits when they sign up for a casino
                membership card. This initial bonus is crafted to give new visitors a taste of the
                diverse gaming options available without any initial financial risk. It&apos;s an
                effective way to encourage guests to try out different games, potentially finding
                their favorites which they might return to play again. This incentive not only
                boosts the casino&apos;s visitor numbers but also enhances the overall guest
                experience right from the start.
              </p>
            </div>
            <div className={s.gameSection}>
              <h3 className={s.sectionTitle}>Jackpot Bonuses</h3>
              <p className={s.sectionText}>
                Cowboys Casino enhances the excitement on the gaming floor with its progressive
                jackpot bonuses, available on select slot machines and table games. These jackpots
                start at a base amount, like C$10,000, and gradually increase with each play,
                attracting more participants as the potential prize grows. It&apos;s not uncommon
                for these jackpots to exceed C$100,000, creating a buzz on the casino floor and
                drawing in crowds hoping to hit the big win.
              </p>
            </div>
            <div className={s.gameSection}>
              <h3 className={s.sectionTitle}>Birthday Bonuses and Cowboys Casino Tickets</h3>
              <p className={s.sectionText}>
                Celebrating a birthday at Cowboys Casino is made special with the Birthday Bonus,
                which often includes perks like free play credits or discounts on dining. Typically,
                a birthday celebrant might receive C$25 in free play credits and a 20% discount at
                one of the casino&apos;s dining establishments. This personalized touch not only
                makes the birthday guest feel valued but also encourages celebratory gatherings at
                the casino, potentially increasing foot traffic and patron spending on these
                occasions.
              </p>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.gameSection}>
              <h3 className={s.sectionTitle}>Loyalty Rewards</h3>
              <p className={s.sectionText}>
                The Loyalty Rewards program at Casino Cowboys is designed to acknowledge and reward
                the regular patrons for their continued engagement. Points in this program are
                accumulated based on the frequency of visits and the amount of money wagered. These
                points are quite versatile, redeemable for a variety of rewards including free meals
                at the restaurants in Cowboys Casino, complimentary hotel stays, or extra casino
                credits. For instance, spending C$100 might earn a player 10 loyalty points, which
                could then be exchanged for benefits that enhance their experience and encourage
                further play.
              </p>
            </div>
            <div className={s.column}>
              <div className={s.gameSection}>
                <h3 className={s.sectionTitle}>Daily and Weekly Promotions</h3>
                <p className={s.sectionText}>
                  To maintain a dynamic and engaging atmosphere, Cowboys Casino organizes a variety
                  of daily and weekly promotions. These promotions range from double points days,
                  where players earn twice the loyalty points on their card, to special draw nights
                  offering additional chances to win cash or prizes. For example, every Tuesday
                  might feature a promotional draw where participants can win a prize of C$500.
                  These regularly scheduled events keep the gameplay fresh and exciting, providing
                  regular patrons and casual visitors alike with numerous opportunities to benefit
                  simply by choosing to play on specific days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
