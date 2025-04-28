import React, { useRef, useEffect, useState } from 'react';
import { CompanyData } from '../../types';

interface OrbitalVisualizationProps {
  companies: CompanyData[];
  onCompanySelect: (company: CompanyData) => void;
  selectedFilters: {
    industry: string[];
    stage: string[];
    region: string[];
  };
}

const OrbitalVisualization: React.FC<OrbitalVisualizationProps> = ({ 
  companies, 
  onCompanySelect,
  selectedFilters 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredCompany, setHoveredCompany] = useState<CompanyData | null>(null);
  
  // Filter companies based on selected filters
  const filteredCompanies = companies.filter(company => {
    const industryMatch = selectedFilters.industry.length === 0 || 
      selectedFilters.industry.includes(company.industry);
    
    const stageMatch = selectedFilters.stage.length === 0 || 
      selectedFilters.stage.includes(company.stage);
    
    const regionMatch = selectedFilters.region.length === 0 || 
      selectedFilters.region.includes(company.region);
    
    return industryMatch && stageMatch && regionMatch;
  });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Company nodes
    const companyNodes = filteredCompanies.map((company, index) => {
      // Create orbital positions based on company data
      const angle = (index / filteredCompanies.length) * Math.PI * 2;
      const distance = 100 + (company.valuation / 1000000000) * 50; // Scale orbit by valuation
      
      return {
        company,
        x: canvas.width / 2 + Math.cos(angle) * distance,
        y: canvas.height / 2 + Math.sin(angle) * distance,
        radius: 6 + (company.valuation / 1000000000), // Scale size by valuation
        angle,
        distance,
        orbitSpeed: 0.0003 / (company.valuation / 1000000000), // Inverse relationship - bigger companies orbit slower
        color: getIndustryColor(company.industry)
      };
    });
    
    // Handle mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      // Check if mouse is over any company node
      let isOverNode = false;
      for (const node of companyNodes) {
        const distance = Math.sqrt(
          Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2)
        );
        
        if (distance < node.radius + 5) {
          setHoveredCompany(node.company);
          canvas.style.cursor = 'pointer';
          isOverNode = true;
          break;
        }
      }
      
      if (!isOverNode) {
        setHoveredCompany(null);
        canvas.style.cursor = 'default';
      }
    };
    
    const handleClick = (event: MouseEvent) => {
      if (hoveredCompany) {
        onCompanySelect(hoveredCompany);
      }
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    
    // Animation loop
    let animationFrameId: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      const deltaTime = lastTimestamp ? timestamp - lastTimestamp : 0;
      lastTimestamp = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw center node (Draper Network)
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#0066FF';
      ctx.fill();
      
      // Draw orbit paths
      companyNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, node.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.stroke();
      });
      
      // Update and draw company nodes
      companyNodes.forEach(node => {
        // Update position
        node.angle += node.orbitSpeed * deltaTime;
        node.x = canvas.width / 2 + Math.cos(node.angle) * node.distance;
        node.y = canvas.height / 2 + Math.sin(node.angle) * node.distance;
        
        // Draw connection line to center
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = `rgba(${hexToRgb(node.color)}, 0.2)`;
        ctx.stroke();
        
        // Draw company node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        
        // Highlight if hovered
        if (hoveredCompany === node.company) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 15;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [filteredCompanies, hoveredCompany, onCompanySelect]);
  
  // Helper functions
  function getIndustryColor(industry: string): string {
    const colorMap: {[key: string]: string} = {
      'Fintech': '#29B6F6',
      'Healthcare': '#66BB6A',
      'AI': '#7E57C2',
      'SaaS': '#FFA726',
      'Consumer': '#EF5350',
      'Blockchain': '#AB47BC',
      'Enterprise': '#26A69A',
      'Other': '#78909C'
    };
    
    return colorMap[industry] || colorMap['Other'];
  }
  
  function hexToRgb(hex: string): string {
    // Remove # if present
    hex = hex.replace(/^#/, '');
    
    // Parse hex values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return `${r}, ${g}, ${b}`;
  }
  
  return (
    <div className="relative h-[500px] w-full">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full bg-transparent rounded-xl"
      />
      
      {hoveredCompany && (
        <div 
          className="absolute bg-[#111130] border border-white/10 p-3 rounded-lg shadow-lg z-10 pointer-events-none"
          style={{
            left: `${(typeof window !== 'undefined') ? window.event?.clientX : 0}px`,
            top: `${(typeof window !== 'undefined') ? window.event?.clientY : 0}px`,
            transform: 'translate(10px, 10px)'
          }}
        >
          <p className="font-bold text-white">{hoveredCompany.name}</p>
          <p className="text-sm text-white/70">{hoveredCompany.industry}</p>
        </div>
      )}
    </div>
  );
};

export default OrbitalVisualization;