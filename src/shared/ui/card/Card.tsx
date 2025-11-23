import s from './Card.module.css'
import Image from 'next/image'
import { getOfferImageUrl } from '@/shared/lib/api'
import { Button } from '@/shared/ui/button'

type CardProps = {
  logo: string
  bonus: string
  name: string
  offerType?: string
  id?: number
}

export const CardItem = ({ logo, bonus, name, offerType, id }: CardProps) => {
  const altText = offerType ? `${offerType} in ${name}` : name

  return (
    <div className={s.cardItemContainer}>
      <Image src={getOfferImageUrl(logo)} alt={altText} width={190} height={76} />
      <h3 className={s.cardItemName}>{name}</h3>
      <span className={s.cardItemLabel}>Welcome Bonus</span>
      <p className={s.cardItemBonus}>{bonus}</p>
      <Button
        className={s.cardItemButton}
        variant='blue'
        href={id ? `/casino/${id}` : undefined}
        target={'_blank'}
      >
        Claim Bonus
      </Button>
    </div>
  )
}
