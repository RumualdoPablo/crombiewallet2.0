
function page() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="max-w-5xl w-full bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-blue-100 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At [Your Project Name], we are committed to empowering individuals
              to take control of their finances and make informed decisions...
            </p>
          </div>

          {/* Who We Are Card */}
          <div className="bg-green-100 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700">
              [Your Project Name] is a dedicated team of passionate individuals
              who believe in the power of financial literacy...
            </p>
          </div>
        </div>

        {/* What We Offer Card */}
        <div className="bg-yellow-100 p-6 rounded shadow-lg mt-6">
          <h2 className="text-xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc text-gray-700 pl-6">
            <li>
              User-Friendly Financial Tools: We offer intuitive and easy-to-use
              tools that allow you to track your income, expenses, and
              investments effortlessly.
            </li>
            <li>Data Security: Your security is our top priority...</li>
            <li>
              Reliable Support: Our support team is always ready to assist you
              with any questions or concerns you may have...
            </li>
            <li>
              Continuous Improvement: We are dedicated to continuously improving
              our platform based on your feedback...
            </li>
          </ul>
        </div>

        {/* Contact Us Card */}
        <div className="bg-pink-100 p-6 rounded shadow-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or feedback? We would love to hear from you! Feel
            free to reach out to us at:
            <br />
            - Email: [Your Email Address]
            <br />
            - Phone: [Your Phone Number]
            <br />- Address: [Your Company Address]
          </p>
        </div>

        {/* Social Media Links Card */}
        <div className="bg-purple-100 p-6 rounded shadow-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <p className="text-gray-700">
            Stay connected with us on social media for updates, financial tips,
            and more:
            <br />
            - Facebook: [Your Facebook Page]
            <br />
            - Twitter: [Your Twitter Handle]
            <br />
            - Instagram: [Your Instagram Handle]
            <br />- LinkedIn: [Your LinkedIn Page]
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default page;
