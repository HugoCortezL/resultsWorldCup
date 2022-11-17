import { TableAccordionContainer, Header, GamesContent } from './styles'
import { BsChevronUp } from 'react-icons/bs'
import { useState } from 'react'
import TableGroup from '../TableGroup'

export default function TableAccordion({ data }) {
    const [openGames, setOpenGames] = useState(false)


    return (
        <TableAccordionContainer>
            <Header onClick={() => setOpenGames(!openGames)} isOpen={openGames}>
                Grupo {data.group}
                <div className="icon">
                    <BsChevronUp size={20} />
                </div>
            </Header>
            <GamesContent className={openGames ? "" : "inactive"}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Equipe
                            </th>
                            <th title="Pontos">
                                P
                            </th>
                            <th title="Vitorias">
                                V
                            </th>
                            <th title="Empates">
                                E
                            </th>
                            <th title="Derrotas">
                                D
                            </th>
                            <th title="Saldo de gols">
                                SG
                            </th>
                            <th title="Partidas jogadas">
                                PG
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.teams.map((team, index) => {
                                const key = Math.random()
                                return (
                                    <TableGroup key={key} team={team} index={index + 1} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </GamesContent>
        </TableAccordionContainer>
    )
}