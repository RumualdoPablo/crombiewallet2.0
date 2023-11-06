"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";
import HeaderDashboard from "../components/HeaderDashboard";
import TableDashboard from "../components/TableDashboard";
import Loader from "@/components/LoadingComponents/Loader";

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
  console.log("Viendo cuanto renderiza esto");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnapshot = await getDoc(userDocRef);
  
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
  
          if (!user.emailVerified) {
            router.push("/verification");
            return;
          }
  
          setExpenses(userData?.expenses || []);
          setIncomes(userData?.income || []);
        }
  
        setLoading(false);
        console.log("Viendo cuanto renderiza esto2222");
      }
    };
  
    fetchUserData();
  }, [user]);

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
    </div>
  );
};

export default Profile;
