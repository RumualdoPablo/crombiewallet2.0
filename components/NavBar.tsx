"use client";
import Link from "next/link";
import React, { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import Modal from "./Modal";
import AuthForm from "./AuthForm";
import { IconWallet } from "@tabler/icons-react";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const hanldeSignOut = async () => {
    try {
      await logOut();
      setIsOpen(false)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

return (
  <nav className="flex justify-between items-center p-2 border-b-2 text-black">
    <div className="flex items-center">
      <IconWallet />
      <h1 className="ml-2">CrombieWallet</h1>
    </div>
    <div className="flex items-center">
      {user ? (
        <><div className="mr-4">
          <p>Welcome {user.email}</p>
        </div><button
          type="button"
          onClick={hanldeSignOut}
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
            Sign Out
          </button></>
      ) : (
        <button
          type="button"
          onClick={toggleModal}
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Start
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      )}
    </div>
    <Modal toggleModal={toggleModal} isOpen={isOpen}>
      <AuthForm />
    </Modal>
  </nav>
);

}

export default Navbar