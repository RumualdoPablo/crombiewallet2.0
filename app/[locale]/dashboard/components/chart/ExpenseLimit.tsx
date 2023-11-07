import React, { useState, useEffect } from "react";
import { Card, Flex, ProgressBar, Text, Title } from "@tremor/react";
import { toast } from "react-hot-toast";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";
import { expenses } from "@/interfaces/data";

const ExpenseLimit: React.FC<{ expenses: expenses[] }> = ({ expenses }) => {
  const [currentMaxExpense, setCurrentMaxExpense] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchMaxExpense = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          setCurrentMaxExpense(docSnapshot.data().maxexpense || 0);
        }
      }
    };
    fetchMaxExpense();
  }, [user]);

  const handleMaxExpenseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentMaxExpense(parseFloat(event.target.value));
  };

  const handleEditClick = async () => {
    if (isEditing) {
      if (currentMaxExpense <= 0) {
        toast.error("Invalid max expense value!");
        return;
      }
      try {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          maxexpense: currentMaxExpense,
        });
        toast.success("Max expense updated successfully!");
      } catch (error) {
        console.error("Error updating max expense:", error);
        toast.error("Failed to update max expense. Please try again later.");
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  const expensePercentage =
    currentMaxExpense > 0 ? (totalExpenses / currentMaxExpense) * 100 : 0;
  const progressBarColor = expensePercentage >= 100 ? "red" : "green";

  return (
    <Card className="max-w-sm mx-auto">
      <Title style={{ marginBottom: "10px" }}>
        Don&apos;t spend more than you need!
      </Title>
      <Flex>
        <div style={{ display: "flex", alignItems: "center" }}>
          {isEditing ? (
            <input
              type="number"
              style={{
                width: "85px",
                height: "20px",
                fontSize: "14px",
                padding: "4px",
                borderRadius: "10px",
                border: "2px solid #ccc",
              }}
              value={currentMaxExpense}
              onChange={handleMaxExpenseChange}
            />
          ) : (
            <Text>{`$ ${currentMaxExpense.toFixed(2)}`}</Text>
          )}
          <button
            onClick={handleEditClick}
            style={{
              marginLeft: "8px",
              width: "20px",
              height: "20px",
              padding: "0",
              borderRadius: "50%",
              fontSize: "12px",
            }}
          >
            {isEditing ? "✔" : "X"}
          </button>
        </div>
        <Text className="move-right">{` ${expensePercentage.toFixed(
          2
        )}%`}</Text>
        <Text>{`$ ${currentMaxExpense.toFixed(2)}`}</Text>
      </Flex>
      <ProgressBar
        color={progressBarColor}
        className="mt-3"
        percentageValue={expensePercentage}
      />
    </Card>
  );
};

export default ExpenseLimit;
