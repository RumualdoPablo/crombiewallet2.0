"use client"
import { TabList, Grid, Card, Tab } from "@tremor/react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import ExpIncMonth from "./chart/ExpIncMonth"
import ExpCatMonth from "./chart/ExpCatMonth"
import Total from "./chart/Total"
import LastRegisters from "./chart/LastRegisters"
import { DataProps } from "@/interfaces/data";
import { useTheme } from 'next-themes';

const TableDashboard: React.FC<DataProps> = ({ expenses, incomes }) => {
  const [selectedView, setSelectedView] = useState("1")
  const t = useTranslations("dashboard")
  const { theme } = useTheme(); //me dice el estado del tema actual

  //defino clase condicional para el fondo de las cards
  const cardBgClass = theme === 'dark' ? 'dark-mode-bg' : 'bg-white';

  return (
    <div className="">
      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text={t("tabs.home.title")} className="ml-7" />
        <Tab value="2" text={t("tabs.transactions.title")} className="ml-4" />
      </TabList>

      {selectedView === "1" ? (
        <div className="flex mt-6 mx-10 gap-x-12 justify-between">
          <Card className={`w-fit ${cardBgClass}`}>
            <Total expenses={expenses} incomes={incomes} texts={t} />
          </Card>
          <Card className={`w-fit ${cardBgClass}`}>
            <ExpCatMonth expenses={expenses} incomes={incomes} texts={t} />
          </Card>
          <Card className={`w-[600px] ${cardBgClass}`}>
            <ExpIncMonth expenses={expenses} incomes={incomes} texts={t} />
          </Card>
        </div>
      ) : (
        <div className="mt-6">
            <LastRegisters expenses={expenses} incomes={incomes} texts={t} />
        </div>
      )}
    </div>
  )
}

export default TableDashboard;