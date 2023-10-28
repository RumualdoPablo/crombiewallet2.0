"use client";
import Link from 'next-intl/link';
import { IconWorld } from "@tabler/icons-react"
import React, { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import Modal from "./Modal";
import AuthForm from "./AuthForm";
import { IconWallet } from "@tabler/icons-react";
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const hanldeSignOut = async () => {
    try {
      logOut();
      setIsOpen(false)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <nav className="h-20 w-full border-b-2 flex items-center justify-between p-2 text-black">
      <div className='flex gap-x-2'>
        <IconWallet />
        <h1>CrombieWallet</h1>
      </div>

      <div className='flex gap-x-4 items-center'>
        <ThemeSwitch/>
        <div className='flex gap-x-1'>
        <IconWorld />
        <Link href="/" locale='en' className='border-r-[2px] border-slate-300 pr-1'>English</Link>
        <Link href="/" locale='es' className=''>Español</Link>
        </div>


        {!user ? (
          <div>
            <button type="button" onClick={toggleModal} className="text-white bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              Start
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <Modal toggleModal={toggleModal} isOpen={isOpen}>
              <AuthForm />
            </Modal>
          </div>
        ) : (
          <div>
            <div>
              <p>Welcome {user.email}</p>
            </div>
            <button
              type="button"
              onClick={hanldeSignOut}
              className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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

}

export default Navbar