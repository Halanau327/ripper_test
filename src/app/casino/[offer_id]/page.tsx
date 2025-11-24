'use client'

import s from './page.module.css'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Header } from '@/widgets/header/ui'
import { Footer } from '@/widgets/footer/ui'
import { Loader } from '@/shared/ui/loader'
import { getWebsiteUrl } from '@/shared/lib/api'
import { SITE_ID } from '@/shared/config/constants'

type Offer = {
  id: number
  link: string
}

type WebsiteResponse = {
  offers?: Offer[]
}

export default function CasinoOfferPage() {
  const params = useParams<{ offer_id: string }>()

  const offerId = Number(params.offer_id)

  useEffect(() => {
    const redirectToOffer = async () => {
      try {
        const res = await fetch(getWebsiteUrl(SITE_ID), { cache: 'no-store' })

        if (!res.ok) {
          console.error('API request failed:', res.status, res.statusText)
          return
        }

        const data = (await res.json()) as WebsiteResponse

        let offer = data.offers?.find(offer => offer.id === offerId)

        if (!offer && data.offers && data.offers.length > 0) {
          offer = data.offers[0]
        }

        if (!offer) {
          console.error('No offers available')
          return
        }

        if (!offer.link) {
          console.error(`Offer ${offer.id} has no link`)
          return
        }

        window.location.href = offer.link
      } catch (e) {
        console.error('Error in redirectToOffer:', e)
      }
    }

    redirectToOffer().catch(err => {
      console.error('redirectToOffer failed', err)
    })
  }, [offerId])

  return (
    <div className={s.page}>
      <Header offerId={offerId} />

      <div className={s.loaderWrapper}>
        <Loader centered size='lg' variant='dark' />
      </div>

      <Footer />
    </div>
  )
}
