import Image from "next/image";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../../../public/Images/MetaponderNew footer.webp"; // Update path as needed

const Footer = () => {
  return (
    <footer className="bg-[#414a83] text-white relative overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Add background SVG or pattern here if you want */}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between md:items-start gap-10 relative z-10">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Metaponder Logo"
            width={300}
            height={60}
            className="object-contain"
            priority
          />

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-600 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#About" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="#WhyUs" className="hover:text-indigo-400 transition">Feature</a></li>
            <li><a href="#Products" className="hover:text-indigo-400 transition">Products</a></li>
            <li><a href="#Services" className="hover:text-indigo-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="max-w-sm space-y-4">
          <h3 className="font-semibold text-lg mb-4">Address</h3>
          <div className="flex items-start space-x-3">
            <FiMapPin className="mt-1 text-indigo-400" size={20} />
            <p className="text-gray-300">
              Metaponder Solutions Pvt. Ltd.<br />
              Phase VIIIA, Plot No. C-184, Industrial Area,<br />
              Sector 75, SAS Nagar Mohali, Punjab 160071
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FiMail className="text-indigo-400" size={20} />
            <a href="mailto:support@metaponder.com" className="hover:text-indigo-400 transition text-gray-300">
              support@metaponder.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FiPhone className="text-indigo-400" size={20} />
            <p className="text-gray-300">+91 9888352999</p>
          </div>

          <div className="flex items-center space-x-3">
            <FiClock className="text-indigo-400" size={20} />
            <p className="text-gray-300">Mon - Fri / 09:00 AM - 06:00 PM</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gradient-to-r from-[#263B80] via-[#4b5a9c] to-[#9199b7] text-center py-4 text-gray-200 text-lg">
        Copyright &copy; 2025 Metaponder
      </div>
    </footer>
  );
};

export default Footer;
