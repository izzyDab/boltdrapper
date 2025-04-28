import React from 'react';
import { Globe, Network, TrendingUp } from 'lucide-react';

interface ValuePillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const ValueProposition: React.FC = () => {
  const valuePillars: ValuePillar[] = [
    {
      icon: <Globe size={48} className="text-[#0066FF]" />,
      title: "Global Network",
      description: "Access to a worldwide network of investors, entrepreneurs, and industry experts across 24 countries.",
      stat: "24+",
      statLabel: "Countries"
    },
    {
      icon: <Network size={48} className="text-[#0066FF]" />,
      title: "Unparalleled Support",
      description: "Comprehensive founder resources including mentorship, strategic partnerships, and operational expertise.",
      stat: "200+",
      statLabel: "Mentors"
    },
    {
      icon: <TrendingUp size={48} className="text-[#0066FF]" />,
      title: "Proven Track Record",
      description: "Decades of experience backing category-defining companies from seed to IPO and beyond.",
      stat: "35+",
      statLabel: "Years Experience"
    }
  ];
  
  return (
    <section className="py-24 bg-[#0A0A19]" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Entrepreneurs Choose Draper</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We combine the personal touch of a boutique firm with the global resources of an international network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-[#111130] p-8 rounded-xl border border-white/10 transition-all hover:border-[#0066FF]/30 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)]"
            >
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/70 mb-6">{pillar.description}</p>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-[#0066FF] mr-2">{pillar.stat}</span>
                <span className="text-white/50 text-sm">{pillar.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#portfolio" className="inline-flex items-center text-[#0066FF] hover:text-[#4D94FF] transition-colors">
            <span className="mr-2">See how we've helped founders succeed</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.33334L8.825 4.50834L13.475 9.16667H3.33334V10.8333H13.475L8.825 15.4917L10 16.6667L16.6667 10L10 3.33334Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;