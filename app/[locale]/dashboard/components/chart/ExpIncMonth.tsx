import { DataProps } from "@/interfaces/data";
import { Card, Title, DonutChart, ValueFormatter } from "@tremor/react";

const ExpIncMonth: React.FC<DataProps> = ({ expenses, texts }) => {
  //agrupo gastos por categoria y me devuelve los totales
  const groupedData = expenses.reduce((acc, entry) => {
    acc[entry.category] = acc[entry.category] || 0;
    acc[entry.category] += entry.amount;
    return acc;
  }, {});

  const chartData = Object.keys(groupedData).map((category) => ({
    name: category,
    sales: groupedData[category],
  }));

  const valueFormatter: ValueFormatter = (number: number) => {
    return "$" + Intl.NumberFormat("its").format(number).toString();
  };

  return (
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
      />
    </Card>
  );
};

export default ExpIncMonth;