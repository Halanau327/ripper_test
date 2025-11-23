import s from './page.module.css'
import { TopCasinos } from '@/widgets/topCasinos/ui'
import { mainResponse, OfferItem, WebsiteItem } from '@/shared/types/offers'
import { getWebsiteUrl } from '@/shared/lib'
import { SITE_ID } from '@/shared/config'
import { Header } from '@/widgets/header/ui'
import { WelcomeScreen } from '@/widgets/welcomeScreen/ui'
import { BonusDetails } from '@/widgets/bonusDetails/ui'

export default async function Home() {
  let offer: OfferItem | undefined
  let website: WebsiteItem | undefined
  let fullData: mainResponse | undefined

  try {
    const res = await fetch(getWebsiteUrl(SITE_ID), { cache: 'no-store' })

    if (res.ok) {
      const data: mainResponse = await res.json()
      console.log(data)
      offer = data.offers[0]
      fullData = data
      website = data.website
      console.log(offer)
    }
  } catch (e) {
    console.error(e)
  }

  return (
    <div className={s.page}>
      <Header offerId={offer?.id} />

      {offer && <WelcomeScreen offerId={offer.id} welcome_bonus={offer.bonuses.welcome_bonus} />}

      <TopCasinos country_name={website?.country_name} fullData={fullData} />
      <BonusDetails offers={fullData?.offers || []}/>

      <main className={s.main}></main>
    </div>
  )
}
