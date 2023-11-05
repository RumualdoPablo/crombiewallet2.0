import React, { useState } from 'react';
import { DataProps, expenses, incomes } from "@/interfaces/data";
import { Text, Table, TableHead, TableRow, 
    TableHeaderCell, TableBody, 
    TableCell, BadgeDelta } from "@tremor/react";

const LastRegisters: React.FC<DataProps> = ({ expenses, incomes, texts }) => {
  const expenseList: expenses[] = expenses || [];
  const incomeList: incomes[] = incomes || [];
  const transactions = [...expenseList, ...incomeList];

  //agrego un estado para configurar el orden
  const [sortConfig, setSortConfig] = useState({
    key: 'date', //campos de orden por default 
    direction: 'desc',
  });

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  //funcion para cambiar el orden ascendente o descendente
  const requestSort = (key: string) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>{texts("tabs.transactions.description")}</TableHeaderCell>
          <TableHeaderCell onClick={() => requestSort('date')}>
            {texts("tabs.transactions.date")} {sortConfig.key === 'date' && (
              sortConfig.direction === 'asc' ? '↑' : '↓'
            )}
          </TableHeaderCell>
          <TableHeaderCell>{texts("tabs.transactions.total")}</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedTransactions.slice(0, 10).map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.description}</TableCell>
            <TableCell>
              <Text>{data.date.toDate().toLocaleString()}</Text>
            </TableCell>
            <TableCell>{data.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LastRegisters;