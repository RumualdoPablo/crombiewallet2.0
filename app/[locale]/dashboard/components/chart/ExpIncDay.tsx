import { DataProps } from "@/interfaces/data";
import { Card, Title, LineChart, ValueFormatter } from "@tremor/react";

interface Entry {
  createdAt: string | number | Date;
  amount: number;
  date: any;
}

const ExpIncDay: React.FC<DataProps> = ({ expenses, incomes, texts }) => {
  const calculateChartData = () => {
    const chartData: { [day: string]: { Expenses: number; Incomes: number } } = {};

    //calcula gastos totales por dia
    expenses.forEach((expense: Entry) => {
      const date = expense.date.toDate().toLocaleString();
      chartData[date] = chartData[date] || { Expenses: 0, Incomes: 0 };
      chartData[date].Expenses += expense.amount;
    });

    //calcula ingresos totales por dia
    incomes.forEach((income: Entry) => {
      const date = new Date(income.createdAt).toLocaleDateString();
      chartData[date] = chartData[date] || { Expenses: 0, Incomes: 0 };
      chartData[date].Incomes += income.amount;
    });

    return Object.keys(chartData).map((day) => ({
      dia: day,
      Expenses: chartData[day].Expenses,
      Incomes: chartData[day].Incomes,
    }));
  };

  const chartData = calculateChartData();

  const dataFormatter: ValueFormatter = (number: number) => {
    return "$" + Intl.NumberFormat("its").format(number).toString();
  };

  return (
    <Card>
      <Title className="text-sm text-center font-bold uppercase">
      {texts("tabs.home.card-lines")}
      </Title>
      <LineChart
        className="mt-6"
        data={chartData}
        index="dia"
        categories={["Expenses", "Incomes"]}
        colors={["red", "green"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        showLegend={false}
      />
    </Card>
  );
};

export default ExpIncDay;
