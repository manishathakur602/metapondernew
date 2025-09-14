"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageone from "../../../public/images/imageone.jpg";

const SectionA = () => {
  const [active, setActive] = useState("university");

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The platform to help your business grow
          </h1>
          <p className="text-base sm:text-lg text-black mb-8 max-w-xl mx-auto md:mx-0">
            End-to-end payments, data, and financial management in a single
            solution. Meet the financial technology platform that helps you
            realize your ambitions faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => setActive("university")}
              className={`px-6 sm:px-8 py-3 text-base  cursor-pointer sm:text-lg rounded-lg transition-colors duration-300 ${
                active === "university"
                  ? "bg-[#0D1B4C] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              University
            </button>
            <button
              onClick={() => setActive("college")}
              className={`px-6 sm:px-8 py-3 text-base sm:text-lg cursor-pointer rounded-lg transition-colors duration-300 ${
                active === "college"
                  ? "bg-[#0D1B4C] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              College
            </button>
          </div>
        </div>

        {/* Right Side Image (Responsive & Larger on Desktop) */}
        <div className="flex-[1.2] lg:flex-[1.5] w-full">
          <Image
            src={imageone}
            alt="Business growth"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SectionA;
