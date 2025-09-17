import React from 'react';
import ums from '../../../public/Images/ums.png';

function Ums() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-10">
      {/* Blurred Image */}
      <img 
        src={ums.src} 
        alt="ums" 
        className="w-full rounded-2xl filter blur-sm"
      />

      {/* Light Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/50 rounded-2xl"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">UMS</h1>
        <p className="max-w-3xl text-lg sm:text-xl text-gray-800 leading-relaxed">
          A University Management System (UMS) is an end-to-end digital platform designed to streamline 
          and automate the complete academic and administrative lifecycle of a university. It manages 
          every stage—from student enrollment, admissions, roll number generation, and returns submission 
          to exam form filling, exam center setup with superintendent allocation, attendance management, 
          challan printing, and secure packet generation for the secrecy branch. UMS also includes advanced 
          examination features such as fictitious roll number generation, packet allocation to evaluators, 
          dual marks entry, automated result declaration, and degree issuance. It ensures fast and accurate 
          result processing with support for Marks system and Grading system, division, and merit list 
          generation, along with the bulk printing of DMCs, transcripts, and degrees. Beyond examinations, 
          UMS integrates fee module, inventory, transport, and hostel management, giving universities a 
          centralized system for academic and administrative control.
        </p>
      </div>
    </div>
  );
}

export default Ums;
