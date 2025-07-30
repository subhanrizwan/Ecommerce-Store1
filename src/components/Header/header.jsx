
"use client"

import { useState } from "react"
import { IconButton, Badge, Link } from "@mui/material"
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 relative z-50">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between h-16 ml-1">
            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="md:hidden">
              <IconButton onClick={toggleMobileMenu} className="text-gray-600 hover:text-secondary" size="large">
                <MenuIcon />
              </IconButton>
            </div>

            {/* Logo - Left on desktop, center on mobile */}
            <div className="flex-shrink-0 md:flex-1">
              <Link underline="none" className="flex items-center justify-center md:justify-start pl-5">
                <div className="text-2xl text-center font-bold text-gray-500"><h1>Store1</h1></div>
              </Link>
            </div>

            {/* Navigation Menu - Hidden on mobile, centered on desktop */}
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <Link
                href="/"
                underline="none"
                className="flex items-center !text-gray-800 hover:!text-secondary font-medium transition-colors"
              >
                Home
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </Link>
              <Link
                href="/about"
                underline="none"
                className="!text-gray-800 hover:!text-secondary font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/shop"
                underline="none"
                className="flex items-center !text-gray-800 hover:!text-secondary font-medium transition-colors"
              >
                Shop
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </Link>
              <Link
                href="/blog"
                underline="none"
                className="flex items-center !text-gray-800 hover:!text-secondary font-medium transition-colors"
              >
                Blog
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </Link>
              <Link
                href="/pages"
                underline="none"
                className="flex items-center !text-gray-800 hover:!text-secondary font-medium transition-colors"
              >
                Pages
                {/* <KeyboardArrowDownIcon className="ml-1 h-4 w-4" /> */}
              </Link>
              <Link
                href="/contact"
                underline="none"
                className="!text-gray-800 hover:!text-secondary font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center justify-end flex-1 md:flex-1 -translate-x-2">
              {/* Mobile - Only Cart */}
              <div className="md:hidden">
                <IconButton className="relative text-gray-600 hover:!text-secondary">
                  <Badge badgeContent={0} color="error" className="text-xs">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </div>

              {/* Desktop - Search, Profile, Favorites with smaller gaps */}
              <div className="hidden md:flex items-center space-x-1 mr-3">
                {/* Search */}
                <IconButton className="text-gray-600 hover:!text-secondary">
                  <SearchIcon />
                </IconButton>

                {/* Profile */}
                <IconButton className="text-gray-600 hover:!text-secondary">
                  <PersonIcon />
                </IconButton>

                {/* Favorites */}
                <IconButton className="relative text-gray-600 hover:!text-secondary">
                  <Badge badgeContent={2} color="error" className="text-xs">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <IconButton onClick={toggleMobileMenu} className="text-white hover:text-teal-400" size="large">
            <CloseIcon />
          </IconButton>
        </div>

        {/* Menu Items */}
        <nav className="px-6 py-4">
          <div className="space-y-6">
            <Link
              href="/"
              underline="none"
              className="flex items-center justify-between text-teal-400 hover:text-teal-300 font-medium text-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
              <KeyboardArrowDownIcon className="h-5 w-5" />
            </Link>

            <Link
              href="/about"
              underline="none"
              className="block text-white hover:text-teal-400 font-medium text-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </Link>

            <Link
              href="/shop"
              underline="none"
              className="flex items-center justify-between text-teal-400 hover:text-teal-300 font-medium text-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              Shop
              <KeyboardArrowDownIcon className="h-5 w-5" />
            </Link>

            <Link
              href="/blog"
              underline="none"
              className="flex items-center justify-between text-teal-400 hover:text-teal-300 font-medium text-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              Blog
              <KeyboardArrowDownIcon className="h-5 w-5" />
            </Link>

            <Link
              href="/pages"
              underline="none"
              className="flex items-center justify-between text-teal-400 hover:text-teal-300 font-medium text-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              Pages
              <KeyboardArrowDownIcon className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              underline="none"
              className="block text-white hover:text-teal-400 font-medium text-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
