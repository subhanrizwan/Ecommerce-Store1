import React from "react";

const Herosection = ({ Home, About }) => {
  return (
    <>
      <section>
        <div className="container hero-section">
          <div className="flex justify-center w-screen h-[90vh]">
            <div className="w-full sm:w-full md:w-2/3 lg:w-full bg-gray-400 h-auto">
              <h1 className="text-4xl text-center fw-bold mt-32">
                {Home?.name}
                {About?.name}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
