import { API_BASE_URL, IMAGE_BASE_URLS } from '@/shared/config/constants'

export const getWebsiteUrl = (siteId: number) => `${API_BASE_URL}/get-website/${siteId}`

export const getGamesUrl = (type: 'gambling' | 'betting') => `${API_BASE_URL}/get-games/${type}`

export const getOfferImageUrl = (image: string) => `${IMAGE_BASE_URLS.offers}${image}`

export const getGameImageUrl = (image: string) => `${IMAGE_BASE_URLS.games}${image}`
