// // Expenses.js
// import { UserAuth } from "@/context/AuthContext";
// import { db } from "@/firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import React, { FormEvent, useEffect, useState } from "react";

// const Expenses = () => {
//   const [expenseDescription, setExpenseDescription] = useState("");
//   const [expenseAmount, setExpenseAmount] = useState("");
//   const [expenses, setExpenses] = useState([]);

//   const [incomeDescription, setIncomeDescription] = useState("");
//   const [incomeAmount, setIncomeAmount] = useState("");
//   const [incomes, setIncomes] = useState([]);

//   const { user } = UserAuth();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const userDocRef = doc(db, "users", user?.uid ?? "");
//       const docSnapshot = await getDoc(userDocRef);
//       if (docSnapshot.exists()) {
//         const userData = docSnapshot.data();
//         setExpenses(userData.expenses || []);
//         setIncomes(userData.income || []);
//       }
//     };

//     if (user) {
//       fetchUserData();
//     }
//   }, [user]);

//   const handleExpenseSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentDate = new Date(); // Get the current date and time

//     const userDocRef = doc(db, "users", user?.uid ?? "");

//     const docSnapshot = await getDoc(userDocRef);
//     if (docSnapshot.exists()) {
//       const userData = docSnapshot.data();

//       const newExpense = {
//         description: expenseDescription,
//         amount: parseFloat(expenseAmount),
//         date: currentDate,
//         tag: "gastos",
//       };

//       const updatedExpenses = [...userData.expenses, newExpense];

//       await updateDoc(userDocRef, {
//         expenses: updatedExpenses,
//       });

//       setExpenseDescription("");
//       setExpenseAmount("");
//     }
//   };

//   const handleIncomeSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const userDocRef = doc(db, "users", user?.uid ?? "");

//     const docSnapshot = await getDoc(userDocRef);
//     if (docSnapshot.exists()) {
//       const userData = docSnapshot.data();

//       const newIncome = {
//         description: incomeDescription,
//         amount: parseFloat(incomeAmount),
//         date: new Date(), // Add the current date to the income data
//         tag: "income",
//       };

//       const updatedIncomes = [...userData.income, newIncome];

//       await updateDoc(userDocRef, {
//         income: updatedIncomes,
//       });

//       setIncomeDescription("");
//       setIncomeAmount("");
//       setIncomes(updatedIncomes);
//     }
//   };

//   return (
//     <div>
//       <h2>Expenses</h2>
//       <form onSubmit={handleExpenseSubmit}>
//         <input
//           type="text"
//           placeholder="Expense Description"
//           value={expenseDescription}
//           onChange={(e) => setExpenseDescription(e.target.value)}
//           required
//           className="text-black"
//         />
//         <input
//           type="number"
//           placeholder="Expense Amount"
//           value={expenseAmount}
//           onChange={(e) => setExpenseAmount(e.target.value)}
//           required
//           className="text-black"
//         />
//         <button type="submit">Add Expense</button>
//       </form>
//       <ul>
//         {expenses.map((expense) => (
//           <div key={expense.date}>
//             <li>
//               {expense.description}: ${expense.amount.toFixed(2)}
//             </li>

//             <li> {expense.date?.toDate().toLocaleString()}</li>
//           </div>
//         ))}
//       </ul>
//       <h2>Incomes</h2>
//       <form onSubmit={handleIncomeSubmit}>
//         <input
//           type="text"
//           placeholder="Expense Description"
//           value={incomeDescription}
//           onChange={(e) => setIncomeDescription(e.target.value)}
//           required
//           className="text-black"
//         />
//         <input
//           type="number"
//           placeholder="Expense Amount"
//           value={incomeAmount}
//           onChange={(e) => setIncomeAmount(e.target.value)}
//           required
//           className="text-black"
//         />
//         <button type="submit">Add Income</button>
//       </form>
//       {incomes.map((income) => (
//         <div key={income.date}>
//           {income.description}: ${income.amount ? income.amount.toFixed(2) : "N/A"}
//           <li> {income.date?.toDate().toLocaleString()}</li>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Expenses;
