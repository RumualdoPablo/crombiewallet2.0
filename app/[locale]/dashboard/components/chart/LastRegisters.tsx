import React, { useState } from "react";
import { DataProps, expenses, incomes } from "@/interfaces/data";
import {
  Text,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  BadgeDelta,
  Card,
  Button,
} from "@tremor/react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";

const LastRegisters: React.FC<DataProps> = ({ expenses, incomes, texts }) => {
  const expenseList: expenses[] = expenses || [];
  const incomeList: incomes[] = incomes || [];
  const [transactions, setTransactions] = useState([...expenses, ...incomes]);
  const { user } = UserAuth();

  //Estado para configurar el orden
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  //Estado para controlar cuantos elementos se muestran
  const [showAll, setShowAll] = useState(false);

  //Ordeno las transacciones por fecha
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  //Funcion para cambiar el orden ascendente o descendente
  const requestSort = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  //Función para eliminar una entrada
  const handleDeleteClick = (id: string) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);

    const userDocRef = doc(db, "users", user?.uid ?? "");
    updateDoc(userDocRef, {
      expenses: updatedTransactions.filter((transaction) => transaction.tag === "expense"),
      income: updatedTransactions.filter((transaction) => transaction.tag === "income"),
    }).then(() => {
      console.log("Item with ID:", id, "deleted successfully from the database.");
    }).catch((error) => {
      console.error("Error deleting item from the database:", error);
    });
  };

  console.log(transactions);

  return (
    <Card>
      <div
        style={{
          maxHeight: showAll ? "500px" : "auto",
          overflowY: showAll ? "auto" : "visible",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>
                {texts("tabs.transactions.description")}
              </TableHeaderCell>
              <TableHeaderCell
                className="cursor-pointer"
                onClick={() => requestSort("date")}
              >
                {texts("tabs.transactions.date")}{" "}
                {sortConfig.key === "date" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </TableHeaderCell>
              <TableHeaderCell>
                {texts("tabs.transactions.total")}
              </TableHeaderCell>
              <TableHeaderCell>TYPE</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showAll
              ? sortedTransactions.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.description}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeleteClick(
                            data.id
                          )
                        }
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Text>{data.date.toDate().toLocaleString()}</Text>
                    </TableCell>
                    <TableCell>{data.amount}</TableCell>
                    <TableCell>
                      {expenseList.includes(data) ? (
                        <BadgeDelta deltaType={"decrease"} />
                      ) : (
                        <BadgeDelta deltaType={"increase"} />
                      )}
                    </TableCell>
                  </TableRow>
                ))
              : sortedTransactions.slice(0, 10).map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.description}</TableCell>

                    <TableCell>
                      <Text>{data.date.toDate().toLocaleString()}</Text>
                    </TableCell>
                    <TableCell>{data.amount}</TableCell>
                    <TableCell>
                      {expenseList.includes(data) ? (
                        <BadgeDelta deltaType={"decrease"} />
                      ) : (
                        <BadgeDelta deltaType={"increase"} />
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeleteClick(
                            data.id
                          )
                        }
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

            {!showAll && sortedTransactions.length > 10 && (
              <TableRow>
                <TableCell colSpan={4}>
                  <Button onClick={() => setShowAll(true)}>
                    {texts("tabs.transactions.button")}
                  </Button>
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
