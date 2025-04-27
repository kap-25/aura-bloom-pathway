
import React from 'react';
import AuraButton from '../AuraButton';
import AuraCard from '../AuraCard';

type LandingScreenProps = {
  onStartScan: () => void;
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onStartScan }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-spiritual rounded-full opacity-30 blur-xl"></div>
        <div className="relative z-10 text-5xl md:text-6xl font-bold p-6 
          bg-clip-text text-transparent bg-gradient-to-r from-spiritual-primary to-spiritual-secondary">
          AI Aura Scanner
        </div>
      </div>
      
      <AuraCard floatingEffect className="max-w-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Discover Your Inner Energy</h2>
        <p className="text-lg mb-6">
          Begin a journey of self-discovery with our AI-powered aura scanner. 
          Answer a few intuitive questions to reveal your spiritual essence and 
          receive guidance tailored to your unique energy.
        </p>
        <div className="mt-4 flex justify-center">
          <AuraButton gradient onClick={onStartScan} size="lg">
            Start Your Aura Scan
          </AuraButton>
        </div>
      </AuraCard>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <AuraCard>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-aura-calmness bg-opacity-30 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-aura-calmness"></div>
            </div>
            <h3 className="font-medium text-lg mb-2">Aura Analysis</h3>
            <p className="text-center">Discover your emotional and spiritual composition</p>
          </div>
        </AuraCard>
        
        <AuraCard>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-aura-energy bg-opacity-30 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-aura-energy"></div>
            </div>
            <h3 className="font-medium text-lg mb-2">Spiritual Reading</h3>
            <p className="text-center">Receive insights about your current spiritual state</p>
          </div>
        </AuraCard>
        
        <AuraCard>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-aura-love bg-opacity-30 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-aura-love"></div>
            </div>
            <h3 className="font-medium text-lg mb-2">Daily Guidance</h3>
            <p className="text-center">Get personalized practices and affirmations</p>
          </div>
        </AuraCard>
      </div>
    </div>
  );
};

export default LandingScreen;
