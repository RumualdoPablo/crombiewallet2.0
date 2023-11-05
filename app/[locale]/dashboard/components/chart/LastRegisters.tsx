import React, { useState } from 'react';
import { DataProps, expenses, incomes } from "@/interfaces/data";
import {
  Text, Table, TableHead, TableRow,
  TableHeaderCell, TableBody,
  TableCell, BadgeDelta, Title, Card, Button
} from "@tremor/react";

const LastRegisters: React.FC<DataProps> = ({ expenses, incomes, texts }) => {
  const expenseList: expenses[] = expenses || [];
  const incomeList: incomes[] = incomes || [];
  const transactions = [...expenseList, ...incomeList];

  //estado para configurar el orden
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc',
  });
 //estado para controlar cuantos elementos se muestran
  const [showAll, setShowAll] = useState(false);
 //ordeno las transacciones por fecha
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
    <Card>
      <Title className='font-medium'>List of Movements</Title>
      <div style={{ maxHeight: showAll ? '500px' : 'auto', overflowY: showAll ? 'auto' : 'visible' }}>
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
              <TableHeaderCell>TYPE</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showAll
              ? sortedTransactions.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>
                    <Text>{data.date.toDate().toLocaleString()}</Text>
                  </TableCell>
                  <TableCell>{data.amount}</TableCell>
                  <TableCell>{expenseList.includes(data) ? <BadgeDelta deltaType={"decrease"} /> : <BadgeDelta deltaType={"increase"} />}</TableCell>
                </TableRow>
              ))
              : sortedTransactions.slice(0, 10).map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>
                    <Text>{data.date.toDate().toLocaleString()}</Text>
                  </TableCell>
                  <TableCell>{data.amount}</TableCell>
                  <TableCell>{expenseList.includes(data) ? <BadgeDelta deltaType={"decrease"} /> : <BadgeDelta deltaType={"increase"} />}</TableCell>
                </TableRow>
              ))}

            {!showAll && sortedTransactions.length > 10 && (
              <TableRow>
                <TableCell colSpan={4}>
                  <Button onClick={() => setShowAll(true)}>View More</Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default LastRegisters;