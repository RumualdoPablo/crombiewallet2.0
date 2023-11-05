"use client";

import { IconWallet, IconUser, IconLogout } from "@tabler/icons-react";
import { Title, Text } from "@tremor/react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import { UserData } from "@/interfaces/registerForm";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useTranslations } from "next-intl";

const HeaderDashboard = () => {
  const { id } = useParams();
  const { user } = UserAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const t = useTranslations("dashboard")
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
  }, [user?.uid]);

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex-col items-start">
        <Text className="text-base mt-2">{t("header.title")}</Text>
      </div>

      <div>
        <IconUser />
        <p>{t("header.welcome")}, {userData?.name}</p>
      </div>
    </header>
  );
};

export default HeaderDashboard;
