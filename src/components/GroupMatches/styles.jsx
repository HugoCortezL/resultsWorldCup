import styled from 'styled-components'

export const GroupMatchesContainer = styled.div`
    margin: 10px 20px;
    p.title{
        font-size: 20px;
        margin-bottom: -5px;
    }
`

export const MatchCard = styled.div`
    height: 40px;
    background-color: #F4F4F4;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    .hour{
        margin: 0px 15px;
    }
    .divisor{
        height: 40px;
        width: 2px;
        background-color: #D9D9D9;
    }
    .game{
        margin: 0px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .homeTeam, .awayTeam{
            display: flex;
            align-items: center;
            gap: 15px;
            width: 45%;
        }
        .awayTeam{
            justify-content: flex-end;
        }
        .scoreboard{
            display: flex;
            align-items: center;
            gap: 10px;
            .score{
                width: 30px;
                height: 30px;
                border-radius: 2px;
                background-color: #DDDDDD;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

        }
    }
`