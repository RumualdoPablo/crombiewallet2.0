import React from "react";
import Link from "next-intl/link";

function Footer() {
  return (
    <div className="w-full h-fit">
      <footer className=" h-[80px] bg-white rounded-lg shadow m-4 flex justify-between items-center">
          <ul className="flex gap-10 flex-wrap items-center pl-2 mt-3 text-lg font-medium text-gray-500 sm:mt-0">
            <li>
              <Link href="/about-us">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                  FAQ
                </span>
              </Link>
            </li>
          </ul>
          <h1 className="text-4xl font-bold cursor-pointer ml-10">
          <Link href={"/"} locale="en">
            <span className="text-black">Crombie</span>
            <span className="text-yellow">Wallet</span>
          </Link>
        </h1>
          <span className="text-lg text-gray-900 sm:text-center pr-2">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Crombiewallet
            </a>
            . All Rights Reserved.
          </span>
      </footer>
    </div>
  );
}

export default Footer;
