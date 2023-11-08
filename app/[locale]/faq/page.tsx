"use client"
import React from "react";
import { useTranslations } from "next-intl"

export default function FAQ() {
  const t = useTranslations("faq")

  const faqData = [
    {
      question: t("bullet-points.1.title"),
      answer: t("bullet-points.1.text"),
    },
    {
      question: t("bullet-points.2.title"),
      answer: t("bullet-points.2.text"),
    },
    {
      question: t("bullet-points.3.title"),
      answer: t("bullet-points.3.text"),
    },
    {
      question: t("bullet-points.4.title"),
      answer: t("bullet-points.4.title"),
    },
  ];

  return (
    <section className="flex items-center bg-white lg:h-screen dark-mode-bg">
      <div className="max-w-5xl p-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark-mode-font">
            FAQ
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-yellow"></div>
          </div>
          <p className="max-w-xl mx-auto text-gray-500">
            {t("title")}
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {faqData.map((faq, index) => (
              <div className="flex" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="mr-4 text-yellow"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <div className="flex-1">
                  <span className="font-bold dark-mode-font">{faq.question}</span>
                  <div className="mt-3 text-sm text-gray-500 dark-mode-font answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
