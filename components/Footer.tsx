"use client"

import React from "react";
import Link from "next-intl/link";
import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme(); //me dice el estado del tema actual

  //defino clase condicional para el fondo
  const footerBgClass = theme === 'dark' ? 'dark-mode-bg' : 'bg-white';

  return (
    <div className="w-full h-fit">
      <footer className={`h-[80px] rounded-lg shadow m-4 flex justify-between items-center ${footerBgClass}`}>
        <ul className="flex gap-10 flex-wrap items-center pl-2 mt-3 text-lg font-medium text-gray-500 sm:mt-0">
          <li>
            <Link href="/about">
              <span className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300`}>
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <span className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300`}>
                FAQ
              </span>
            </Link>
          </li>
        </ul>
        <h1 className="text-4xl font-bold cursor-pointer ml-10">
          <Link href={"/"} locale="en">
            <span className="text-black">Crombie</span>
            <span className="text-yellow-400">Wallet</span>
          </Link>
        </h1>
        <span className={`text-lg text-gray-900 sm:text-center pr-2 ${theme === 'dark' ? 'dark-mode-font' : ''}`}>
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CrombieWallet
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;