import s from './DallasCowboyCasino.module.css'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'


export const DallasCowboyCasino = () => {
  return (
    <section className={s.dallasCasinoSection}>
      <Container>
        <h1 className={s.title}>DALLAS COWBOYS CASINO</h1>
        <div className={s.mainContainer}>
          <article className={s.leftSide}>
            <p className={s.introText}>
              Discover the thrill of gaming at Cowboys Casino in Calgary, Canada. Dive into exciting
              games and vibrant entertainment. Join us for an unforgettable experience!
            </p>

            <ul className={s.benefitsList}>
              <li className={s.benefitItem}>C$20 in free play credits</li>
              <li className={s.benefitItem}>20% discount of birthday day</li>
              <li className={s.benefitItem}>loyalty program available</li>
            </ul>

            <p className={s.descriptionText}>
              Cowboys Casino, located in the heart of Calgary, Alberta, is a vibrant and bustling
              entertainment hub that offers a diverse range of gaming options. Renowned for its
              lively atmosphere and extensive gaming floors, this casino caters to both seasoned
              gamblers and newcomers. With a variety of table games, slots, and poker rooms, Cowboys
              Casino reviews are designed to deliver a thrilling experience. Additionally, it
              features dining venues and hosts various live events, making it a go-to destination
              for entertainment seekers in the region.
            </p>
          </article>

          <figure className={s.rightSide}>
            <Image
              src='/images/dallas-laptop.png'
              alt='Dallas Cowboys Casino'
              width={602}
              height={359}
              className={s.laptopImage}
            />
          </figure>
        </div>
      </Container>
    </section>
  )
}
