import React from 'react';
import  Vector from "../assets/Vector.png";

const Footer = () => {
  return (
    <div className="bg-[#0B1120] text-white py-10">
      <div className="container mx-auto flex justify-between items-start">
        {/* Logo and Title */}
        <div className="flex items-start">
          <img src={Vector} alt="Genix Auctions logo" className="mr-3" />
          <span className="text-xl font-semibold">Genix Auctions</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-16">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div>
            <a href="#" className="hover:underline">Auctions</a>
          </div>
          <div>
            <a href="#" className="hover:underline">Bidding</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="text-center mt-10 text-gray-400">
        © Copyright 2024, All Rights Reserved by Genix
      </div>
    </div>
  );
};

export default Footer;
