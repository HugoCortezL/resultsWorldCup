import styled from 'styled-components'

export const HomeContainer = styled.div`    
    .logo-container{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px 0px 20px;
        .logo{
            width: 150px;
            height: 180px;
        }
    }
`

export const Header = styled.div`
    width: 100vw;
    height: 60px;
    box-shadow: 0px 2px 4px #CBCBCB;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9A1032;
`

export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 40px;
    div{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
        border-bottom: 2px solid #dedede;
        &.active{
            border-bottom: 2px solid #9A1032;
        }
        &:hover{
            background-color: #EAEAEA;
        }
    }
`