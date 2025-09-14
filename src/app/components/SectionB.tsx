"use client";
import React from "react";
import Image from "next/image";
import multicolor from "../../../public/Images/multicolor.webp";

function SectionB() {
  return (
    <section className="relative bg-gradient-to-br from-[#f9f9f9] via-white to-[#f1f5f9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-5 text-gray-700 sm:text-lg leading-relaxed">
            We help universities, colleges, and schools transform administrative
            processes into intelligent workflows — simplifying operations,
            improving decision-making, and enhancing student experiences.
          </p>
        </div>

        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
         
          <div className="flex justify-center">
            <div className="relative group">
              <Image
                src={multicolor}
                alt="Color"
                className="rounded-2xl object-cover w-full h-auto max-w-sm shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          
          <div className="text-center bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer p-6 transition-all">
            <div className="mx-auto flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full shadow">
              <span className="font-extrabold text-4xl">✓</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Reliability
            </h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              We ensure that your business operations never face a disruption
              with our on-time, dependable deliveries.wdjkwsnfkwehfiewfkjwebdfjrdhifhnjr
              wdnjsncksdbckjdgbcohdv dhvb ayusdb ds 
              nclksdjbcjdsvchueghfcivdbvjdbv
              bedhvj njdshbvuidshuvdhsu
            </p>
          </div>

          
          <div className="text-center bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl p-6 transition-all">
            <div className="mx-auto flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full shadow">
              <span className="font-extrabold text-4xl mb-2">★</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Quality
            </h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed"> 
              We source and deliver only the highest quality services, meeting
              stringent standards to support your success.
              dhvjkdbjc csdbgcusbcubszbc cnvfbc bfjbv jkf
              ndjkcbdsvbjfdbvjdfvfbjdbcjdfvijfdvkfnvmkfb
              dckdlbjfegjfdvkmbcj biuh fjibfkjbvjdchv
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionB;
