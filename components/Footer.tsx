import React from "react";
import Link from "next-intl/link";

function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <ul className="flex gap-20 flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
          <h1 className="text-4xl font-bold cursor-pointer">
          <Link href={"/"} locale="en">
            <span className="text-black">Crombie</span>
            <span className="text-yellow">Wallet</span>
          </Link>
        </h1>
          <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Crombiewallet
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
