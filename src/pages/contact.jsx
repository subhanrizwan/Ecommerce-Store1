import React from "react";

const contact = () => {
  return (
    <>
      <section className="">
        <div className="container flex flex-col align-items-center justify-content-center">
          <div className="title-contact text-center p-5 mt-10 mb-5 bg-gray-400">
            <h1 class="text-4xl">Contact Us</h1>
          </div>

          <div className="form-wrap">
            <div className="form md:w-3/4 bg-gray-300">
              <div className="form-desc md:w-2/5 text-center">
              We're happy to answer questions or help you with returns.
              Please fill out the form below if you need assistance.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
