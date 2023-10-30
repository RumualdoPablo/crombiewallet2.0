"use client";
import { useEffect, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";
import HeaderDashboard from "../components/HeaderDashboard";
import TableDashboard from "../components/TableDashboard";

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
//   }

  return (
    <div className="">
      {/* <h1>Welcome, {userData?.name}</h1>
      <p>Email: {userData?.email}</p> */}
      {/* <Image src={userData?.profilePictureURL} alt="User Avatar" /> */}
      <HeaderDashboard />
      <TableDashboard/>
    </div>
  );
};

export default Profile;
