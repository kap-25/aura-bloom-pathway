
import React, { useState } from 'react';
import { AuraComposition, SpiritualPath } from '@/types/aura';
import { spiritualQuestions } from '@/data/questions';
import { analyzeAuraComposition, getDominantCategory } from '@/utils/auraAnalyzer';
import { getSpiritualPathRecommendation } from '@/data/spiritualPaths';
import LandingScreen from '@/components/screens/LandingScreen';
import QuizScreen from '@/components/screens/QuizScreen';
import ResultsScreen from '@/components/screens/ResultsScreen';

type AppScreen = 'landing' | 'quiz' | 'results';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');
  const [auraComposition, setAuraComposition] = useState<AuraComposition | null>(null);
  const [spiritualPath, setSpiritualPath] = useState<SpiritualPath | null>(null);

  const handleStartScan = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (selectedAnswers: { questionId: number; selectedOption: string }[]) => {
    // Extract aura mappings from the selected options
    const selectedAuraMappings = selectedAnswers.map(answer => {
      const question = spiritualQuestions.find(q => q.id === answer.questionId);
      const selectedOption = question?.options.find(opt => opt.value === answer.selectedOption);
      return selectedOption?.auraMapping || {};
    });

    // Analyze the aura composition based on answers
    const newAuraComposition = analyzeAuraComposition(selectedAuraMappings);
    setAuraComposition(newAuraComposition);
    
    // Get dominant category and recommended spiritual path
    const dominantCategory = getDominantCategory(newAuraComposition);
    const recommendation = getSpiritualPathRecommendation(dominantCategory, newAuraComposition);
    setSpiritualPath(recommendation);
    
    // Show results screen
    setCurrentScreen('results');
  };

  const handleStartOver = () => {
    setCurrentScreen('landing');
    setAuraComposition(null);
    setSpiritualPath(null);
  };

  return (
    <div className="min-h-screen aura-pattern flex flex-col">
      <div className="fixed inset-0 bg-gradient-spiritual opacity-10 z-0"></div>
      
      <main className="flex-1 container mx-auto py-10 px-4 relative z-10">
        {currentScreen === 'landing' && (
          <LandingScreen onStartScan={handleStartScan} />
        )}
        
        {currentScreen === 'quiz' && (
          <QuizScreen onComplete={handleQuizComplete} />
        )}
        
        {currentScreen === 'results' && auraComposition && spiritualPath && (
          <ResultsScreen 
            auraComposition={auraComposition}
            spiritualPath={spiritualPath}
            onStartOver={handleStartOver}
          />
        )}
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground relative z-10">
        <p>AI Aura Scanner & Personalized Spiritual Path Generator</p>
      </footer>
    </div>
  );
};

export default Index;
