"use client"

import { TabList, Grid, Card, Tab } from "@tremor/react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import ExpIncMonth from "./chart/ExpIncMonth"
import ExpCatMonth from "./chart/ExpCatMonth"
import Total from "./chart/Total"
import LastRegisters from "./chart/LastRegisters"
import { DataProps } from "@/interfaces/data";

const TableDashboard: React.FC<DataProps> = ({ expenses, incomes }) => {
  const [selectedView, setSelectedView] = useState("1")
  const t = useTranslations("dashboard")
  
  return (
    <div className="">
      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text={t("tabs.home.title")} className="ml-7"/>
        <Tab value="2" text={t("tabs.transactions.title")} className="ml-4" />
      </TabList>

      {selectedView === "1" ? (
        <div className="">
          <Grid numColsLg={3} className="mt-6 gap-6">
            <Card>
              <div className="h-auto">
                <Total expenses={expenses} incomes={incomes} texts={t}/>
              </div>
            </Card>
            <Card>
              <div className="h-auto mt-20">
                <ExpCatMonth expenses={expenses} incomes={incomes} texts={t} />
              </div>
            </Card>
            <Card>
              <div className="h-auto">
                <ExpIncMonth expenses={expenses} incomes={incomes} texts={t} />
              </div>
            </Card>
          </Grid>
          </div>
      ) : (
        <div className="mt-6">
          <Card>
            <LastRegisters expenses={expenses} incomes={incomes} texts={t} />
          </Card>
        </div>
      )}
    </div>
  )
}

export default TableDashboard
