import React, { useState } from 'react';
import OrbitalVisualization from './OrbitalVisualization';
import SuccessStoryCard from './SuccessStoryCard';
import PortfolioFilters from './PortfolioFilters';
import { CompanyData } from '../../types';
import { MOCK_COMPANIES } from '../../data/mockCompanies';

const PortfolioShowcase: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<CompanyData | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{
    industry: string[];
    stage: string[];
    region: string[];
  }>({
    industry: [],
    stage: [],
    region: []
  });
  
  // Extract unique filter values
  const filters = {
    industry: [...new Set(MOCK_COMPANIES.map(company => company.industry))],
    stage: [...new Set(MOCK_COMPANIES.map(company => company.stage))],
    region: [...new Set(MOCK_COMPANIES.map(company => company.region))]
  };
  
  // Handle filter changes
  const handleFilterChange = (filterType: 'industry' | 'stage' | 'region', value: string) => {
    setSelectedFilters(prev => {
      // If already selected, remove it
      if (prev[filterType].includes(value)) {
        return {
          ...prev,
          [filterType]: prev[filterType].filter(item => item !== value)
        };
      } 
      // Otherwise, add it
      else {
        return {
          ...prev,
          [filterType]: [...prev[filterType], value]
        };
      }
    });
  };
  
  // Clear all filters
  const handleClearFilters = () => {
    setSelectedFilters({
      industry: [],
      stage: [],
      region: []
    });
  };
  
  // Filter companies based on selected filters
  const filteredCompanies = MOCK_COMPANIES.filter(company => {
    const industryMatch = selectedFilters.industry.length === 0 || 
      selectedFilters.industry.includes(company.industry);
    
    const stageMatch = selectedFilters.stage.length === 0 || 
      selectedFilters.stage.includes(company.stage);
    
    const regionMatch = selectedFilters.region.length === 0 || 
      selectedFilters.region.includes(company.region);
    
    return industryMatch && stageMatch && regionMatch;
  });
  
  return (
    <section className="py-24 bg-[#0D0D1F]" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative companies that are shaping the future across industries and continents.
          </p>
        </div>
        
        <PortfolioFilters 
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />
        
        <div className="mb-16">
          <OrbitalVisualization 
            companies={MOCK_COMPANIES}
            onCompanySelect={setSelectedCompany}
            selectedFilters={selectedFilters}
          />
        </div>
        
        <div className="mb-8 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Success Stories</h3>
          <p className="text-white/70">Showing {filteredCompanies.length} companies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.slice(0, 6).map((company) => (
            <SuccessStoryCard key={company.id} company={company} />
          ))}
        </div>
        
        {filteredCompanies.length > 6 && (
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all">
              View All Companies
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;