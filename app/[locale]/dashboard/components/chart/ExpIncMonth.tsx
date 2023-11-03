import { DataProps } from "@/types"
import { Card, Title, BarChart, ValueFormatter } from "@tremor/react"

const ExpIncMonth: React.FC<DataProps> = ({ expenses, incomes, texts }) => {

  const calculateData = (entries: any[] | undefined, type: string) => {
    const result: { [month: string]: number } = {}

    entries?.forEach((entry: { createdAt: string | number | Date, amount: any }) => {
      const createdAt = new Date(entry.createdAt)
      const month = createdAt.toLocaleString("default", { month: "long" })
      const amount = entry.amount

      if (result[month]) {
        result[month] += amount
      } else {
        result[month] = amount
      }
    })

    return Object.keys(result).map((month) => ({
      mes: month,
      [type]: Number(result[month]),
    }))
  }

  const expenseData = calculateData(expenses, 'Expenses')
  const incomeData = calculateData(incomes, 'Incomes')

  const chartData = expenseData.map((expenseEntry, index) => ({
    mes: expenseEntry.mes.toLocaleUpperCase(),
    Gastos: expenseEntry.Gastos,
    Ingresos: incomeData[index]?.Ingresos,
  }))

  const dataFormatter: ValueFormatter = (number: number) => {
    return "$" + Intl.NumberFormat("its").format(number).toString()
  }

  return (
    <Card className="p-4">
      <Title className="text-sm text-center font-bold">{texts("tabs.home.card-circle")}</Title>
      <BarChart
        className="mt-6"
        data={chartData}
        index="month"
        categories={["Expenses", "Incomes"]}
        colors={["red", "green"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        showLegend={false}
      />
    </Card>
  )
}

export default ExpIncMonth
