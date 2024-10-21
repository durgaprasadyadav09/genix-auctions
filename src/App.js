import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import  Header from "./components/header";
import Footer from "./components/footer";
import SignUp from './components/signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/auctions/:id" element={<AuctionPage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
