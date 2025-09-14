"use client";
import React from "react";
import Image from "next/image";
import women from "../../../public/images/woman.png";

const SectionE = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#263B80] via-[#4b5a9c] to-[#9199b7] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_50%)]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Text Content */}
        <div className="text-white w-full md:w-1/2 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Metaponder <span className="text-yellow-400">Solution</span>
          </h1>

          <p className="mb-8 text-gray-200 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            porro consequuntur amet, recusandae facilis hic culpa aliquam
            molestiae neque vero atque adipisci rem ad voluptatum reprehenderit
            tempore nulla! Beatae, veniam.
          </p>

          <ul className="space-y-6">
            {[
              { step: 1, title: "Contact Us", desc: "Lorem ipsum dolor sit amet." },
              { step: 2, title: "Consult", desc: "Lorem ipsum dolor sit amet." },
              { step: 3, title: "Place Order", desc: "Lorem ipsum dolor sit amet." },
              { step: 4, title: "Payment", desc: "Lorem ipsum dolor sit amet." },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex items-start hover:translate-x-2 transition-transform">
                <span className="bg-white text-[#263B80] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shadow-lg hover:scale-110 transition-transform">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-300">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <button className="border cursor-pointer border-white text-white hover:bg-white hover:text-[#263B80] hover:shadow-lg transition px-8 py-3 rounded-full font-bold">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className="
              w-[250px] h-[400px] 
              sm:w-[300px] sm:h-[450px] 
              md:w-[400px] md:h-[550px] 
              lg:w-[500px] lg:h-[600px]
              rounded-xl overflow-hidden shadow-2xl 
              relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
            "
          >
            <Image
              src={women}
              alt="Women"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionE;
