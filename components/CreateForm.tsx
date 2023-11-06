"use client";

import { IconFolderPlus } from "@tabler/icons-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";
import { UserAuth } from "@/context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

interface CreateFormProp {
  toggleModal: () => void;
  formType: "expense" | "income";
}

const CreateForm = ({ toggleModal, formType }: CreateFormProp) => {
  
  const { user } = UserAuth();
  const [isPending, setIsPending] = useState(false);
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      description: "",
      amount: 0,
      category: "",
      userDate: "",
    },
  });

  const router = useRouter();

  const handleFormSubmit = async (data: FieldValues, tag: string) => {
    setIsPending(true);

    const currentDate = new Date();
    const userDocRef = doc(db, "users", user?.uid ?? "");
    const docSnapshot = await getDoc(userDocRef);

    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();

      const newItem = {
        description: data.description,
        amount: parseFloat(data.amount),
        date: currentDate,
        tag: tag,
        category: data.category,
        userDate: data.userDate
      };

      const updatedItems =
        tag === "expense"
          ? [...userData.expenses, newItem]
          : [...userData.income, newItem];

      const fieldToUpdate = tag === "expense" ? "expenses" : "income";

      await updateDoc(userDocRef, {
        [fieldToUpdate]: updatedItems,
      });

      setIsPending(false);
    }
    //Ver donde poner el refresh para que funcione
    router.refresh()
  };

  const onSubmit = (data: FieldValues) => {
    formType === "expense"
      ? handleFormSubmit(data, "expense")
      : handleFormSubmit(data, "income");
      toggleModal()
  };

  return (
    <div className="mt-4 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center flex-col gap-4"
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("description", { required: true })}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
            -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="number"
            {...register("amount", { required: true })}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="amount"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
            -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Total Cost
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <select
            {...register("category", { required: true })}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="">Select Category</option>
            <option value="Hogar">Hogar</option>
            <option value="Comida">Comida</option>
            <option value="Cuentas y pagos">Cuentas y pagos</option>
            <option value="Transporte">Transporte</option>
            <option value="Ropa">Ropa</option>
            <option value="Salud e Higiene">Salud e Higiene</option>
            <option value="Compras">Compras</option>
            <option value="Ocio">Ocio</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <label className="text-sm text-gray-500 dark:text-gray-400">Date</label>
        <input
          type="date"
          {...register("userDate")}
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        <button
          type="submit"
          className={`font-sans font-bold text-sm rounded-lg py-3 
            flex items-center gap-4 px-4 hover:bg-slate-500
            transition-all bg-[#234388] text-white mx-auto w-3/6 ${
              isPending ? "cursor-not-allowed opacity-50" : ""
            }`}
          disabled={isPending}
        >
          <IconFolderPlus size={15} />
          CREATE {formType.toUpperCase()}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;

