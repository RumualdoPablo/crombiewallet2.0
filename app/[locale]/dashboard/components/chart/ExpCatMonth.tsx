import { DataProps } from "@/interfaces/data";
import { Card, Title, DonutChart, ValueFormatter } from "@tremor/react";
import ExpenseLimit from "./ExpenseLimit";
import { useState } from "react";

const ExpCatMonth: React.FC<DataProps> = ({ expenses, texts }) => {
  const [maxExpense] = useState(1000);
  
  //agrupo gastos por categoria y me devuelve los totales
  const groupedData = expenses?.reduce((acc, entry) => {
    acc[entry.category] = acc[entry.category] || 0;
    acc[entry.category] += entry.amount;
    return acc;
  }, {});

  const chartData = Object.keys(groupedData).map((category) => ({
    name: category,
    sales: groupedData[category]
  }));

  const valueFormatter: ValueFormatter = (number: number) => {
    return "$" + Intl.NumberFormat("its").format(number).toString();
  };

  return (
    <div>
      <Card>
        <Title className="text-sm text-center font-bold uppercase">
          {texts("tabs.home.card-circle")}
        </Title>
        <DonutChart
          className="mt-6"
          data={chartData}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["yellow", "violet", "indigo", "rose", "emerald", "amber"]}
        />
      </Card>
      <Card>
      <ExpenseLimit expenses={expenses} maxExpense={maxExpense} /> {/* Utiliza el componente FinancialProgress */}
      </Card>
    </div>
  );
};

export default ExpCatMonth;