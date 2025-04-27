
import React from 'react';
import { AuraComposition, AuraCategory, SpiritualPath } from '@/types/aura';
import AuraChart from '../AuraChart';
import AuraDescription from '../AuraDescription';
import SpiritualPathCard from '../SpiritualPathCard';
import AuraButton from '../AuraButton';
import { getDominantCategory } from '@/utils/auraAnalyzer';

type ResultsScreenProps = {
  auraComposition: AuraComposition;
  spiritualPath: SpiritualPath;
  onStartOver: () => void;
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ 
  auraComposition, 
  spiritualPath,
  onStartOver
}) => {
  const dominantCategory = getDominantCategory(auraComposition);
  
  const getCategoryColor = (category: AuraCategory) => {
    switch (category) {
      case 'Calmness': return 'from-aura-calmness';
      case 'Energy': return 'from-aura-energy';
      case 'Anxiety': return 'from-aura-anxiety';
      case 'Confidence': return 'from-aura-confidence';
      case 'Love': return 'from-aura-love';
      default: return 'from-primary';
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Aura Results</h2>
        <div 
          className={`text-lg max-w-lg mx-auto px-4 py-2 rounded-full 
          bg-gradient-to-r ${getCategoryColor(dominantCategory)} to-white/20`}
        >
          Dominant Energy: {dominantCategory}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div>
          <AuraChart auraComposition={auraComposition} />
        </div>
        
        <div>
          <AuraDescription auraComposition={auraComposition} />
        </div>
      </div>
      
      <div className="mb-10">
        <SpiritualPathCard spiritualPath={spiritualPath} />
      </div>
      
      <div className="text-center">
        <AuraButton onClick={onStartOver}>
          Start a New Aura Scan
        </AuraButton>
      </div>
    </div>
  );
};

export default ResultsScreen;
