import React from 'react';
import { Globe, Users, Briefcase as BriefcaseBusiness, BarChart } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const NetworkBenefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: <Globe size={32} className="text-[#0066FF]" />,
      title: "Global Reach",
      description: "Access our worldwide network spanning 24+ countries across North America, Europe, Asia, and beyond."
    },
    {
      icon: <Users size={32} className="text-[#0066FF]" />,
      title: "Expert Mentorship",
      description: "Connect with seasoned entrepreneurs and industry experts who have built and scaled successful companies."
    },
    {
      icon: <BriefcaseBusiness size={32} className="text-[#0066FF]" />,
      title: "Strategic Partnerships",
      description: "Leverage our corporate partnerships to accelerate your go-to-market strategy and customer acquisition."
    },
    {
      icon: <BarChart size={32} className="text-[#0066FF]" />,
      title: "Growth Resources",
      description: "Gain access to our proprietary resources, tools, and workshops designed to help you scale efficiently."
    }
  ];
  
  return (
    <section className="py-24 bg-[#0A0A19]" id="network">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A Network Built For Founder Success</h2>
            <p className="text-lg text-white/70 mb-8">
              When you join the Draper Venture Network, you're not just getting capital. You're gaining access to a global ecosystem designed to help your company thrive.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 pt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="px-8 py-3 bg-[#0066FF] text-white rounded-full font-medium text-lg hover:bg-[#0055CC] transition-all transform hover:scale-105">
                Join Our Network
              </button>
            </div>
          </div>
          
          <div className="bg-[#111130] rounded-xl p-6 md:p-8 border border-white/10">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Founder community" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Network Members Receive</h3>
              <ul className="space-y-3">
                {[
                  "Access to global LP networks",
                  "Portfolio company services and discounts",
                  "Participation in annual global summits",
                  "Founder-to-founder introduction channels",
                  "Cross-border expansion support",
                  "Co-investment opportunities"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0066FF] mr-2">✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
              <p className="text-white italic">
                "The Draper Network was instrumental in our expansion to Asia. Their connections and strategic advice helped us navigate complex regulatory environments and establish key partnerships."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-semibold text-white">Sarah Johnson</p>
                  <p className="text-xs text-white/50">CEO, TechFusion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkBenefits;