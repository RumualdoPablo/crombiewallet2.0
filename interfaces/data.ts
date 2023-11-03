import { UserData } from "./registerForm";

export interface expenses {
    id: string;
    description: string;
    user: UserData;
    amount: number;
    date: string; // Otra propiedad relacionada con la fecha
    createdAt: string;
}

export interface incomes {
    id: string;
    description: string;
    user: UserData;
    source: string;
    amount: number;
    date: string; // Otra propiedad relacionada con la fecha
    createdAt: string;
}

export interface DataProps {
    expenses: expenses[] | undefined;
    incomes: incomes[] | undefined;
    texts?: any
}

export interface IncomeProps {
    data: (incomes | (expenses & { user: UserData }))[] | undefined;
    deltaType: 'increase' | 'decrease';
}