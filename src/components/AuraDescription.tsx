
import React from 'react';
import { AuraComposition } from '@/types/aura';
import { getAuraDescription, getDominantCategory } from '@/utils/auraAnalyzer';
import AuraCard from './AuraCard';

type AuraDescriptionProps = {
  auraComposition: AuraComposition;
};

const AuraDescription: React.FC<AuraDescriptionProps> = ({ auraComposition }) => {
  const description = getAuraDescription(auraComposition);
  const dominantCategory = getDominantCategory(auraComposition);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Calmness': return 'text-aura-calmness';
      case 'Energy': return 'text-aura-energy';
      case 'Anxiety': return 'text-aura-anxiety';
      case 'Confidence': return 'text-aura-confidence';
      case 'Love': return 'text-aura-love';
      default: return 'text-primary';
    }
  };

  return (
    <AuraCard className="w-full max-w-lg">
      <h3 className="text-xl font-medium mb-3 text-center">Your Aura Reading</h3>
      
      <p className="text-center mb-4">
        Your dominant energy is{' '}
        <span className={`font-bold ${getCategoryColor(dominantCategory)}`}>
          {dominantCategory}
        </span>
      </p>
      
      <p className="text-center text-lg">{description}</p>
    </AuraCard>
  );
};

export default AuraDescription;
