import s from './page.module.css'
import { fetchGamesData, fetchWebsiteData } from '@/shared/lib'
import { SITE_ID } from '@/shared/config'
import { Header } from '@/widgets/header/ui'
import { WelcomeScreen } from '@/widgets/welcomeScreen/ui'
import { TopCasinos } from '@/widgets/topCasinos/ui'
import { BonusDetails } from '@/widgets/bonusDetails/ui'
import { DallasCowboyCasino } from '@/widgets/dallasCowboysCasino/ui'
import { TopGames } from '@/widgets/topGames/ui'
import { CowboyCasinoAdvantages } from '@/widgets/cowboyCasinoAdvantages/ui'
import { LoginBlock } from '@/widgets/loginBlock/ui'
import { Zen8App } from '@/widgets/zen8App/ui'
import { Faq } from '@/widgets/faq/ui'
import { GamesAvailable } from '@/widgets/gamesAvailable/ui'
import { Support } from '@/widgets/support/ui'
import { Promotions } from '@/widgets/promotions/ui'
import { Footer } from '@/widgets/footer/ui'
import { MainH1Section } from '@/widgets/mainH1Section/mainH1Section'

export default async function Home() {
  const offersData = await fetchWebsiteData(SITE_ID)
  const offer = offersData?.offers[0]
  const website = offersData?.website

  const gamesData = await fetchGamesData('gambling')

  return (
    <>
      <Header offerId={offer?.id} />

      <main className={s.main}>
        {offer && <WelcomeScreen offerId={offer.id} welcome_bonus={offer.bonuses.welcome_bonus} />}
        <MainH1Section />
        <TopCasinos country_name={website?.country_name} fullData={offersData} />
        <BonusDetails offers={offersData?.offers || []} />
        <DallasCowboyCasino />
        <TopGames games={gamesData} offerId={offer?.id} />
        <CowboyCasinoAdvantages />
        <LoginBlock />
        <Zen8App offerId={offer?.id} />
        <Faq />
        <GamesAvailable />
        <Support />
        <Promotions />
      </main>

      <Footer />
    </>
  )
}
