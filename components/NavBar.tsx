"use client";
import Link from 'next-intl/link';
import { IconWorld } from "@tabler/icons-react"
import React, { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import Modal from "./Modal";
import AuthForm from "./AuthForm";
import { IconWallet } from "@tabler/icons-react";
import ThemeSwitch from './ThemeSwitch';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const t = useTranslations("index")
  const router = useRouter()

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      logOut();
      setIsOpen(false);
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="h-20 w-full border-b-2 flex items-center justify-between p-2 text-black">
      <div className='flex items-center dark-mode-font ml-5'>
        <IconWallet size={33} />
        <h1 className='text-xl font-semibold dark-mode-font'>CrombieWallet</h1>
      </div>

      <div className='flex gap-x-4 items-center'>
        <ThemeSwitch />
        <div className='flex gap-x-1 dark-mode-font items-center'>
          <IconWorld />
          <Link href={pathname} locale='en' className='border-r-[2px] border-slate-300 pr-1'>En</Link>
          <Link href={pathname} locale='es' className=''>Es</Link>
        </div>

        {!user ? (
          <div className="flex items-center">
            <button type="button" onClick={toggleModal} className="text-white bg-emerald-600 active:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            {t("log-button")}
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        ) : (
          <div className="flex items-center dark-mode-font">
            <button
              type="button"
              onClick={handleSignOut}
              className="text-white bg-red-600 active:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            >
              Sign Out
            </button>
          </div>
        )
        }
      </div>

      <Modal toggleModal={toggleModal} isOpen={isOpen}>
        <AuthForm />
      </Modal>
    </nav>
  );
};

export default Navbar;
