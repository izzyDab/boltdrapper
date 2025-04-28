import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CompanyData } from '../../types';

interface SuccessStoryCardProps {
  company: CompanyData;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ company }) => {
  return (
    <div className="bg-[#111130] rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,102,255,0.1)] hover:scale-[1.02] border border-white/10 hover:border-[#0066FF]/30">
      <div className="h-40 bg-gradient-to-r from-[#0D0D1F] to-[#111130] flex items-center justify-center p-6">
        <img 
          src={company.logoUrl} 
          alt={`${company.name} logo`} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{company.name}</h3>
          <span className="px-3 py-1 text-xs bg-[#0066FF]/20 text-[#0066FF] rounded-full">
            {company.stage}
          </span>
        </div>
        
        <p className="text-white/70 mb-4 line-clamp-3">{company.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-xs bg-[#0D0D1F] text-white/70 rounded-full">
            {company.industry}
          </span>
          <span className="px-2 py-1 text-xs bg-[#0D0D1F] text-white/70 rounded-full">
            {company.region}
          </span>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
          <div className="flex items-center">
            <img 
              src={company.founderImageUrl} 
              alt={company.founderName} 
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="text-sm font-semibold text-white">{company.founderName}</p>
              <p className="text-xs text-white/50">Founder & CEO</p>
            </div>
          </div>
          
          <a 
            href={company.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-[#0066FF] hover:text-[#4D94FF] transition-colors text-sm font-semibold"
          >
            <span className="mr-1">Visit Website</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;