import s from './page.module.css'
import { Header } from '@/widgets/header/ui'
import { getWebsiteUrl } from '@/shared/lib/api'
import { SITE_ID } from '@/shared/config/constants'
import { WelcomeScreen } from '@/widgets/welcomeScreen/ui'
import { Offer, OffersResponse } from '@/shared/types/offers'

export default async function Home() {
  let firstOffer: Offer | undefined

  try {
    const res = await fetch(getWebsiteUrl(SITE_ID), { cache: 'no-store' })

    if (res.ok) {
      const data: OffersResponse = await res.json()
      firstOffer = data.offers[0]
      console.log(firstOffer)
    }
  } catch (e) {
    console.error(e)
  }

  return (
    <div className={s.page}>
      <Header offerId={firstOffer?.id} />

      {firstOffer && (
        <WelcomeScreen
          offerId={firstOffer?.id}
          welcome_bonus={firstOffer.bonuses.welcome_bonus}
        />
      )}

      <main className={s.main}></main>
    </div>
  )
}
