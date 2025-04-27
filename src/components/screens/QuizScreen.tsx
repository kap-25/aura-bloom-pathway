
import React from 'react';
import Questionnaire from '../Questionnaire';
import { spiritualQuestions } from '@/data/questions';
import { SpiritualQuestion } from '@/types/aura';

type QuizScreenProps = {
  onComplete: (selectedAnswers: { questionId: number; selectedOption: string }[]) => void;
};

const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Aura Scan</h2>
        <p className="text-lg max-w-lg mx-auto">
          Answer these questions intuitively. Choose what resonates with your spirit in this moment.
        </p>
      </div>
      
      <Questionnaire 
        questions={spiritualQuestions} 
        onComplete={onComplete} 
      />
    </div>
  );
};

export default QuizScreen;
