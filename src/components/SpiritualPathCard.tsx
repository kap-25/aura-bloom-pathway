
import React from 'react';
import { SpiritualPath } from '@/types/aura';
import AuraCard from './AuraCard';

type SpiritualPathCardProps = {
  spiritualPath: SpiritualPath;
};

const SpiritualPathCard: React.FC<SpiritualPathCardProps> = ({ spiritualPath }) => {
  return (
    <AuraCard className="w-full max-w-lg">
      <h3 className="text-xl font-medium mb-6 text-center">Your Spiritual Path</h3>
      
      <div className="space-y-6">
        <div className="p-4 bg-spiritual-bg rounded-lg">
          <h4 className="font-medium text-spiritual-secondary mb-2">Daily Practice</h4>
          <p className="text-lg">{spiritualPath.dailyPractice}</p>
        </div>
        
        <div className="p-4 bg-spiritual-bg rounded-lg">
          <h4 className="font-medium text-spiritual-secondary mb-2">Affirmation</h4>
          <p className="text-lg italic">"{spiritualPath.affirmation}"</p>
        </div>
        
        {spiritualPath.mantra && (
          <div className="p-4 bg-spiritual-bg rounded-lg">
            <h4 className="font-medium text-spiritual-secondary mb-2">Mantra</h4>
            <p className="text-lg italic">{spiritualPath.mantra}</p>
          </div>
        )}
      </div>
    </AuraCard>
  );
};

export default SpiritualPathCard;
