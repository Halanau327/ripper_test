import s from './page.module.css'
import { Header } from '@/widgets/header/ui'
import { getWebsiteUrl } from '@/shared/lib/api'
import { SITE_ID } from '@/shared/config/constants'

export default async function Home() {
  let firstOfferId: number | undefined

  try {
    const res = await fetch(getWebsiteUrl(SITE_ID), { cache: 'no-store' })

    if (res.ok) {
      const data = await res.json()
      firstOfferId = data.offers?.[0]?.id
    }
  } catch {
    throw new Error('Something went wrong')
  }

  return (
    <div className={s.page}>
      <Header offerId={firstOfferId} />

      <main className={s.main}></main>
    </div>
  )
}
