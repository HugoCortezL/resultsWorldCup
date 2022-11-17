import styled from 'styled-components'

export const GameAccordionContainer = styled.div`
    
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFD1DD;
    height: 40px;
    padding: 0px 10px;
    border-radius: ${props => props.isOpen ? "2px 2px 0px 0px" : "2px"};
    margin-top: 15px;
    color: #181818;
    cursor: pointer;
    transition: transform 0.3s linear;
    .icon{
        transform: ${props => props.isOpen ? "rotate(180deg)" : ""};
        transition: transform 0.3s linear;
    }
`

export const GamesContent = styled.div`
    overflow: hidden;
    transition: height 0.3s linear;
    height: ${props => props.height};
    border: 2px solid #FFD1DD;
    border-top: none;
    background-color: #FFFFFF;
    &.inactive{
        height: 0px;
    }
`