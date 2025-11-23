'use client'

import s from './TopCasinos.module.css'
import { Container } from '@/shared/ui/container/Container'
import { CardItem } from '@/shared/ui/card/Card'
import { Button } from '@/shared/ui/button'
import { mainResponse } from '@/shared/types/types'
import { useState } from 'react'
import { INITIAL_COUNT } from '@/shared/config'

type Props = {
  country_name?: string
  fullData: mainResponse | undefined
}

export const TopCasinos = ({ country_name, fullData }: Props) => {
  const [showAll, setShowAll] = useState(false)

  const offers = fullData?.offers || []
  const displayedOffers = showAll ? offers : offers.slice(0, INITIAL_COUNT)

  return (
    <section className={s.topCasinosSection}>
      <Container>
        <h2 className={s.topCasinosTitle}>
          {country_name ? `Top casinos ${country_name}` : 'Top casinos'}
        </h2>
        <div className={s.topCasinosGridContainer}>
          {displayedOffers.map(offer => (
            <CardItem
              key={offer.id}
              id={offer.id}
              name={offer?.name}
              logo={offer?.logo}
              bonus={offer?.bonuses?.welcome_bonus}
              offerType={offer?.type}
            />
          ))}
        </div>
        <div className={s.allCasinoButtonContainer}>
          <Button
            className={`${s.allCasinoButton} ${showAll ? s.allCasinoButtonHidden : ''}`}
            variant='yellow'
            onClick={() => setShowAll(true)}
          >
            All Casino
          </Button>
        </div>
      </Container>
    </section>
  )
}
