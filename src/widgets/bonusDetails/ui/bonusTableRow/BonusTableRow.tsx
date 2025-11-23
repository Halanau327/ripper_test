import s from './BonusTableRow.module.css'
import { OfferItem } from '@/shared/types/offers'
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
  const { rate, free_spins, welcome_bonus } = bonuses

  return (
    <>
      <tr className={s.tableRow}>
        <td className={s.tableCell}>
          <div className={s.casinoCell}>
            <Image
              src={getOfferImageUrl(logo)}
              alt={`${type} in ${name}`}
              width={120}
              height={48}
              className={s.casinoLogo}
            />
          </div>
        </td>
        <td className={s.tableCell}>
          <span className={s.bonusType}>{welcome_bonus || 'Welcome Bonus'}</span>
        </td>
        <td className={s.tableCell}>
          <span className={s.rate}>{rate}</span>
        </td>
        <td className={s.tableCell}>
          <span className={s.freeSpins}>{free_spins}</span>
        </td>
        <td className={s.tableCell}>
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
        </td>
        <td className={s.tableCell}>
          <Button
            variant='blue'
            href={`/casino/${id}`}
            target='_blank'
            className={s.getBonusButton}
          >
            GET THE BONUS
          </Button>
        </td>
      </tr>
      {isExpanded && (
        <tr className={s.accordionRow}>
          <td className={s.accordionCell}>
            <BonusAccordion.Labels />
          </td>
          <td colSpan={5} className={s.accordionCell}>
            <BonusAccordion.Values offer={offer} />
          </td>
        </tr>
      )}
    </>
  )
}
