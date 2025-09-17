"use client";
import React from "react";

function Abouttwo() {
  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 py-8">
      <div className="w-full relative">
        {/* Background Image */}
        <img
          src="/Images/imagethree.jpg"
          alt="vision"
          className="rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover blur-sm shadow-blue-200"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 "></div>

        {/* Text on top of image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-10 space-y-6">
          
          {/* Heading + Intro (centered) */}
          <div className="text-center max-w-xl sm:max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">OUR MISSION</h2>
            <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
              At Metaponder Solutions, our mission is to transform education
              through technology by building intelligent digital ecosystems
              that serve institutions, students, and educators alike.
            </p>
          </div>

          {/* Commitment List (left-aligned on larger screens, centered on small) */}
          <div className="w-full max-w-3xl mt-2 text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              We are committed to
            </h3>
            <ul className="text-xs sm:text-sm md:text-base space-y-2">
              <li>✅ Simplifying Institutional Operations – Automating workflows to save time, reduce errors, and improve efficiency.</li>
              <li>✅ Empowering Students – Providing tools that support learning, progress tracking, and career growth.</li>
              <li>✅ Supporting Educators – Enabling teachers and administrators with digital resources to make informed decisions.</li>
              <li>✅ Ensuring Transparency & Trust – Delivering clear insights and reliable systems that enhance accountability.</li>
              <li>✅ Driving Digital Growth – Helping institutions embrace innovation to stay future-ready in the evolving education landscape.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abouttwo;
