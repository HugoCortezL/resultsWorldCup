import { HomeContainer, Header, TabsContainer } from './styles'
import { useState } from 'react'
import Games from '../../components/Games'
import Table from '../../components/Table'
import logo from '../../assets/images/logo.png'

export default function Home() {
    const [tabToShow, setTabToShow] = useState("games")

    return (
        <HomeContainer>
            <Header>
                Resultados da Copa
            </Header>
            <div className="logo-container">
                <img src={logo} alt="logo da copa do mundo" className="logo" />
            </div>
            <TabsContainer>
                <div className={tabToShow == "games" ? "active" : ""} onClick={() => setTabToShow("games")}>
                    Jogos
                </div>
                <div className={tabToShow == "table" ? "active" : ""} onClick={() => setTabToShow("table")}>
                    Tabela
                </div>
            </TabsContainer>

            {
                tabToShow == "games" ?
                    <Games /> :
                    <Table />
            }
        </HomeContainer>
    )
}