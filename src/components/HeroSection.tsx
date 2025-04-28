import React from 'react';
import ParticleBackground from './ParticleBackground';

interface Stat {
  value: string;
  label: string;
}

const HeroSection: React.FC = () => {
  const stats: Stat[] = [
    { value: '$8.5B+', label: 'Capital Deployed' },
    { value: '25+', label: 'Unicorns Funded' },
    { value: '700+', label: 'Portfolio Companies' },
  ];
  
  return (
    <section className="relative min-h-screen flex items-center bg-[#0D0D1F] overflow-hidden" id="hero">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Empowering Visionaries to 
            <span className="text-[#0066FF] block">Transform Tomorrow</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8">
            A powerful global network of independent venture funds, working together to support extraordinary entrepreneurs changing the world.
          </p>
          
          <div className="flex flex-wrap gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-[#0066FF]">{stat.value}</span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#0066FF] text-white rounded-full font-medium text-lg hover:bg-[#0055CC] transition-all transform hover:scale-105">
              Pitch Your Startup
            </button>
            <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all">
              Explore Portfolio
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;