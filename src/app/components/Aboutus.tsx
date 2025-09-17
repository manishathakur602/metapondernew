import React from 'react'
import imageseven from '../../../public/Images/imageseven.jpg';

function Aboutus() {
  return (
    <section className="bg-blue-950 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:px-8">
        
        {/* Image Left */}
        <img 
          src={imageseven.src} 
          alt="About Metaponder" 
          className="flex-1 rounded-2xl w-full sm:w-[70%] md:w-[45%] lg:w-[50%] h-auto mx-auto md:mx-0 shadow-xl"
        />

        {/* Text Right */}
        <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left mt-6 md:mt-0">
          {/* About Us Title */}
          <h3 className="text-indigo-300 text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide">
            About Us
          </h3>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
            Metaponder Solution
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Metaponder delivers next-gen SaaS solutions for educational institutions. 
            With 20+ years of experience, we help streamline operations, 
            enhance student experiences, and drive better outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
