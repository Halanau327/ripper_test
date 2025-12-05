import Image from 'next/image'
import s from './Footer.module.css'
import { Container } from '@/shared/ui/container'

const firstBlockIcons = [
  { src: '/images/footer/first-block/mc.svg', alt: 'Mastercard', width: 54, height: 32 },
  { src: '/images/footer/first-block/visa.svg', alt: 'Visa', width: 96, height: 32 },
  { src: '/images/footer/first-block/nt.svg', alt: 'Neteller', width: 180, height: 32 },
  { src: '/images/footer/first-block/scrl.svg', alt: 'Skrill', width: 96, height: 32 },
  { src: '/images/footer/first-block/btc.svg', alt: 'Bitcoin', width: 32, height: 32 },
  { src: '/images/footer/first-block/ltc.svg', alt: 'Litecoin', width: 32, height: 32 },
  { src: '/images/footer/first-block/ethr.svg', alt: 'Ethereum', width: 32, height: 32 },
]

const secondBlockIcons = [
  {
    src: '/images/footer/second-block/image 21.svg',
    alt: 'GPWA',
    width: 90,
    height: 32,
  },
  {
    src: '/images/footer/second-block/Gamble aware.svg',
    alt: 'GambleAware',
    width: 129,
    height: 17,
  },
  { src: '/images/footer/second-block/Gam Care.svg', alt: 'GamCare', width: 116, height: 32 },
  {
    src: '/images/footer/second-block/gamb therapy.svg',
    alt: 'Gambling Therapy',
    width: 78,
    height: 28,
  },
  { src: '/images/footer/second-block/gamban.svg', alt: 'Gamban', width: 108, height: 32 },
]

const thirdBlockIcons = [
  { src: '/images/footer/third-block/btbl.svg', alt: 'BTBL', width: 200, height: 32 },
  { src: '/images/footer/third-block/itechlabs.svg', alt: 'iTech Labs', width: 32, height: 32 },
  {
    src: '/images/footer/third-block/Group 522.svg',
    alt: 'Licensed & Regulated',
    width: 108,
    height: 32,
  },
]

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.topStrip}></div>
      <div className={s.footerBottom}>
        <Container>
          <div className={s.footerContent}>
            <div className={s.firstRow}>
              <div className={s.logoSection}>
                <a href='#top'>
                  <Image
                    src='/images/ripper-casino-logo.svg'
                    alt='Ripper Casino'
                    width={97}
                    height={53}
                    className={s.logo}
                  />
                </a>
              </div>
              <div className={s.firstBlockRow}>
                {firstBlockIcons.map(icon => (
                  <Image
                    key={icon.src}
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={s.iconImage}
                    loading='lazy'
                  />
                ))}
              </div>
            </div>

            <div className={s.iconsRow}>
              <div className={s.iconGroup}>
                {secondBlockIcons.map(icon => (
                  <Image
                    key={icon.src}
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={s.iconImage}
                    loading='lazy'
                  />
                ))}
              </div>
            </div>

            <div className={s.iconsRow}>
              <div className={s.iconGroup}>
                {thirdBlockIcons.map(icon => (
                  <Image
                    key={icon.src}
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={s.iconImage}
                    loading='lazy'
                  />
                ))}
              </div>
            </div>

            <div className={s.iconsRow}>
              <p className={s.copyrightText}>
                <span className={s.ageRestriction}>18+</span> Copyright © {new Date().getFullYear()} Ripper Casino
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
