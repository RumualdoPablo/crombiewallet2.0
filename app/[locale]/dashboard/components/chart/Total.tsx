import CreateForm from "@/components/CreateForm";
import Modal from "@/components/Modal";
import { DataProps } from "@/interfaces/data";
import { IconSquarePlus } from "@tabler/icons-react";
import {
  Grid,
  Card,
  Flex,
  BadgeDelta,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import React, { useState } from "react";
import TableRegisters from "../TableRegisters.1";

const Total: React.FC<DataProps> = ({ expenses, incomes }) => {
  const [selectedView, setSelectedView] = useState("1");

  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);

  const toggleExpenseModal = () => {
    setExpenseModalOpen(!isExpenseModalOpen);
  };

  const toggleIncomeModal = () => {
    setIncomeModalOpen(!isIncomeModalOpen);
  };

  const getTotalofData = (data: any[] | undefined) => {
    return data?.reduce((acc, exp) => exp.amount + acc, 0);
  };

  const totalExpenses = getTotalofData(expenses);
  const totalIncomes = getTotalofData(incomes);
  const balance = totalExpenses - totalIncomes || 0;

  return (
    <>
      <Card
        className="w-full md:w-2/3 md:mx-auto mx-0"
        decoration="top"
        decorationColor="cyan"
      >
        <Flex alignItems="start">
          <Title className=" text-m text-center font-semibold flex items-center justify-between">
            Balance
          </Title>
          <BadgeDelta deltaType={balance > 0 ? "increase" : "decrease"} />
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="truncate space-x-3"
        >
          <Metric className={balance > 0 ? "text-green-400" : "text-red-400"}>
            {balance} €
          </Metric>
        </Flex>
      </Card>

      <Card
        className="w-full md:w-2/3 md:mx-auto mx-0 mt-4"
        decoration="top"
        decorationColor="green"
      >
        <Flex alignItems="start">
          <Title className="text-m text-center font-semibold flex items-center justify-between">
            Incomes
            <IconSquarePlus
              className="cursor-pointer p-1 rounded hover:bg-slate-50"
              onClick={toggleIncomeModal}
              size={32}
            />
          </Title>
          <BadgeDelta deltaType={"increase"} />
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="truncate space-x-3"
        >
          <Metric className="text-green-400">{totalIncomes} €</Metric>
        </Flex>
        <Modal toggleModal={toggleIncomeModal} isOpen={isIncomeModalOpen}>
          <CreateForm toggleModal={toggleIncomeModal} formType={"income"} />
        </Modal>
      </Card>

      <Card
        className="w-full md:w-2/3 md:mx-auto mx-0 mt-4"
        decoration="top"
        decorationColor="red"
      >
        <Flex alignItems="start">
          <Title className="text-m text-center font-semibold flex items-center justify-between">
            Expenses
            <IconSquarePlus
              className="cursor-pointer p-1 rounded hover:bg-slate-50"
              onClick={toggleExpenseModal}
              size={32}
            />
          </Title>
          <BadgeDelta deltaType={"decrease"} />
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="truncate space-x-3"
        >
          <Metric className="text-red-400">{totalExpenses} €</Metric>
        </Flex>
        <Modal toggleModal={toggleExpenseModal} isOpen={isExpenseModalOpen}>
          <CreateForm toggleModal={toggleExpenseModal} formType={"expense"} />
        </Modal>
      </Card>
    </>
  );
};

export default Total;
