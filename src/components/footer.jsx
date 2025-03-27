import React from "react";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="flex sm:flex-wrap flex-wrap bg-gray-200 mx-auto md:w-screen sm:w-screen md:justify-center p-5">
        <div className="step1 md:w-[35%] sm:h-68 p-5 text-black">
          <div className="resturant-title pr-16">
            <h1 className="text-4xl md:text-2xl pb-3" >Food Delivery</h1>
            <p className="pt-5 text-1xl md:text-md" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam recusandae nulla nulla nulla nulla nulla nulla nulla </p>
          </div>
          <div className="social-icons md:w-72 md:flex flex space-x-10 md:space-x-5 pt-8">
            <Link>
            <FaLinkedin className="text-3xl md:text-2xl" />
            </Link>
            <Link>
            <FaGithub className="text-3xl md:text-2xl"/>
            </Link>
            <Link>
            <FaTwitter className="text-3xl md:text-2xl"/>
            </Link>
            <Link>
            <MdMarkEmailUnread className="text-3xl md:text-2xl"/>
            </Link>
          </div>
        </div>
        <div className="step2 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-black">
          <h2 className="text-2xl" >Our Menus</h2>
          <ul className="pt-5 text-1xl">
            <li className="pb-2 hover:translate-x-4 duration-500">
              <Link>
              Chicken Burger
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
              <Link>
              Brief Burger
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
              <Link>
              Beef
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
            <Link>
              Meat
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
            <Link>
              Vegetable
              </Link>
            </li>
         
            <li className="pb-2 hover:translate-x-4 duration-500">
            <Link>
              Desert
              </Link>
            </li>
            <li className="pb-0 hover:translate-x-4 duration-500">
            <Link>
              Cold Drink
              </Link>
            </li>
          </ul>
          </div>
        <div className="step3 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-black">
        <h2 className="text-2xl" >Useful Links</h2>

        <ul className="pt-5 text-1xl">
            <li className="pb-2 hover:translate-x-4 duration-500">
              <Link>
              Home
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
              <Link>
              About Us
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
              <Link>
              Blog
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500 ">
            <Link>
              Contact Us
              </Link>
            </li>
            <li className="pb-2 hover:translate-x-4 duration-500">
            <Link>
              Privacy Policy
              </Link>
            </li>
            <li className="pb-0 hover:translate-x-4 duration-500">
            <Link>
              Faq Queries
              </Link>
            </li>
           
          </ul>
          </div>
        <div className="step4 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-black">
        <h2 className="text-2xl" >Contact us</h2>
        <ul className="pt-5 text-1xl">
            <li className="pb-2">
              <Link>
              Home
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              About Us
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Blog
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Contact Us
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Privacy Policy
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Faq Queries
              </Link>
            </li>
           
          </ul>
          </div>
        </footer>
       
       

      </div>
    </>
  );
}

export default Footer;