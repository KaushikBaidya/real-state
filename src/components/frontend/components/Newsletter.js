import React from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ksbpvuj",
        "template_9tjnahq",
        e.target,
        "user_iyd2udpUqUledpx91xt15"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-3xl text-center px-5">
              Sign up for My <span className="text-darkBlue">Newsletter.</span>
            </h2>
          </div>
          <div>
            <form onSubmit={sendEmail} className="mt-2 sm:mt-5 sm:text-center">
              <input
                name="email"
                type="email"
                required
                className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="Enter your email"
              />

              <button className="rounded bg-darkBlue hover:bg-gray-400 hover:text-black px-4 py-3 text-white ml-1">
                Send me
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
