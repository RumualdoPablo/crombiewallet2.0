"use client";
import { UserAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const TransactionsPage: React.FC<any> = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setExpenses(userData?.expenses || []);
          setIncomes(userData?.income || []);
        }
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>DESCRIPTION</TableHeaderCell>
            <TableHeaderCell>DATE</TableHeaderCell>
            <TableHeaderCell>TOTAL</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.date}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.date?.toDate().toLocaleString()}</TableCell>
              <TableCell>
                <h1>{expense.amount} $</h1>
              </TableCell>
            </TableRow>
          ))}
          <TableHead>
            <TableRow>
              <TableHeaderCell>DESCRIPTION</TableHeaderCell>
              <TableHeaderCell>DATE</TableHeaderCell>
              <TableHeaderCell>TOTAL</TableHeaderCell>
            </TableRow>
          </TableHead>
          {incomes.map((income) => (
            <TableRow key={income.date}>
              <TableCell>{income.description}</TableCell>
              <TableCell>{income.date?.toDate().toLocaleString()}</TableCell>
              <TableCell>
                <h1>{income.amount} $</h1>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default TransactionsPage;
