import { Paytone_One, Roboto } from 'next/font/google'

export const paytoneOne = Paytone_One({
  variable: '--font-paytone-one',
  weight: '400',
  subsets: ['latin'],
})

export const roboto = Roboto({
  variable: '--font-roboto',
  weight: '500',
  subsets: ['latin'],
})

export const fontVariables = `${paytoneOne.variable} ${roboto.variable}`
