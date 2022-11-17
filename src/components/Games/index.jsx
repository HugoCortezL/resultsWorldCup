import { GamesContainer } from './styles'
import games from '../../api/games.json'
import GameAccordion from '../GameAccordion'

export default function Games() {
    return (
        <GamesContainer>
            {
                games.map(game => {
                    return (
                        <GameAccordion data={game} key={game.date} />
                    )
                })
            }
        </GamesContainer>
    )
}