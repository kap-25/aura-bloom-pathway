
// Aura related types

export type AuraCategory = 'Calmness' | 'Energy' | 'Anxiety' | 'Confidence' | 'Love' | 'Wisdom' | 'Creativity' | 'Intuition' | 'Healing';

export interface AuraComposition {
  Calmness: number;
  Energy: number;
  Anxiety: number;
  Confidence: number;
  Love: number;
  Wisdom?: number;
  Creativity?: number;
  Intuition?: number;
  Healing?: number;
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
  pathName?: string;
  avatar?: string;
  description?: string;
  dailyPractice: string;
  affirmation: string;
  mantra?: string;
  affirmations?: string[];
  soulRitual?: string;
};

export type SoulAvatar = {
  name: string;
  description: string;
  symbol: string;
};

export type JourneyPath = {
  pathName: string;
  description: string;
  avatarName: string;
};
