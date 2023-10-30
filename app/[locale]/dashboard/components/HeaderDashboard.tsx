"use client";

import { IconWallet, IconUser, IconLogout } from "@tabler/icons-react";
import { Title, Text } from "@tremor/react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import { UserData } from "@/interfaces/RegisterForm";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const HeaderDashboard = () => {
  const { id } = useParams();
  const { user } = UserAuth();
  const [userData, setUserData] = useState<UserData | null>(null);

  const router = useRouter();

  // useEffect(() => {
  //   if (session?.status !== "authenticated") {
  //     console.log("Not authenticated")
  //     // router.push("/")
  //     {/*Descomentar el router.push cuando termine*/}
  //   }
  // }, [session?.status, router])

  useEffect(() => {
    const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", user?.uid ?? "");
          const docSnapshot = await getDoc(userDocRef);
          console.log("snapshot", docSnapshot);
          if (docSnapshot.exists()) {
            setUserData(docSnapshot.data() as UserData);
          } else {
            console.log("User data not found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
    };

    fetchUserData();
  }, [id]);

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex-col items-start">
        <Title className="flex gap-2 items-center">
          <IconWallet />
          <span>CrombieWallet</span>
        </Title>
        <Text className="text-xs mt-2">MANAGE YOUR MONTHLY EXPENSES</Text>
      </div>

      <div>
        <IconUser />
        <h1>Welcome, {userData?.name}</h1>
        <p>Email: {userData?.email}</p>
        {/* <IconLogout
          onClick={() => signOut()}
          className="cursor-pointer rounded p-1 
            hover:bg-white"
          size={32}
        /> */}
      </div>
    </header>
  );
};

export default HeaderDashboard;
