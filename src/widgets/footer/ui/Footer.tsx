import s from './Footer.module.css'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.topStrip}></div>
      <div className={s.footerBottom}>
        <Container>
          <div className={s.footerContent}>
          <div className={s.firstRow}>
            <div className={s.logoSection}>
              <Image
                src='/images/ripper-casino-logo.svg'
                alt='Ripper Casino'
                width={97}
                height={53}
                className={s.logo}
              />
            </div>
            <div className={s.firstBlockRow}>
              <Image
                src='/images/first-block-footer.svg'
                alt='Payment methods'
                width={800}
                height={32}
                className={s.rowImage}
              />
            </div>
          </div>

          <div className={s.iconsRow}>
            <Image
              src='/images/second-block-footer.svg'
              alt='Responsible gambling organizations'
              width={585}
              height={32}
              className={s.rowImage}
            />
          </div>

          <div className={s.iconsRow}>
            <Image
              src='/images/third-block-footer.svg'
              alt='Regulatory bodies'
              width={372}
              height={32}
              className={s.rowImage}
            />
          </div>

          <div className={s.iconsRow}>
            <Image
              src='/images/copyright-icon.svg'
              alt='Copyright'
              width={364}
              height={40}
              className={s.rowImage}
            />
          </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
