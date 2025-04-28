import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import PortfolioShowcase from './components/PortfolioShowcase/PortfolioShowcase';
import NetworkBenefits from './components/NetworkBenefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0D0D1F] min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <PortfolioShowcase />
      <NetworkBenefits />
      <Footer />
    </div>
  );
}

export default App;