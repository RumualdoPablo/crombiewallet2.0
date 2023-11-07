import CreateForm from "@/components/CreateForm";
import Modal from "@/components/Modal";
import { DataProps } from "@/interfaces/data";
import { IconEye, IconEyeOff, IconSquarePlus } from "@tabler/icons-react";
import {
  Card,
  Flex,
  BadgeDelta,
  Metric,
  Title,
} from "@tremor/react";
import React, { useState } from "react";

const Total: React.FC<DataProps> = ({ expenses, incomes, texts }) => {
  const [selectedView, setSelectedView] = useState("1");

  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const toggleExpenseModal = () => {
    setExpenseModalOpen(!isExpenseModalOpen);
  };

  const toggleIncomeModal = () => {
    setIncomeModalOpen(!isIncomeModalOpen);
  };

  const getTotalofData = (data: any[] | undefined) => {
    return data?.reduce((acc, exp) => exp.amount + acc, 0);
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const totalExpenses = getTotalofData(expenses);
  const totalIncomes = getTotalofData(incomes);
  const balance = totalIncomes - totalExpenses || 0;

  return (
    <div className=" w-[350px]">
      <Card
        className="w-full md:w-2/3 md:mx-auto mx-0 dark-mode-card"
        decoration="top"
        decorationColor="cyan"
      >
        <Flex alignItems="start">
          <Title className=" text-m text-center font-semibold flex items-center justify-between">
            {texts("balance")}
            {isBalanceVisible ? (
              <IconEyeOff
                className="cursor-pointer p-1 rounded hover:bg-slate-50"
                onClick={toggleBalanceVisibility}
                size={24}
              />
            ) : (
              <IconEye
                className="cursor-pointer p-1 rounded hover:bg-slate-50"
                onClick={toggleBalanceVisibility}
                size={24}
              />
            )}
          </Title>
          <BadgeDelta deltaType={balance > 0 ? "increase" : "decrease"} />
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="truncate space-x-3"
        >
          {isBalanceVisible ? (
            <Metric className="text-green-400">****</Metric>
          ) : (
            <Metric className={balance > 0 ? "text-green-400" : "text-red-400"}>
              $ {balance}
            </Metric>
          )}
        </Flex>
      </Card>

      <Card
        className="w-full md:w-2/3 md:mx-auto mx-0 mt-4 dark-mode-card"
        decoration="top"
        decorationColor="green"
      >
        <Flex alignItems="start">
          <Title className="text-m text-center font-semibold flex items-center justify-between">
            {texts("income")}
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
          <Metric className="text-green-400">$ {totalIncomes}</Metric>
        </Flex>
        <Modal toggleModal={toggleIncomeModal} isOpen={isIncomeModalOpen}>
          <CreateForm toggleModal={toggleIncomeModal} formType={"income"} />
        </Modal>
      </Card>

      <Card
        className="w-full md:w-2/3 md:mx-auto mx-0 mt-4 dark-mode-card"
        decoration="top"
        decorationColor="red"
      >
        <Flex alignItems="start">
          <Title className="text-m text-center font-semibold flex items-center justify-between">
            {texts("expense")}
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
          <Metric className="text-red-400">$ {totalExpenses}</Metric>
        </Flex>
        <Modal toggleModal={toggleExpenseModal} isOpen={isExpenseModalOpen}>
          <CreateForm toggleModal={toggleExpenseModal} formType={"expense"} />
        </Modal>
      </Card>
    </div>
  );
};

export default Total;
