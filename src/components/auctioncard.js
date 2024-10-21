import React from 'react';

const AuctionCard = ({ imageSrc, imageAlt, title, minBid, currentBid, timeLeft }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 m-4 relative">
      <img className="w-full" src={imageSrc} alt={imageAlt} />
      <div className="px-6 py-4">
        <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
          Live Auction
        </span>
        <div className="font-bold text-xl my-2">{title}</div>
        <div className="flex justify-between items-center">
          <div className="text-gray-700 text-base">
            <span className="block">Minimum Bid</span>
            <span className="block">Current Bid</span>
          </div>
          <div className="text-right">
            <span className="block font-bold text-lg">${minBid}</span>
            <span className="block font-bold text-lg">${currentBid}</span>
          </div>
        </div>
        <div className="text-gray-700 text-base mt-2">
          <span className="block">Ends in: {timeLeft}</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full w-full">
          Bid now <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <i className="far fa-heart text-gray-500 absolute top-4 right-4"></i>
    </div>
  );
};

export default AuctionCard;
