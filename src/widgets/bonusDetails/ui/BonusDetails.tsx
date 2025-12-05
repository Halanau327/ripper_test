'use client'

import s from './BonusDetails.module.css'
import { Container } from '@/shared/ui/container'
import { OfferItem } from '@/shared/types/types'
import { useMemo, useState } from 'react'
import { BonusTableRow } from '@/widgets/bonusDetails/ui/bonusTableRow'
import { Button } from '@/shared/ui/button'
import { shuffleArray } from '@/shared/lib'

type Props = {
  offers: OfferItem[]
}

export const BonusDetails = ({ offers }: Props) => {
  const [shuffledOffers, setShuffledOffers] = useState<OfferItem[]>(offers)
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const displayedOffers = useMemo(() => shuffledOffers.slice(0, 6), [shuffledOffers])

  const handleToggleAccordion = (id: number) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleRefresh = () => {
    const shuffled = shuffleArray(offers)
    setShuffledOffers(shuffled)
    setExpandedIds(new Set())
  }

  return (
    <section className={s.bonusDetailsSection}>
      <Container>
        <h2 className={s.title}>BONUS DETAILS</h2>

        <div className={s.tableContainer}>
          <div className={s.tableHeader}>
            <div className={`${s.headerCell} ${s.casinoColumn}`}>Casino</div>
            <div className={`${s.headerCell} ${s.bonusColumn}`}>Bonuses</div>
            <div className={`${s.headerCell} ${s.rateColumn}`}>Rate</div>
            <div className={`${s.headerCell} ${s.freeSpinsColumn}`}>
              Free
              <br />
              Spins
            </div>
            <div className={`${s.headerCell} ${s.moreInfoColumn}`}>
              More
              <br />
              info
            </div>
            <div className={`${s.headerCell} ${s.getColumn}`}>Get</div>
          </div>
          <div className={s.tableBody}>
            {displayedOffers.map(offer => (
              <BonusTableRow
                key={offer.id}
                offer={offer}
                isExpanded={expandedIds.has(offer.id)}
                onToggle={() => handleToggleAccordion(offer.id)}
              />
            ))}
          </div>
        </div>

        <div className={s.refreshButtonContainer}>
          <Button variant='yellow' onClick={handleRefresh} className={s.refreshButton}>
            REFRESH
          </Button>
        </div>
      </Container>
    </section>
  )
}
