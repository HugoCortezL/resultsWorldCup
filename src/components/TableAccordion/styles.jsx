import styled from 'styled-components'

export const TableAccordionContainer = styled.div`
    
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
    height: 260px;
    border: 2px solid #FFD1DD;
    border-top: none;
    background-color: #FFFFFF;
    &.inactive{
        height: 0px;
    }
    table {
        margin: 15px 20px;
        width: calc(100% - 40px);
        border-collapse: collapse;
        tr {
            th {
                padding: 5px;
                text-align: left;
                background-color: #F8F8F8;
                &:first-child  {
                    border-radius: 5px 0px 0px 0px;
                }
                &:last-child{
                    border-radius: 0px 5px 0px 0px;
                }
            }
            td {
                padding: 10px;
                text-align: left;
                background-color: #F8F8F8;
            }
        }
        
        tbody {
            tr:first-child, tr:nth-child(2){
                td{
                    background-color: #EAEAEA;
                    &:first-child{
                        border-left: 3px solid #3BCA18;
                    }
                }
            }
            tr:last-child{
                td:first-child  {
                    border-radius: 0px 0px 0px 5px;
                }
                td:last-child{
                    border-radius: 0px 0px 5px 0px;
                }
            }
        }
    }
`