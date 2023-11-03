import { DataProps } from "@/types"
import { Expense, Income } from "@prisma/client" //Esto hay que sacarlo porque no usamos prisma
import { Text, Table, TableHead, TableRow, 
    TableHeaderCell, TableBody, 
    TableCell, BadgeDelta } from "@tremor/react"

const LastRegisters: React.FC<DataProps> = ({ expenses, incomes }) => {
  
  //Lo mismo para este tipado, no deberia estar con prisma
  const expenseList: Expense[] = expenses || []
  const incomeList: Income[] = incomes || []
  const transactions = [...expenseList, ...incomeList]


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>DESCRIPTION</TableHeaderCell>
          <TableHeaderCell>DATE</TableHeaderCell>
          <TableHeaderCell>TOTAL</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions?.slice(0, 10).map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.description}</TableCell>
            <TableCell>
              <Text>{data.date.toDate().toLocaleString()}</Text>
            </TableCell>
            <TableCell>
              {data.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LastRegisters
