import s from './BonusAccordion.module.css'
import { OfferItem } from '@/shared/types/offers'

type Props = {
  offer: OfferItem
}

const Labels = () => {
  return (
    <div className={s.labelsContainer}>
      <div className={s.detailRow}>
        <span className={s.detailLabel}>Maximum amount:</span>
      </div>
      <div className={s.detailRow}>
        <span className={s.detailLabel}>Wager:</span>
      </div>
      <div className={s.detailRow}>
        <span className={s.detailLabel}>Bonus Code:</span>
      </div>
    </div>
  )
}

const Values = ({ offer }: Props) => {
  const { bonuses, wager, bonus_code } = offer
  const { amount } = bonuses

  return (
    <div className={s.valuesContainer}>
      <div className={s.detailRow}>
        <span className={s.detailValue}>{amount || '-'}</span>
      </div>
      <div className={s.detailRow}>
        <span className={s.detailValue}>{wager ? `x${wager}` : '-'}</span>
      </div>
      <div className={s.detailRow}>
        <span className={s.detailValue}>{bonus_code || '-'}</span>
      </div>
    </div>
  )
}

export const BonusAccordion = {
  Labels,
  Values,
}
