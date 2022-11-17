import { TableContainer } from './styles'
import tables from '../../api/table.json'
import TableAccordion from '../TableAccordion'

export default function Table() {
    return (
        <TableContainer>
            {
                tables.map(table => {
                    return (
                        <TableAccordion data={table} key={table.group} />
                    )
                })
            }
        </TableContainer>
    )
}