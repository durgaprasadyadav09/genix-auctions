import React, { useEffect, useState } from 'react';
import { getAuctions } from '../services/api';
import  Group from "../assets/Group.png";
import  ExploreAuctions from "../assets/ExploreAuctions.png";
import AuctionCard from '../components/auctioncard';

const HomePage = () => {
  const [auctions, setAuctions] = useState([]);

//   useEffect(() => {
//     const fetchAuctions = async () => {
//       const { data } = await getAuctions();
//       console.log(data); // Uncomment to see the fetched auctions in the console for testing purposes
//       setAuctions(data);
//     };
//     fetchAuctions();
//   }, []);

  return (
    <div>
      <img src={Group} alt="Group" className="mr-5" />
      <img src={ExploreAuctions} alt="Group" className="mr-5" />
      {/* <AuctionCard auctions={auctions} /> */}
      <div className="flex justify-center">
      <AuctionCard
        imageSrc="https://placehold.co/600x400?text=Sony+Black+Headphones"
        imageAlt="Sony Black Headphones"
        title="Sony Black Headphones"
        minBid="100"
        currentBid="157"
        timeLeft="1 day 12 hrs 43 minutes"
      />
      <AuctionCard
        imageSrc="https://placehold.co/600x400?text=Apple+AirPod+2nd+Gen"
        imageAlt="Apple AirPod 2nd Gen"
        title="Apple AirPod 2nd Gen"
        minBid="80"
        currentBid="95"
        timeLeft="1 day 12 hrs 43 minutes"
      />
      <AuctionCard
        imageSrc="https://placehold.co/600x400?text=Apple+AirPod+2nd+Gen"
        imageAlt="Apple AirPod 2nd Gen"
        title="Apple AirPod 2nd Gen"
        minBid="80"
        currentBid="95"
        timeLeft="1 day 12 hrs 43 minutes"
      />
      <AuctionCard
        imageSrc="https://placehold.co/600x400?text=Apple+AirPod+2nd+Gen"
        imageAlt="Apple AirPod 2nd Gen"
        title="Apple AirPod 2nd Gen"
        minBid="80"
        currentBid="95"
        timeLeft="1 day 12 hrs 43 minutes"
      />
    </div>
    </div>
  );
};

export default HomePage;
