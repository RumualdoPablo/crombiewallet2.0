import React, { useState } from "react";
import { Card, Flex, ProgressBar, Text, Title } from "@tremor/react";
import { toast } from "react-hot-toast";

const ExpenseLimit = ({ expenses, maxExpense }) => {
    const [currentMaxExpense, setCurrentMaxExpense] = useState(maxExpense);
    const [isEditing, setIsEditing] = useState(false);

    const totalExpenses = expenses.reduce(
        (acc: any, expense: { amount: any }) => acc + expense.amount,
        0
    );
    const expensePercentage =
        currentMaxExpense > 0 ? (totalExpenses / currentMaxExpense) * 100 : 0;

    const handleMaxExpenseChange = (event: { target: { value: string } }) => {
        setCurrentMaxExpense(parseFloat(event.target.value));
    };

    const handleEditClick = () => {
        if (isEditing) {
            //guarda los cambios y notifica al llegar al 100%
            if (expensePercentage >= 100) {
                toast.error("You have reached your spending limit!", {
                    duration: 4000,
                });
            }
            setIsEditing(false);
        } else {
            //cambia a edicion
            setIsEditing(true);
        }
    };

    const progressBarColor = expensePercentage >= 100 ? "red" : "green";

    return (
        <Card className="max-w-sm mx-auto">
            <Title style={{ marginBottom: "10px" }}>Don't spend more than you need!</Title>
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
                        <>
                            <Text>{`$ ${currentMaxExpense.toFixed(2)}`}</Text>
                        </>
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
                <Text className="move-right">{` ${expensePercentage.toFixed(2)}%`}</Text>
                <Text>{`$ ${currentMaxExpense.toFixed(2)}`}</Text>
            </Flex>
            <ProgressBar color={progressBarColor} className="mt-3" percentageValue={expensePercentage} />
        </Card>
    );
};

export default ExpenseLimit;

