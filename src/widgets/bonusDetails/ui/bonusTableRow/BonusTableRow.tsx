'use client'

import s from './BonusTableRow.module.css'
import { OfferItem } from '@/shared/types/types'
import Image from 'next/image'
import { getOfferImageUrl } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { BonusAccordion } from '@/widgets/bonusDetails/ui/bonusAccordion'

type Props = {
  offer: OfferItem
  isExpanded: boolean
  onToggle: () => void
}

export const BonusTableRow = ({ offer, isExpanded, onToggle }: Props) => {
  const { id, name, logo, bonuses, type } = offer
  const { rate, free_spins } = bonuses

  return (
    <div className={s.tableRowWrapper}>
      <div className={s.tableRow}>
        <div className={`${s.tableCell} ${s.casinoColumn}`}>
          <div className={s.casinoCell}>
            <Image
              src={getOfferImageUrl(logo)}
              alt={`${type} in ${name}`}
              width={120}
              height={48}
              className={s.casinoLogo}
            />
          </div>
        </div>
        <div className={`${s.tableCell} ${s.bonusColumn}`}>
          <span className={s.bonusType}>{'Welcome Bonus'}</span>
        </div>
        <div className={`${s.tableCell} ${s.rateColumn} ${!rate ? s.empty : ''}`}>
          <span className={s.rate}>{rate || ''}</span>
        </div>
        <div className={`${s.tableCell} ${s.freeSpinsColumn} ${!free_spins ? s.empty : ''}`}>
          <span className={s.freeSpins}>{free_spins || ''}</span>
        </div>
        <div className={`${s.tableCell} ${s.moreInfoColumn}`}>
          <Button
            className={s.infoButton}
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-label='More info'
            variant='none'
          >
            <Image
              src='/images/more-info-icon.svg'
              alt='More info'
              width={20}
              height={20}
              className={s.infoIcon}
            />
          </Button>
        </div>
        <div className={`${s.tableCell} ${s.getColumn}`}>
          <Button
            variant='blue'
            href={`/casino/${id}`}
            target='_blank'
            className={s.getBonusButton}
          >
            GET THE BONUS
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className={s.accordionRow}>
          <div className={s.accordionCell}>
            <BonusAccordion.Labels />
          </div>
          <div className={s.accordionCell}>
            <BonusAccordion.Values offer={offer} />
          </div>
        </div>
      )}
    </div>
  )
}
