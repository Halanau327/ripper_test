export type BonusInfo = {
  amount: string
  country: string
  free_spins: string
  rate: string
  welcome_bonus: string
}

export type Offer = {
  active: number
  bonus_code: string | null
  bonuses: BonusInfo
  countries: string[]
  country_code: string | null
  created_at: string
  domain_id: number
  domain_url: string
  id: number
  link: string
  logo: string
  logo_light?: string | null
  name: string
  position: number | null
  sub2: string
  type: string
  updated_at: string
  wager: string | null
  website_id: number | null
}

export type Website = {
  android_app: string | null
  country_code: string
  country_name: string
  id: number
  ios_app: string | null
  link: string
  type: string
}

export type OffersResponse = {
  offers: Offer[]
  website: Website
}
