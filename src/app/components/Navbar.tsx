"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"; // ✅ Added icon
import logo from "../../../public/Images/MetaponderLogo.webp";

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white w-full sticky top-0 z-50 shadow-md">
      <div className="  mx-auto px-6 md:px-5  xl:px-30">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Metaponder Logo"
              className="object-contain cursor-pointer h-10 sm:h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-x-9 lg:gap-x-10 relative">
            <Link href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              About
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Features
            </Link>

            {/* Product Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={toggleProductDropdown}
                className="text-gray-700 hover:text-indigo-600 font-medium transition flex items-center gap-1 cursor-pointer"
              >
                Product
                <FiChevronDown
                  className={`transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProductOpen && (
                <div className="fixed top-[82px] left-0 sm:left-5 lg:left-6 xl:left-10 w-[95%] bg-white shadow-lg border-t z-50 animate-fadeIn">
                  <div className="max-w-7xl mx-auto px-10 py-8 flex flex-wrap gap-8">
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-semibold text-gray-900 mb-2">Product 1</h4>
                      <p className="text-sm text-gray-600">This is the first product description.</p>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-semibold text-gray-900 mb-2">Product 2</h4>
                      <p className="text-sm text-gray-600">This is the second product description.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="#services" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Services
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-3xl text-gray-800 focus:outline-none">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t animate-slideDown">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
            <Link href="#features" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 font-medium">
              Features
            </Link>

            {/* Product Dropdown - Mobile */}
            <div>
              <button
                onClick={toggleProductDropdown}
                className="w-full flex items-center justify-between text-gray-700 hover:text-indigo-600 font-medium"
              >
                <span>Product</span>
                <FiChevronDown
                  className={`transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isProductOpen && (
                <div className="mt-3 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900">Product 1</h4>
                    <p className="text-sm text-gray-600 mt-1">This is the first product description.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900">Product 2</h4>
                    <p className="text-sm text-gray-600 mt-1">This is the second product description.</p>
                  </div>
                </div>
              )}
            </div>

            <Link href="#services" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 font-medium">
              Services
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
