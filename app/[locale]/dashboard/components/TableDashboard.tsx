"use client"

import { TabList, Grid, Card, Tab } from "@tremor/react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import ExpIncMonth from "./chart/ExpIncMonth"
import ExpIncDay from "./chart/ExpIncDay"
import Total from "./chart/Total"
import LastRegisters from "./chart/LastRegisters"
import { DataProps } from "@/interfaces/data";

const TableDashboard: React.FC<DataProps> = ({ expenses, incomes }) => {
  const [selectedView, setSelectedView] = useState("1")
  const t = useTranslations("dashboard")
  
  return (
    <>
      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="HOME" className="ml-7"/>
        <Tab value="2" text="TRANSACTIONS" className="ml-4" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <Grid numColsLg={3} className="mt-6 gap-6">
            <Card>
              <div className="h-auto">
                <Total expenses={expenses} incomes={incomes} texts={t}/>
              </div>
            </Card>
            <Card>
              <div className="h-auto">
                <ExpIncMonth expenses={expenses} incomes={incomes} />
              </div>
            </Card>
            <Card>
              <div className="h-auto">
                <ExpIncDay expenses={expenses} incomes={incomes} />
              </div>
            </Card>
          </Grid>

        </>
      ) : (
        <div className="mt-6">
          <Card>
            <LastRegisters expenses={expenses} incomes={incomes} />
          </Card>
        </div>
      )}
    </>
  )
}

export default TableDashboard
