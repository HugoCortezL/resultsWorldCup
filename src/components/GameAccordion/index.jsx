import { GameAccordionContainer, Header, GamesContent } from './styles'
import { BsChevronUp } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import GroupMatches from '../GroupMatches'

export default function GameAccordion({ data }) {
    const [openGames, setOpenGames] = useState(false)
    const [height, setHeight] = useState("0px")


    const countGames = (groups) => {
        let height = 0;
        for (let i = 0; i < groups.length; i++) {
            height += 37;
            for (let j = 0; j < groups[i].games.length; j++) {
                height += 50;
            }
        }
        const totalHeight = height + "px"
        return totalHeight
    }


    useEffect(() => {
        setHeight(countGames(data.groups))
    }, [])

    return (
        <GameAccordionContainer>
            <Header onClick={() => setOpenGames(!openGames)} isOpen={openGames}>
                {data.date}
                <div className="icon">
                    <BsChevronUp size={20} />
                </div>
            </Header>
            <GamesContent height={height} className={openGames ? "" : "inactive"}>
                {
                    data.groups.map(group => {
                        const key = Math.random()
                        return (
                            <GroupMatches key={key} group={group} />
                        )
                    })
                }
            </GamesContent>
        </GameAccordionContainer>
    )
}