import s from './TopGames.module.css'
import { Container } from '@/shared/ui/container'
import { GamesResponse } from '@/shared/types/types'
import Image from 'next/image'
import { getGameImageUrl } from '@/shared/lib/api'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'

type Props = {
  games?: GamesResponse
  offerId?: number
}

export const TopGames = ({ games, offerId }: Props) => {
  return (
    <section className={s.topGamesSection}>
      <Container>
        <h2 className={s.title}>TOP GAMES</h2>
        <div className={s.gamesContainer}>
          {games?.map(game => (
            <Link
              key={game.id}
              href={offerId ? `/casino/${offerId}` : ''}
              target='_blank'
              className={s.gameCard}
            >
              <Image
                src={getGameImageUrl(game.image)}
                alt={game.name}
                width={260}
                height={142}
                className={s.gameImage}
              />
              <div className={s.gameOverlay}>
                <h3 className={s.gameName}>{game.name}</h3>
                <div className={s.playButtonWrapper}>
                  <div className={s.playButtonCircle}>
                    <span className={s.playIcon}>▶</span>
                  </div>
                  <span className={s.playButtonText}>Play Now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={s.topGamesButtonContainer}>
          <Button
            className={s.topGamesButton}
            href={`/casino/${offerId}`}
            target={'_blank'}
            variant='yellow'
          >
            ALL GAMES
          </Button>
        </div>
      </Container>
    </section>
  )
}
