import React from "react";

function page() {
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer user-friendly financial tools to track income, expenses, investments, and provide valuable insights for informed decision-making.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Yes, your security is our top priority. We use advanced encryption and security measures to ensure your financial data is safe and protected.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at Crombiewallet@crombie.com or by phone at 333333333.",
    },
    {
      question: "Can I use the platform on mobile devices?",
      answer:
        "Yes, our platform is fully responsive and can be accessed on various devices, including smartphones and tablets.",
    },
  ];

  return (
      <section className="flex items-center bg-white lg:h-screen dark:bg-gray-800">
        <div className="max-w-5xl p-4 mx-auto">
          <div className="text-center mb-14">
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              FAQ
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-yellow"></div>
            </div>
            <p className="max-w-xl mx-auto text-gray-500">
            Here&apos;s a list of frequently asked questions to help you learn more about our services and offerings. 
            If you have any additional queries, feel free to reach out to us. We&apos;re here to assist you!
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
                    <span className="font-bold dark:text-white">{faq.question}</span>
                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
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

export default page;
{
  /* <>
<div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
  <div className="max-w-5xl w-full bg-white p-8 rounded shadow-lg">
    <h1 className="text-3xl font-bold mb-6 text-center">
      Frequently Asked Questions
    </h1>

    <div className="grid gap-6">
      {faqData.map((faq, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</div>
</> */
}
