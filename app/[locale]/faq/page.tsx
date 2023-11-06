import Footer from "@/components/Footer";
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
        "You can reach our customer support team via email at support@example.com or by phone at +1 (123) 456-7890.",
    },
    {
      question: "Can I use the platform on mobile devices?",
      answer:
        "Yes, our platform is fully responsive and can be accessed on various devices, including smartphones and tablets.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, we are transparent about our pricing. There are no hidden fees associated with using our financial management platform.",
    },
  ];

  return (
    <>
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
      <Footer />
    </>
  );
}

export default page;
