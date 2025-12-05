import { Link } from "react-router";
import CtaFooter from "../ctaSection";
import FooterBottom from "./footerBottom";
import Logo from "../../../assets/images/logo/logo.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Footer() {
  return (
    <>
      <CtaFooter />
      <section className="">
        <div className="container">
          <footer className="relative flex flex-wrap px-5 py-16 pb-3 pb-10 mx-auto mt-5 bg-gray-100 border-b border-gray-200 sm:flex-wrap md:w-screen sm:w-screen md:justify-center">
            <span className="absolute w-32 h-32 bg-teal-400 rounded-full opacity-15 -bottom-8 right-1/3 animate-[float_4s_ease-in-out_infinite_2s]"></span>
            <span className="absolute w-20 h-20 bg-teal-400 rounded-full opacity-15 top-1/3 -right-8 animate-[float_4s_ease-in-out_infinite_1s]"></span>
            <div className="step1 md:w-[30%] sm:h-68 p-5 text-textFooter">
              <div className="pr-6 title">
                <img className="w-16 h-16 mb-4" src={Logo} alt="" />
                <p className="pt-5 mb-10 text-md md:text-md">
                  Bringing you quality products at the best prices, delivered
                  right to your doorstep. From gadgets to fashion, we make
                  shopping simple, safe, and fun.
                </p>
              </div>
              <div className="flex gap-x-2 gap-y-4 md:gap-x-4">
                <Button
                  className="w-28 md:w-36 h-10 md:h-12 !bg-[#00C7B1] hover:!bg-[#00A08C] !text-white gap-1 !rounded-md !shadow-lg !transition-all !duration-300" // Teal color from screenshot
                  variant="contained"
                >
                  Shop
                  <ArrowOutwardIcon fontSize="small" />
                </Button>
                <Button
                  className="w-28 md:w-36 h-10 md:h-12 !bg-[#00C7B1] hover:!bg-[#00A08C] !text-white gap-1 !rounded-md !shadow-lg !transition-all !duration-300" // Teal color from screenshot
                  variant="contained"
                >
                  Shop
                  <ArrowOutwardIcon fontSize="small" />
                </Button>
              </div>
            </div>
            <div className="step3 menus md:w-[18%] sm:w-[40%] w-[100%] md:h-92 p-5 text-textFooter mb-5">
              <h2 className="text-2xl">Pages</h2>
              <ul className="pt-5 text-1xl">
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link to='/home'>Home</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link to=''>About Us</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Integrations</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Features</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Pricing</Link>
                </li>
                <li className="duration-500 hover:translate-x-4">
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="step4 z-50 menus md:w-[18%] sm:w-[40%] w-[100%] md:h-92 p-5 text-textFooter">
              <h2 className="text-2xl">Quick Links</h2>
              <ul className="pt-5 text-1xl">
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Privacy Policy</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Term of Use</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>FAQ</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Contact</Link>
                </li>
                <li className="mb-5 duration-500 hover:translate-x-4">
                  <Link>Blog</Link>
                </li>
                <li className="duration-500 hover:translate-x-4">
                  <Link>Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="step2 menus md:w-[32%] sm:w-[60%] w-[100%] shadow md:h-92 p-12 py-14 text-textFooter bg-white rounded-3xl">
              <h2 className="mb-4 font-bold text-1xl text-secondary">
                Address
              </h2>
              <div className="mb-4 text-2xl md:text-4xl">
                <h1>Ready to get started?</h1>
              </div>
              <div className="mb-4">
                <p className="text-gray-500">
                  It is a long established fact that a reader will be distracted
                  layout.
                </p>
              </div>
              <ul className="pt-2 text-1xl">
                <li className="flex items-center gap-4 py-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardbg text-secondary">
                    <MdOutlineMarkEmailUnread className="text-2xl text-secondary" />
                  </div>
                  <Link className="">
                    example@gmail.com <br /> info@gmail.com
                  </Link>
                </li>

                <li className="flex items-center gap-4 py-3">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardbg text-secondary">
                  <FaPhoneVolume className="text-xl text-secondary" />
                </div>
                  <Link>
                    +92 111 0000000 <br /> +92 111 0000000{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <FooterBottom />
        </div>
      </section>
    </>
  );
}

export default Footer;
