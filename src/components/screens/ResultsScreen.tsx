
import React, { useState } from 'react';
import { AuraComposition, AuraCategory } from '@/types/aura';
import AuraChart from '../AuraChart';
import AuraDescription from '../AuraDescription';
import SpiritualPathCard from '../SpiritualPathCard';
import AuraButton from '../AuraButton';
import { getDominantCategory } from '@/utils/auraAnalyzer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ResultsScreenProps = {
  auraComposition: AuraComposition;
  spiritualPath: any;
  onStartOver: () => void;
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ 
  auraComposition, 
  spiritualPath,
  onStartOver
}) => {
  const [chartType, setChartType] = useState<'pie' | 'radar'>('radar');
  const dominantCategory = getDominantCategory(auraComposition);
  
  const getCategoryColor = (category: AuraCategory) => {
    switch (category) {
      case 'Calmness': return 'from-aura-calmness';
      case 'Energy': return 'from-aura-energy';
      case 'Anxiety': return 'from-aura-anxiety';
      case 'Confidence': return 'from-aura-confidence';
      case 'Love': return 'from-aura-love';
      case 'Wisdom': return 'from-[#8A2BE2]';
      case 'Creativity': return 'from-[#FFA07A]';
      case 'Intuition': return 'from-[#9370DB]';
      case 'Healing': return 'from-[#77DD77]';
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
      
      <div className="mb-10">
        <Tabs defaultValue="aura" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="aura">Aura Analysis</TabsTrigger>
            <TabsTrigger value="path">Spiritual Path</TabsTrigger>
          </TabsList>
          <TabsContent value="aura" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="mb-4 flex justify-center">
                  <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
                    <button 
                      className={`px-4 py-2 text-sm ${chartType === 'pie' ? 'bg-spiritual-primary text-white' : 'bg-white text-gray-600'}`}
                      onClick={() => setChartType('pie')}
                    >
                      Aura Pie
                    </button>
                    <button 
                      className={`px-4 py-2 text-sm ${chartType === 'radar' ? 'bg-spiritual-primary text-white' : 'bg-white text-gray-600'}`}
                      onClick={() => setChartType('radar')}
                    >
                      Aura Bloom
                    </button>
                  </div>
                </div>
                <AuraChart auraComposition={auraComposition} chartType={chartType} />
              </div>
              
              <div>
                <AuraDescription auraComposition={auraComposition} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="path">
            <SpiritualPathCard spiritualPath={spiritualPath} />
          </TabsContent>
        </Tabs>
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
