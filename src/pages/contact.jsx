import React from "react";

const contact = () => {
  return (
    <>
      <section className="w-full bg-gray-400">
          <div className="title-contact text-center p-5 mt-10 mb-0">
            <h1 class="text-4xl">Contact Us</h1>
          </div>
          <div className="form-wrap">
            {/* <div className="form md:w-3/4 bg-gray-300"> */}
              <div className="form-tagline bg-gray">
              <p className="text-center p-5 mb-5 pb-5">
              We're happy to answer questions or help you with returns.
              Please fill out the form below if you need assistance
              </p>
              </div>
              <div className="w-full flex justify-center">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
      />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign In
      </button>
      <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
</div>

            </div>
          {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default contact;
