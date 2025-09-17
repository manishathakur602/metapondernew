import React from 'react';

import erp from '../../../public/Images/ERP-Modules.png';
import color from '../../../public/Images/multicolor.webp';

function Product() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col items-center p-8">
            <img 
              src={erp.src} 
              alt="University Management System" 
              className="rounded-xl w-full h-64 md:h-72 object-cover mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
              University Management System (UMS)
            </h3>
            <p className="text-gray-700 text-center text-base md:text-lg mb-6">
              From admissions to degree processing, everything in one secure platform.
            </p>
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Read More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col items-center p-8">
            <img 
              src={color.src} 
              alt="School ERP System" 
              className="rounded-xl w-full h-64 md:h-72 object-cover mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
              School ERP System
            </h3>
            <p className="text-gray-700 text-center text-base md:text-lg mb-6">
              Connecting teachers, students, parents, and administrators in one system.
            </p>
            <button className="bg-blue-600 text-white cursor-pointer px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Product;
