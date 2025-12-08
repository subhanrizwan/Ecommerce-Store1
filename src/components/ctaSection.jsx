import { Button } from "@mui/material";

const CtaFooter = () => {
  return (
    <section className="cta-footer ">
      <div className="w-[85%] md:w-7/12 sm:w-9/12 bg-gray-100 flex justify-between flex-wrap md:flex-nowrap sm:flex-nowrap sm:flex-nowrapF mx-auto p-9 rounded shadow relative top-11 z-30">
        <div className="w-full mb-5 text-center left-section md:text-left sm:text-left md:mb-0 sm:mb-0">
          <p>Ready to get started?</p>
          <p>Talk to us today </p>
        </div>
        <div className="flex justify-center w-full right-section md:justify-end sm:justify-end">
          <Button
            className="h-9 w-32 md:text-xs md:w-40 md:h-12 !bg-secondary"
            variant="contained"
          >
            <span className="text-xs md:text-base">Get Started</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
