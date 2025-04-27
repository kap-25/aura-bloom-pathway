
// Aura related types

export type AuraCategory = 'Calmness' | 'Energy' | 'Anxiety' | 'Confidence' | 'Love';

export interface AuraComposition {
  Calmness: number;
  Energy: number;
  Anxiety: number;
  Confidence: number;
  Love: number;
}

export type SpiritualQuestion = {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    auraMapping: Partial<AuraComposition>;
  }[];
};

export type SpiritualPath = {
  dailyPractice: string;
  affirmation: string;
  mantra?: string;
};
