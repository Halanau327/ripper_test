'use client'

import s from './BonusDetails.module.css'
import { Container } from '@/shared/ui/container'
import { OfferItem } from '@/shared/types/types'
import { useMemo, useState } from 'react'
import { BonusTableRow } from '@/widgets/bonusDetails/ui/bonusTableRow'
import { Button } from '@/shared/ui/button'

type Props = {
  offers: OfferItem[]
}

export const BonusDetails = ({ offers }: Props) => {
  const [shuffledOffers, setShuffledOffers] = useState<OfferItem[]>(offers.slice(0, 6))
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const displayedOffers = useMemo(() => shuffledOffers.slice(0, 6), [shuffledOffers])

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

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
          <table className={s.table}>
            <thead>
              <tr className={s.tableHeader}>
                <th className={s.headerCell}>Casino</th>
                <th className={s.headerCell}>Bonuses</th>
                <th className={s.headerCell}>Rate</th>
                <th className={s.headerCell}>Free Spins</th>
                <th className={s.headerCell}>More info</th>
                <th className={s.headerCell}>Get</th>
              </tr>
            </thead>
            <tbody>
              {displayedOffers.map(offer => (
                <BonusTableRow
                  key={offer.id}
                  offer={offer}
                  isExpanded={expandedIds.has(offer.id)}
                  onToggle={() => handleToggleAccordion(offer.id)}
                />
              ))}
            </tbody>
          </table>
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
