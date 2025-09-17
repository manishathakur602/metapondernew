"use client";
import React from "react";
import Image from "next/image";
import workplace from "../../../public/images/workplace.jpg";

const SectionD = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#263B80] via-[#4b5a9c] to-[#64697b] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_50%)]"></div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl aspect-square overflow-hidden shadow-2xl rounded-xl">
            <Image
              src={workplace}
              alt="Workplace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-white ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center sm:text-start">
         University Management System (UMS)
          </h2>

          <p className="text-gray-200 mb-10 text-base sm:text-lg leading-relaxed text-center sm:text-start">
           “End-to-End Automation for Universities & Autonomous College From admissions to degree processing, everything in one secure platform".

          </p>
          

          {/* Steps */}
          <div className="space-y-6">
            {[
              { num: 1, title: "Admissions & Enrolment",  },
              { num: 2, title: "Examination & Result Processing",  },
              { num: 3, title: "Academic & Curriculum Management", },
              { num: 4, title: "Degree & Transcript Generation", },
            ].map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white text-[#263B80] rounded-full font-bold shadow-lg hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="ml-1 cursor-pointer sm:ml-8 border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#263B80] hover:shadow-lg transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionD;
