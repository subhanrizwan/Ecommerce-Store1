import React from "react";
import { Button } from "@mui/material";

const CtaFooter = () => {
      
  return (
    <section className="cta-footer ">
        {/*  sm:w-2/5 sm:flex-col sm:items-center sm:mb-5*/}
      <div className="w-2/3 md:w-7/12 sm:w-9/12 flex justify-between flex-wrap bg-gray-100 mx-auto p-9 rounded shadow relative top-11 z-30">
        <div className="left mb-5 md:mb-0 sm:mb-0">
          <p >Ready to get started?</p>
          <p>Talk to us today </p>
        </div>
        <div className="right">
          <Button 
           className="h-9 w-32 md:text-xs md:w-40 md:h-12 " variant="contained">
              <span className="text-xs md:text-base">Get Started</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
