import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

interface Entry {
  createdAt: string | number | Date;
  amount: number;
  date: any;
}

const ExpIncMonth: React.FC = ({ expenses, incomes, texts  }) => {


  const calculateChartData = () => {
    const chartData: { date: string; expenses: number; incomes: number }[] = [];

    //calculo gastos totales por dia
    expenses.forEach((expense: Entry) => {
      const date = expense.date.toDate().toLocaleString();
      const existingData = chartData.find((data) => data.date === date);
      if (existingData) {
        existingData.expenses += expense.amount;
      } else {
        chartData.push({ date, expenses: expense.amount, incomes: 0 });
      }
    });

    //calculo ingresos totales por dia
    incomes.forEach((income: Entry) => {
      const date = income.date.toDate().toLocaleString();
      const existingData = chartData.find((data) => data.date === date);
      if (existingData) {
        existingData.incomes += income.amount;
      } else {
        chartData.push({ date, expenses: 0, incomes: income.amount });
      }
    });

    return chartData;
  };

  const chartData = calculateChartData();

  return (
    <Card>
      <Title className="text-sm text-center font-bold uppercase">
        {texts("tabs.home.card-lines")}
      </Title>
      <AreaChart
        className="mt-6"
        data={chartData}
        index="date"
        categories={["expenses", "incomes"]}
        colors={["red", "green"]}
        valueFormatter={(number) => "$" + new Intl.NumberFormat("us").format(number).toString()}
      />
    </Card>
  );
};

export default ExpIncMonth;