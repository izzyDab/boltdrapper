import React from 'react';

interface PortfolioFiltersProps {
  filters: {
    industry: string[];
    stage: string[];
    region: string[];
  };
  selectedFilters: {
    industry: string[];
    stage: string[];
    region: string[];
  };
  onFilterChange: (filterType: 'industry' | 'stage' | 'region', value: string) => void;
  onClearFilters: () => void;
}

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({ 
  filters, 
  selectedFilters, 
  onFilterChange,
  onClearFilters
}) => {
  const filterCount = 
    selectedFilters.industry.length + 
    selectedFilters.stage.length + 
    selectedFilters.region.length;
  
  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h3 className="text-xl font-bold text-white">Filter Companies</h3>
        
        {filterCount > 0 && (
          <button 
            onClick={onClearFilters}
            className="text-sm text-[#0066FF] hover:text-[#4D94FF] transition-colors"
          >
            Clear Filters ({filterCount})
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Industry Filter */}
        <div>
          <h4 className="text-sm font-medium text-white/70 mb-3">Industry</h4>
          <div className="flex flex-wrap gap-2">
            {filters.industry.map((industry) => (
              <button
                key={industry}
                className={`px-3 py-1 text-sm rounded-full border transition-all ${
                  selectedFilters.industry.includes(industry)
                    ? 'bg-[#0066FF] text-white border-[#0066FF]'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-white/40'
                }`}
                onClick={() => onFilterChange('industry', industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stage Filter */}
        <div>
          <h4 className="text-sm font-medium text-white/70 mb-3">Stage</h4>
          <div className="flex flex-wrap gap-2">
            {filters.stage.map((stage) => (
              <button
                key={stage}
                className={`px-3 py-1 text-sm rounded-full border transition-all ${
                  selectedFilters.stage.includes(stage)
                    ? 'bg-[#0066FF] text-white border-[#0066FF]'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-white/40'
                }`}
                onClick={() => onFilterChange('stage', stage)}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
        
        {/* Region Filter */}
        <div>
          <h4 className="text-sm font-medium text-white/70 mb-3">Region</h4>
          <div className="flex flex-wrap gap-2">
            {filters.region.map((region) => (
              <button
                key={region}
                className={`px-3 py-1 text-sm rounded-full border transition-all ${
                  selectedFilters.region.includes(region)
                    ? 'bg-[#0066FF] text-white border-[#0066FF]'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-white/40'
                }`}
                onClick={() => onFilterChange('region', region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilters;