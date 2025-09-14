"use client";
import React from "react";
import Image from "next/image"; 
// import imageone from "../../../public/images/imageone.jpg"; 
import erp from "../../../public/Images/ERP-Modules.png"; 

function HeroSection() {
  return (
    <section className="pb-5 overflow-hidden relative bg-gradient-to-b from-white via-[#b0b5e4] to-[#b0b5e4]">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-tr from-indigo-400/30 via-purple-300/30 to-pink-300/30 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-tr from-blue-300/30 via-indigo-300/30 to-cyan-200/30 rounded-full blur-3xl opacity-60 translate-x-1/4 sm:translate-x-1/3 translate-y-1/4 sm:translate-y-1/3 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative  mx-auto text-center pt-10 sm:pt-20 pb-5 px-4">
        <h1 className="text-2xl  md:text-5xl font-bold text-gray-900 leading-snug drop-shadow-md">
          Transforming Education with <br className="hidden md:block" />
          <span className="text-2xl  md:text-5xl font-bold text-gray-900 drop-shadow-md">
            Smart Digital Solutions
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
          Metaponder Solutions delivers next-generation SaaS platforms designed
          for Universities, Colleges, and Schools. With 20+ years of expertise in
          the education sector, we help institutions simplify operations, empower
          students, and drive better outcomes.
        </p>
      </div>

      {/* Floating small avatars */}
      <img
        src="https://cdn.prod.website-files.com/66a76e2a019784d7d9a1624d/66b46ae18dda7c04e57d3583_4-%20User%20Image.webp"
        alt="User 1"
        className="absolute left-4 sm:left-12 md:left-10 lg:left-35 top-1/6 xl:left-70  w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover shadow-lg animate-float"
      />
      <img
        src="https://cdn.prod.website-files.com/66a76e2a019784d7d9a1624d/66b46ae1ec7834b604f37f4c_2-%20User%20Image.webp"
        alt="User 2"
        className="absolute right-4 sm:right-12 md:right-10 lg:right-35 xl:right-70 top-1/6 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover shadow-lg animate-float animation-delay-1000"
      />

      {/* Hero Image */}
      <div className="relative flex justify-center max-h-[450px] mt-8 sm:mt-12 px-4">
        <Image
          src={erp}
          alt="Hero End"
          className="rounded-lg shadow-xl object-fill w-full max-w-[900px] h-auto"
          priority
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
