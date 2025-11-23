import s from './Support.module.css'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'

export const Support = () => {
  return (
    <section className={s.supportSection}>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.leftContent}>
            <h2 className={s.title}>
              Cowboys Casino Girls
              <br />
              Support
            </h2>
            <p className={s.description}>
              Cowboys Casino prides itself on providing exceptional customer support to ensure a
              pleasant gaming experience for all its visitors. Support is available 24/7 via
              multiple channels, including live chat, email, and telephone. The live chat feature is
              especially popular as it provides instant assistance for urgent inquiries.
            </p>
          </div>
          <div className={s.rightContent}>
            <Image
              src='/images/support-form-image.png'
              alt='Support Form'
              width={475}
              height={294}
              className={s.formImage}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
