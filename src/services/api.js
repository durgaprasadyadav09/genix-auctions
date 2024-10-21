import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getAuctions = async () => {
  return await axios.get(`${API_URL}/auctions`);
};

export const getAuctionById = async (id) => {
  return await axios.get(`${API_URL}/auctions/${id}`);
};

export const getBidHistory = async (id) => {
  return await axios.get(`${API_URL}/auctions/${id}/bids`);
};

export const placeBid = async (id, bidAmount, token) => {
  return await axios.post(`${API_URL}/auctions/${id}/bid`, { bidAmount }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
