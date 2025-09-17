import React from "react";
import imagetwo from '../../../public/Images/imagetwo.jpg';


function Abouttwo() {
  return (
    <section className=" flex flex-col items-center justify-center text-center px-6 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">OUR MISSION</h1>

      {/* Image with blur + black overlay + text */}
      <div className="w-full relative">
        {/* Blurred Image */}
        <img
          src="/Images/imagetwo.jpg"
          alt="vision"
          className="rounded-2xl w-full h-[500px] object-cover blur-sm shadow-blue-500"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0  bg-black/40  rounded-2xl "></div>

        {/* Text on top of image */}
        <div className="absolute inset-0 flex flex-col items-center justify-cente text-black px-6 ">
          <h2 className="text-4xl font-bold mt-50 ">Building a Better Future</h2>
          <p className="text-lg max-w-2xl ">
            Our vision is to empower individuals and businesses through
            innovation, creativity, and collaboration. Together, we move toward
            growth and success.
          </p> 
        </div>
      </div>
    </section>
  );
}

export default Abouttwo;
