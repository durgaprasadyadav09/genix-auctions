import React from 'react';
import  Vector from "../assets/Vector.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-pink-100 p-4 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={Vector} alt="Genix Auctions logo" className="mr-2" />
        <span className="text-black text-lg font-bold">Genix Auctions</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-black">Auctions <i className="fas fa-chevron-down"></i></button>
        </div>
        <div className="relative">
          <button className="text-black">Bidding <i className="fas fa-chevron-down"></i></button>
        </div>
        <div className="relative">
          <button className="text-black">About Us <i className="fas fa-chevron-down"></i></button>
        </div>
        <div className="relative">
          <button className="text-black">English <i className="fas fa-chevron-down"></i></button>
        </div>
        <button className="text-blue-600">Login</button>
        <Link to="/signup" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded">Get Started</Link>
      </div>
    </div>
  );
};

export default Header;
