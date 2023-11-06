"use client";
import { useEffect, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";
import HeaderDashboard from "../components/HeaderDashboard";
import TableDashboard from "../components/TableDashboard";
import Loader from "@/components/LoadingComponents/Loader";

interface UserData {
  name: string;
  email: string;
  profilePictureURL: string;
}
const Profile = () => {
//   const { id } = useParams();
//   const { user } = UserAuth();
//   const [userData, setUserData] = useState<UserData | null>(null);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!user) {
//         router.push("/login");
//       }
//       if (typeof id === "string") {
//         try {
//           const userDocRef = doc(db, "users", id);
//           const docSnapshot = await getDoc(userDocRef);
//           console.log("snapshot", docSnapshot);
//           if (docSnapshot.exists()) {
//             setUserData(docSnapshot.data() as UserData);
//           } else {
//             console.log("User data not found");
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   

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
  return <div className="h-screen"><Loader/></div>;
}

  return (
    <div className="">
      <HeaderDashboard />
      <TableDashboard expenses={expenses} incomes={incomes}/>
    </div>
  );
};

export default Profile;
