
import { AuraCategory, SpiritualPath } from "../types/aura";

// Map dominant aura category to spiritual practices
export const spiritualPathRecommendations: Record<AuraCategory, SpiritualPath[]> = {
  Calmness: [
    {
      dailyPractice: "5 minutes of mindful breathing",
      affirmation: "I flow peacefully through life, embracing each moment with presence.",
      mantra: "Om Shanti Shanti Shanti (Peace)"
    },
    {
      dailyPractice: "Morning journaling about what brings you serenity",
      affirmation: "I am a vessel of peace, spreading calm wherever I go.",
      mantra: "So Hum (I am That)"
    },
    {
      dailyPractice: "Evening gratitude reflection for 3 peaceful moments",
      affirmation: "Tranquility lives within me and guides my path.",
      mantra: "Shanti Priya (Lover of Peace)"
    }
  ],
  Energy: [
    {
      dailyPractice: "5 minutes of energizing sun salutations",
      affirmation: "My energy is abundant and flows to all aspects of my life.",
      mantra: "Ram (Energy/Action)"
    },
    {
      dailyPractice: "Dance freely to your favorite upbeat song",
      affirmation: "I am vibrant, energized and full of vitality.",
      mantra: "Shakti (Divine Energy)"
    },
    {
      dailyPractice: "Morning power poses with deep breathing",
      affirmation: "I harness my inner fire to fuel my purpose.",
      mantra: "Surya Shakti (Solar Energy)"
    }
  ],
  Anxiety: [
    {
      dailyPractice: "10 deep belly breaths whenever anxiety surfaces",
      affirmation: "I release worry and welcome calm into my being.",
      mantra: "Om Tara (Protection from Fears)"
    },
    {
      dailyPractice: "Grounding meditation with bare feet on earth",
      affirmation: "I am safe, supported and divinely protected.",
      mantra: "Sat Nam (Truth is my identity)"
    },
    {
      dailyPractice: "Write down your worries and ritually release them",
      affirmation: "I trust in divine timing and release the need to control.",
      mantra: "Om Gam Ganapataye (Remover of Obstacles)"
    }
  ],
  Confidence: [
    {
      dailyPractice: "Mirror affirmations while maintaining eye contact",
      affirmation: "I trust my intuition and stand confidently in my truth.",
      mantra: "Aham Brahmasmi (I am divine)"
    },
    {
      dailyPractice: "List 3 achievements you're proud of today",
      affirmation: "I am worthy, capable, and divinely guided.",
      mantra: "So Ham (I am That I am)"
    },
    {
      dailyPractice: "Power posture meditation for 5 minutes",
      affirmation: "I radiate confidence and inspire others with my light.",
      mantra: "Sat Chit Ananda (Being, Consciousness, Bliss)"
    }
  ],
  Love: [
    {
      dailyPractice: "Send loving thoughts to 3 people in your life",
      affirmation: "I am a vessel of divine love that flows endlessly.",
      mantra: "Om Mani Padme Hum (The jewel in the lotus)"
    },
    {
      dailyPractice: "Self-massage with loving intention",
      affirmation: "I am worthy of abundant love and profound connection.",
      mantra: "Lokah Samastah Sukhino Bhavantu (May all beings be happy)"
    },
    {
      dailyPractice: "Heart-opening yoga poses for 5 minutes",
      affirmation: "My heart is open to giving and receiving love freely.",
      mantra: "Om Prema (Divine Love)"
    }
  ]
};

// Return a spiritual path recommendation based on dominant aura category
export function getSpiritualPathRecommendation(dominantCategory: AuraCategory): SpiritualPath {
  const recommendations = spiritualPathRecommendations[dominantCategory];
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  return recommendations[randomIndex];
}
