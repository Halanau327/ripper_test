import s from './TopCasinos.module.css'
import { Container } from '@/shared/ui/container/Container'
import { CardItem } from '@/shared/ui/card/Card'
import { mainResponse } from '@/shared/types/types'
import { Button } from '@/shared/ui/button'

type Props = {
  country_name?: string
  fullData?: mainResponse
}

export const TopCasinos = ({ country_name, fullData }: Props) => {
  return (
    <section className={s.topCasinosSection}>
      <Container>
        <h2 className={s.topCasinosTitle}>
          {country_name ? `Top casinos ${country_name}` : 'Top casinos'}
        </h2>
        <div className={s.topCasinosGridContainer}>
          {fullData?.offers.map(offer => (
            <CardItem
              key={offer.id}
              id={offer.id}
              name={offer.name}
              logo={offer.logo}
              bonus={offer.bonuses.welcome_bonus}
              offerType={offer.type}
            />
          ))}
        </div>
        <div className={s.allCasinoButtonContainer}>
          <Button className={s.allCasinoButton} variant='yellow'>
            All Casino
          </Button>
        </div>
      </Container>
    </section>
  )
}
