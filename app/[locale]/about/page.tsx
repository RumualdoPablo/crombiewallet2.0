"use client"
import React from "react";
import { useTranslations } from "next-intl"

export default function About() {

  const t = useTranslations("about");

  return (
    <div className=" bg-white">
      <section className="flex items-center   lg:h-screen font-poppins dark-mode-bg ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark-mode-font">
              {t("title")}
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-yellow"></div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-3xl font-bold text-gray-700 dark-mode-font">
              {t("subtitle")}
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark-mode-font">
              {t("bullet-points.text")}
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark-mode-font">
                  <span className="mr-3 text-yellow dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  {t("bullet-points.1")}
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark-mode-font">
                  <span className="mr-3 text-yellow dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  {t("bullet-points.2")}
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark-mode-font">
                  <span className="mr-3 text-yellow dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  {t("bullet-points.3")}
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark-mode-font">
                  <span className="mr-3 text-yellow dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  {t("bullet-points.4")}
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative">
                        <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="aboutimage"
                            className="relative z-10 object-cover w-full h-full rounded"/>
                        <div
                            className="absolute bottom-0 right-0 z-10 p-4 bg-white shadow sm:p-8 dark-mode-font dark-mode-bg ">
                            <p className="text-sm font-semibold">
                            {t("image-text")}
                            </p>
                        </div>
                        <div className="absolute hidden w-full h-full bg-yellow rounded -bottom-6 left-6 lg:block">
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
}

