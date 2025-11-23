import type { Metadata } from 'next'
import './globals.css'
import { fontVariables } from '@/shared/config'

export const metadata: Metadata = {
  title: 'Cowboys Online – Casino & Sports Betting in One Place',
  description:
    'Discover Cowboys Casino in Calgary, Canada. Play casino games, sports betting, slots, and poker. Exclusive welcome bonuses, free spins, and 24/7 support.',
  keywords: 'Cowboys Casino, online casino, sports betting, Calgary casino, slots, poker, casino games',
  openGraph: {
    title: 'Cowboys Online – Casino & Sports Betting in One Place',
    description:
      'Discover Cowboys Casino in Calgary, Canada. Play casino games, sports betting, slots, and poker.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru' className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
