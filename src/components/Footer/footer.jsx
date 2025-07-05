import React from "react";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import CtaFooter from "../ctaSection";
import FooterBottom from "./footerBottom";
function Footer() {
  return (
    <>
      <CtaFooter />
      <div className="container">
        <footer className="flex sm:flex-wrap flex-wrap bg-primary mx-auto md:w-screen sm:w-screen md:justify-center border-b border-gray-700 p-5 pb-3 mt-5">
          <div className="step1 md:w-[35%] sm:h-68 p-5 text-textFooter">
            <div className="resturant-title pr-16">
              <h1 className="text-4xl md:text-2xl pb-3">Logo</h1>
              <p className="pt-5 text-1xl md:text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                veniam recusandae nulla nulla nulla nulla nulla nulla nulla{" "}
              </p>
            </div>
            <div className="social-icons md:w-72 md:flex flex space-x-10 md:space-x-5 pt-8">
              <Link>
                <FaLinkedin className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <FaGithub className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <FaTwitter className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <MdMarkEmailUnread className="text-3xl md:text-2xl" />
              </Link>
            </div>
          </div>
          <div className="step3 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-textFooter">
            <h2 className="text-2xl">Account</h2>
            <ul className="pt-5 text-1xl">
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>My Account</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Login / Register</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Cart</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500 ">
                <Link>Wishlist</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Shop</Link>
              </li>
            </ul>
          </div>
          <div className="step4 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-textFooter">
            <h2 className="text-2xl">Quick Links</h2>
            <ul className="pt-5 text-1xl">
              <li className="pb-2">
                <Link>Privacy Policy</Link>
              </li>
              <li className="pb-2">
                <Link>Term of use</Link>
              </li>
              <li className="pb-2">
                <Link>FAQ</Link>
              </li>
              <li className="pb-2">
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="step2 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-textFooter">
            <h2 className="text-2xl">Support</h2>
            <ul className="pt-5 text-1xl">
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Address</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Email</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Phone</Link>
              </li>
            </ul>
          </div>
        </footer>
        <FooterBottom />
      </div>
    </>
  );
}

export default Footer;
