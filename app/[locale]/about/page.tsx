import React from "react";

function page() {
  return (
    <div className=" bg-white">
      <section className="flex items-center   lg:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              What we do
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-yellow"></div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-3xl font-bold text-gray-700 dark:text-gray-300">
                We are providing a better facility
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                At Crombiewallet, we are committed to empowering individuals to
                take control of their finances and make informed decisions
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
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
                  We offer intuitive and easy-to-use tools that allow you to
                  track your income and expenses effortlessly.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
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
                  Data Security: Your security is our top priority
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
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
                  Reliable Support: Our support team is always ready to assist you with any questions or concerns you may have
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
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
                  Continuous Improvement: We are dedicated to continuously improving our platform based on your feedback
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative">
                        <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="aboutimage"
                            className="relative z-10 object-cover w-full h-full rounded"/>
                        <div
                            className="absolute bottom-0 right-0 z-10 p-4 bg-white shadow sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                            <p className="text-sm font-semibold">
                                Providing business solutions from 10 years
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

export default page;

// function page() {
//   return (
//     <>
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
//       <div className="max-w-5xl w-full bg-white p-8 rounded shadow-lg">
//         <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Mission Card */}
//           <div className="bg-blue-100 p-6 rounded shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Our Mission</h2>
//             <p className="text-gray-700">
//               At Crombiewallet, we are committed to empowering individuals
//               to take control of their finances and make informed decisions...
//             </p>
//           </div>

//           {/* Who We Are Card */}
//           <div className="bg-green-100 p-6 rounded shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Who We Are</h2>
//             <p className="text-gray-700">
//             Crombiewallet is a dedicated team of passionate individuals
//               who believe in the power of financial literacy...
//             </p>
//           </div>
//         </div>

//         {/* What We Offer Card */}
//         <div className="bg-yellow-100 p-6 rounded shadow-lg mt-6">
//           <h2 className="text-xl font-bold mb-4">What We Offer</h2>
//           <ul className="list-disc text-gray-700 pl-6">
//             <li>
//               User-Friendly Financial Tools: We offer intuitive and easy-to-use
//               tools that allow you to track your income, expenses, and
//               investments effortlessly.
//             </li>
//             <li>Data Security: Your security is our top priority...</li>
//             <li>
//               Reliable Support: Our support team is always ready to assist you
//               with any questions or concerns you may have...
//             </li>
//             <li>
//               Continuous Improvement: We are dedicated to continuously improving
//               our platform based on your feedback...
//             </li>
//           </ul>
//         </div>

//         {/* Contact Us Card */}
//         <div className="bg-pink-100 p-6 rounded shadow-lg mt-6">
//           <h2 className="text-xl font-bold mb-4">Contact Us</h2>
//           <p className="text-gray-700">
//             Have questions or feedback? We would love to hear from you! Feel
//             free to reach out to us at:
//             <br />
//             - Email: Crombiewallet@crombie.com
//             <br />
//             - Phone: 33333333333
//             <br />- Address: 333333333333
//           </p>
//         </div>

//         {/* Social Media Links Card */}
//         <div className="bg-purple-100 p-6 rounded shadow-lg mt-6">
//           <h2 className="text-xl font-bold mb-4">Follow Us</h2>
//           <p className="text-gray-700">
//             Stay connected with us on social media for updates, financial tips,
//             and more:
//             <br />
//             - Facebook: Crombiewallet
//             <br />
//             - Twitter: Crombiewallet
//             <br />
//             - Instagram: Crombiewallet
//             <br />- LinkedIn: Crombiewallet
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default page;
