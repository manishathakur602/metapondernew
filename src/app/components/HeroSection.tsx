import React from 'react'
import imagefour from '../../../public/Images/imagefour.jpg';

function HeroSection() {
  return (
    <section className="min-h-full bg-gradient-to-r from-[#f0f4ff] via-[#fef6ff] to-[#fdfafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          
          {/* Text Left */}
          <div className="flex-1 space-y-6 sm:space-y-8 mt-10 sm:mt-14 md:mt-20 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-snug">
              <span className="text-blue-800">Revolutionizing</span> Education through Intelligent Digital Solutions
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed tracking-wide">
              <span className="font-bold text-base sm:text-lg lg:text-xl text-gray-900">Metaponder</span> pioneers next-generation SaaS solutions tailored 
              specifically for Universities, Autonomous Colleges, and Schools. 
              With over two decades of expertise in the education sector, 
              we empower institutions to streamline operations, enhance the 
              student experience, and drive measurable academic success. 
              Our innovative platforms are designed to transform educational 
              environments, fostering growth, efficiency, and improved outcomes 
              for both educators and students.
            </p>
          </div>

          {/* Image Right */}
          <div className="flex-1 flex justify-center">
            <img 
              src={imagefour.src}   
              alt="Education Solutions" 
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
