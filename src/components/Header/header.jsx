"use client";
import { useState } from "react";
import { IconButton, Badge, Link } from "@mui/material";
import { NavLink } from "react-router";
import CartDrawer from "../CartDrawer/drawer.jsx";
import SearchModal from "../SearchProducts/search.jsx";
import Logo from '../../../assets/images/logo/logo.png';
import { GoPerson } from "react-icons/go";
import { MdFacebook } from "react-icons/md";

import { useNavigate } from "react-router";

import
 {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // toggle signup page
  const navigate = useNavigate();
  const HandleSignup=()=>{
    return navigate('/signup')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 relative z-50">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between h-16 ml-1">
            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="md:hidden">
              <IconButton
                onClick={toggleMobileMenu}
                className="!text-black hover:!text-secondary"
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </div>

            {/* Logo - Left on desktop, center on mobile */}
            <div className="flex-shrink-0 md:flex-1 w-[72%]">
              <Link
                underline="none"
                className="flex items-center justify-center md:justify-start pl-5"
              >
                <div className="text-2xl text-center font-bold text-black">
                  {/* <h1>Store1</h1> */}
                  <img className="w-10" src={Logo} alt="" />
                  {/* <h1>Store</h1> */}
                </div>
              </Link>
            </div>

            {/* Navigation Menu - Hidden on mobile, centered on desktop */}
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <NavLink
                to="/"
                underline="none"
                className={({ isActive }) =>
                  `!text-black hover:!text-secondary font-medium transition-colors ${
                    isActive
                      ? "!text-secondary font-semibold"
                      : "!text-black font-normal"
                  }`
                }
              >
                Home
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </NavLink>
              <NavLink
                to="/about"
                underline="none"
                className={({ isActive }) =>
                  `!text-black  hover:!text-secondary font-medium transition-colors ${
                    isActive
                      ? "!text-secondary font-semibold"
                      : "!text-black font-normal"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/shop"
                underline="none"
                className={({ isActive }) =>
                  `!text-black  hover:!text-secondary font-medium transition-colors ${
                    isActive
                      ? "!text-secondary font-semibold"
                      : "!text-black font-normal"
                  }`
                }
              >
                Shop
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </NavLink>
              <NavLink
                to="/blog"
                underline="none"
                className={({ isActive }) =>
                  `!text-black  hover:!text-secondary font-medium transition-colors ${
                    isActive
                      ? "!text-secondary font-semibold"
                      : "!text-black font-normal"
                  }`
                }
              >
                Blog
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </NavLink>
              
              <NavLink
                to="/contact"
                underline="none"
                className={({ isActive }) =>
                  `!text-black  hover:!text-secondary font-medium transition-colors ${
                    isActive
                      ? "!text-secondary font-semibold"
                      : "!text-black font-normal"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center justify-end flex-1 md:flex-1 -translate-x-2">
              {/* Mobile - Only Cart */}
              <div className="md:hidden">
                <CartDrawer />
              </div>

              {/* Desktop - Search, Profile, Favorites with smaller gaps */}
              <div className="hidden md:flex items-center space-x-1 mr-3">
                {/* Search */}
                <SearchModal />
                {/* Profile */}
                <IconButton onClick={HandleSignup} className="!text-black hover:!text-secondary">
                  <GoPerson />
                </IconButton>
                {/* Favorites */}
                <IconButton className="relative !text-black hover:!text-secondary">
                  <Badge badgeContent={1} color="error" className="text-xs">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
                   <IconButton className="!text-black hover:!text-secondary">
                <CartDrawer />
                </IconButton>

                
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between p-4">
          <NavLink
            underline="none"
            className="flex items-center justify-center md:justify-start pl-5"
          >
            <div className="text-2xl text-center font-bold text-black">
              <h1>Store1</h1>
            </div>
          </NavLink>
          <IconButton
            onClick={toggleMobileMenu}
            className="!text-black hover:!text-secondary"
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* Menu Items */}
        <nav className="px-8 py-4">
          <div className="space-y-6">
            <NavLink
              to="/"
              underline="none"
              className={({ isActive }) =>
                `flex items-center justify-between !text-black  hover:!text-secondary font-medium text-lg transition-colors ${
                  isActive
                    ? "!text-secondary font-semibold"
                    : "!text-black font-normal"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Home
              {/* <KeyboardArrowDownIcon className="h-5 w-5" /> */}
            </NavLink>

            <NavLink
              to="/about"
              underline="none"
              className={({ isActive }) =>
                `block !text-black  hover:!text-secondary font-medium text-lg transition-colors ${
                  isActive
                    ? "!text-secondary font-semibold"
                    : "!text-black font-normal"
                }`
              }
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/shop"
              underline="none"
              className={({ isActive }) =>
                `flex items-center justify-between !text-black  hover:!text-secondary font-medium text-lg transition-colors ${
                  isActive
                    ? "!text-secondary font-semibold"
                    : "!text-black font-normal"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Shop
              {/* <KeyboardArrowDownIcon className="h-5 w-5" /> */}
            </NavLink>

            <NavLink
              to="/blog"
              underline="none"
              className={({ isActive }) =>
                `flex items-center justify-between !text-black  hover:!text-secondary font-medium text-lg transition-colors ${
                  isActive
                    ? "!text-secondary font-semibold"
                    : "!text-black font-normal"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Blog
              {/* <KeyboardArrowDownIcon className="h-5 w-5" /> */}
            </NavLink>

            <NavLink
              to="/pages"
              underline="none"
              className={({ isActive }) =>
                `flex items-center justify-between !text-black  hover:!text-secondary font-medium text-lg transition-colors ${
                  isActive
                    ? "!text-secondary font-semibold"
                    : "!text-black font-normal"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Pages
              {/* <KeyboardArrowDownIcon className="h-5 w-5" /> */}
            </NavLink>

            <NavLink
              to="/contact"
              underline="none"
              className={({ isActive }) =>
                `block !text-black  hover:!text-secondary font-medium text-lg transition-colors ${
                  isActive
                    ? "!text-secondary !font-semibold"
                    : "!text-black font-normal"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
