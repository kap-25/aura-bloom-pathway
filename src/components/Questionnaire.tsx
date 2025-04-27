
import React, { useState } from 'react';
import { SpiritualQuestion } from '@/types/aura';
import AuraCard from './AuraCard';
import AuraButton from './AuraButton';

type QuestionnaireProps = {
  questions: SpiritualQuestion[];
  onComplete: (selectedOptions: { questionId: number; selectedOption: string }[]) => void;
};

const Questionnaire: React.FC<QuestionnaireProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{ questionId: number; selectedOption: string }[]>([]);
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionSelect = (optionValue: string) => {
    setCurrentSelection(optionValue);
  };

  const handleNextQuestion = () => {
    if (!currentSelection) return;
    
    // Save the current selection
    setSelectedOptions([
      ...selectedOptions, 
      { 
        questionId: currentQuestion.id, 
        selectedOption: currentSelection 
      }
    ]);
    
    // Clear selection for next question
    setCurrentSelection(null);
    
    if (isLastQuestion) {
      // Quiz completed
      onComplete([
        ...selectedOptions, 
        { 
          questionId: currentQuestion.id, 
          selectedOption: currentSelection 
        }
      ]);
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center">
      <AuraCard className="w-full max-w-lg mb-6">
        <div className="mb-6">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-spiritual rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-right text-sm text-muted-foreground mt-2">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        
        <h3 className="text-xl md:text-2xl font-medium mb-6 text-center">
          {currentQuestion.question}
        </h3>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className={`
                w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200
                ${
                  currentSelection === option.value
                    ? 'border-primary bg-primary bg-opacity-10'
                    : 'border-gray-200 hover:border-spiritual-light'
                }
              `}
            >
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </AuraCard>

      <div className="w-full max-w-lg flex justify-center">
        <AuraButton 
          gradient 
          onClick={handleNextQuestion} 
          disabled={!currentSelection}
        >
          {isLastQuestion ? 'Complete Aura Scan' : 'Next Question'}
        </AuraButton>
      </div>
    </div>
  );
};

export default Questionnaire;
