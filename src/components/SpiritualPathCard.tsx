
import React from 'react';
import { SpiritualPath } from '@/types/aura';
import AuraCard from './AuraCard';
import { LucideIcon } from 'lucide-react';
import { Flower, MoonStar, Flame, Waves, Mountain, Sparkles, Sprout } from 'lucide-react';

type SpiritualPathCardProps = {
  spiritualPath: SpiritualPath;
};

const SpiritualPathCard: React.FC<SpiritualPathCardProps> = ({ spiritualPath }) => {
  const getAvatarIcon = (): LucideIcon => {
    switch (spiritualPath.avatar) {
      case 'lotus': return Flower; // Changed from Lotus to Flower
      case 'moon-star': return MoonStar;
      case 'flame': return Flame;
      case 'wave': return Waves; // Changed from Wave to Waves
      case 'mountain-snow': return Mountain; // Changed from MountainSnow to Mountain
      case 'sparkles': return Sparkles;
      case 'sprout': return Sprout;
      default: return Sparkles;
    }
  };

  const AvatarIcon = getAvatarIcon();

  return (
    <AuraCard className="w-full max-w-lg">
      {spiritualPath.pathName && (
        <div className="mb-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-spiritual-bg rounded-full flex items-center justify-center mb-3">
              <AvatarIcon className="w-10 h-10 text-spiritual-primary" />
            </div>
            <h3 className="text-xl font-medium">{spiritualPath.pathName}</h3>
            {spiritualPath.description && (
              <p className="text-muted-foreground mt-2">{spiritualPath.description}</p>
            )}
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        {spiritualPath.avatar && (
          <div className="p-4 bg-spiritual-bg rounded-lg border border-spiritual-light">
            <h4 className="font-medium text-spiritual-secondary mb-2">Soul Avatar</h4>
            <div className="flex items-center gap-3">
              <AvatarIcon className="w-6 h-6 text-spiritual-primary" />
              <p className="text-lg">{spiritualPath.avatar}</p>
            </div>
          </div>
        )}
        
        {spiritualPath.soulRitual && (
          <div className="p-4 bg-spiritual-bg rounded-lg border border-spiritual-light">
            <h4 className="font-medium text-spiritual-secondary mb-2">Soul Ritual</h4>
            <p className="text-lg">{spiritualPath.soulRitual}</p>
          </div>
        )}
        
        {spiritualPath.dailyPractice && !spiritualPath.soulRitual && (
          <div className="p-4 bg-spiritual-bg rounded-lg border border-spiritual-light">
            <h4 className="font-medium text-spiritual-secondary mb-2">Daily Practice</h4>
            <p className="text-lg">{spiritualPath.dailyPractice}</p>
          </div>
        )}
        
        {spiritualPath.affirmations ? (
          <div className="p-4 bg-spiritual-bg rounded-lg border border-spiritual-light">
            <h4 className="font-medium text-spiritual-secondary mb-2">Mystical Insights</h4>
            <div className="space-y-2">
              {spiritualPath.affirmations.map((affirmation, index) => (
                <p key={index} className="text-lg italic">"{affirmation}"</p>
              ))}
            </div>
          </div>
        ) : spiritualPath.affirmation ? (
          <div className="p-4 bg-spiritual-bg rounded-lg border border-spiritual-light">
            <h4 className="font-medium text-spiritual-secondary mb-2">Affirmation</h4>
            <p className="text-lg italic">"{spiritualPath.affirmation}"</p>
          </div>
        ) : null}
        
        {spiritualPath.mantra && (
          <div className="p-4 bg-spiritual-bg rounded-lg border border-spiritual-light">
            <h4 className="font-medium text-spiritual-secondary mb-2">Mantra</h4>
            <p className="text-lg italic">{spiritualPath.mantra}</p>
          </div>
        )}
      </div>
    </AuraCard>
  );
};

export default SpiritualPathCard;
