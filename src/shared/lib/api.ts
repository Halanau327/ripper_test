import { API_BASE_URL, IMAGE_BASE_URLS } from '@/shared/config/constants'
import { mainResponse, GamesResponse } from '@/shared/types/types'

export const getWebsiteUrl = (siteId: number) => `${API_BASE_URL}/get-website/${siteId}`

export const getGamesUrl = (type: 'gambling' | 'betting') => `${API_BASE_URL}/get-games/${type}`

export const getOfferImageUrl = (image: string) => `${IMAGE_BASE_URLS.offers}${image}`

export const getGameImageUrl = (image: string) => `${IMAGE_BASE_URLS.games}${image}`

export const fetchWebsiteData = async (siteId: number): Promise<mainResponse | undefined> => {
  try {
    const response = await fetch(getWebsiteUrl(siteId), { cache: 'no-store' })
    if (!response.ok) return
    return await response.json()
  } catch (e) {
    console.error('Failed to fetch website data:', e)
  }
}

export const fetchGamesData = async (type: 'gambling' | 'betting'): Promise<GamesResponse | undefined> => {
  try {
    const response = await fetch(getGamesUrl(type), { cache: 'no-store' })
    if (!response.ok) return
    return await response.json()
  } catch (e) {
    console.error('Failed to fetch games data:', e)
  }
}
