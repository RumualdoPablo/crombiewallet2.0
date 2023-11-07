"use client";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";
import HeaderDashboard from "../components/HeaderDashboard";
import TableDashboard from "../components/TableDashboard";
import Loader from "@/components/LoadingComponents/Loader";
import MoneyCarousel from "@/components/MoneyCarousel";

interface UserData {
  name: string;
  email: string;
  profilePictureURL: string;
}
const Profile = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);

        const unsubscribe = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            if (!user.emailVerified) {
              router.push("/verification");
              return;
            }

            setExpenses(userData.expenses || []);
            setIncomes(userData.income || []);
            setLoading(false);
          }
        });

        return () => {
          unsubscribe();
        };
      }
    };

    fetchData();
  }, [user, router]);

  if (loading) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="">
      <HeaderDashboard />
      <TableDashboard expenses={expenses} incomes={incomes} />
      <MoneyCarousel/>
    </div>
  );
};

export default Profile;
