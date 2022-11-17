import { TableGroupContainer } from './styles'

import arabia from '../../assets/images/arabia-flag.svg'
import argentina from '../../assets/images/argentina-flag.svg'
import australia from '../../assets/images/australia-flag.svg'
import belgium from '../../assets/images/belgium-flag.svg'
import brazil from '../../assets/images/brazil-flag.svg'
import cameroon from '../../assets/images/cameroon-flag.svg'
import canada from '../../assets/images/canada-flag.svg'
import costaRica from '../../assets/images/costaRica-flag.svg'
import croatia from '../../assets/images/croatia-flag.svg'
import denmark from '../../assets/images/denmark-flag.svg'
import ecuador from '../../assets/images/ecuador-flag.svg'
import england from '../../assets/images/england-flag.svg'
import france from '../../assets/images/france-flag.svg'
import germany from '../../assets/images/germany-flag.svg'
import ghana from '../../assets/images/ghana-flag.svg'
import iran from '../../assets/images/iran-flag.svg'
import japan from '../../assets/images/japan-flag.svg'
import korea from '../../assets/images/korea-flag.svg'
import marrocos from '../../assets/images/marrocos-flag.svg'
import mexico from '../../assets/images/mexico-flag.svg'
import netherlands from '../../assets/images/netherlands-flag.svg'
import poland from '../../assets/images/poland-flag.svg'
import portugal from '../../assets/images/portugal-flag.svg'
import qatar from '../../assets/images/qatar-flag.svg'
import senegal from '../../assets/images/senegal-flag.svg'
import serbia from '../../assets/images/serbia-flag.svg'
import spain from '../../assets/images/spain-flag.svg'
import switzerland from '../../assets/images/switzerland-flag.svg'
import tunisia from '../../assets/images/tunisia-flag.svg'
import uruguay from '../../assets/images/uruguay-flag.svg'
import usa from '../../assets/images/usa-flag.svg'
import wales from '../../assets/images/wales-flag.svg'
import noneFlag from '../../assets/images/none-flag.svg'

export default function TableGroup({ team, index }) {

    const setFlag = (flag) => {
        if (flag == "arabia-flag") {
            return arabia
        }
        else if (flag == "argentina-flag") {
            return argentina
        }
        else if (flag == "australia-flag") {
            return australia
        }
        else if (flag == "belgium-flag") {
            return belgium
        }
        else if (flag == "brazil-flag") {
            return brazil
        }
        else if (flag == "cameroon-flag") {
            return cameroon
        }
        else if (flag == "canada-flag") {
            return canada
        }
        else if (flag == "costaRica-flag") {
            return costaRica
        }
        else if (flag == "croatia-flag") {
            return croatia
        }
        else if (flag == "denmark-flag") {
            return denmark
        }
        else if (flag == "ecuador-flag") {
            return ecuador
        }
        else if (flag == "england-flag") {
            return england
        }
        else if (flag == "france-flag") {
            return france
        }
        else if (flag == "germany-flag") {
            return germany
        }
        else if (flag == "ghana-flag") {
            return ghana
        }
        else if (flag == "iran-flag") {
            return iran
        }
        else if (flag == "japan-flag") {
            return japan
        }
        else if (flag == "korea-flag") {
            return korea
        }
        else if (flag == "marrocos-flag") {
            return marrocos
        }
        else if (flag == "mexico-flag") {
            return mexico
        }
        else if (flag == "netherlands-flag") {
            return netherlands
        }
        else if (flag == "poland-flag") {
            return poland
        }
        else if (flag == "portugal-flag") {
            return portugal
        }
        else if (flag == "qatar-flag") {
            return qatar
        }
        else if (flag == "senegal-flag") {
            return senegal
        }
        else if (flag == "serbia-flag") {
            return serbia
        }
        else if (flag == "spain-flag") {
            return spain
        }
        else if (flag == "switzerland-flag") {
            return switzerland
        }
        else if (flag == "tunisia-flag") {
            return tunisia
        }
        else if (flag == "uruguay-flag") {
            return uruguay
        }
        else if (flag == "usa-flag") {
            return usa
        }
        else if (flag == "wales-flag") {
            return wales
        }
        else {
            return noneFlag
        }

    }

    return (
        <TableGroupContainer>
            <td className="title">
                <p>
                    {index}
                </p>
                <img src={setFlag(team.flag)} alt="Home team flag" />
                <p>
                    {team.name}
                </p>
            </td>
            <td>
                {team.points}
            </td>
            <td>
                {team.wins}
            </td>
            <td>
                {team.draws}
            </td>
            <td>
                {team.loses}
            </td>
            <td>
                {team.goalDif}
            </td>
            <td>
                {team.matchesPlayed}
            </td>
        </TableGroupContainer>
    )
}