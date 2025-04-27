
import { AuraCategory, AuraComposition } from "../types/aura";

// Initialize default aura composition with balanced values
export const getInitialAuraComposition = (): AuraComposition => ({
  Calmness: 20,
  Energy: 20,
  Anxiety: 20,
  Confidence: 20,
  Love: 20
});

// Analyze answers and compute final aura composition
export const analyzeAuraComposition = (
  selectedAuraMappings: Partial<AuraComposition>[]
): AuraComposition => {
  // Start with base values
  const auraComposition = getInitialAuraComposition();
  
  // Apply each selected answer's mapping
  selectedAuraMappings.forEach(mapping => {
    Object.entries(mapping).forEach(([category, value]) => {
      const categoryKey = category as keyof AuraComposition;
      auraComposition[categoryKey] += value;
      
      // Ensure values stay between 0 and 100
      if (auraComposition[categoryKey] < 0) {
        auraComposition[categoryKey] = 0;
      } else if (auraComposition[categoryKey] > 100) {
        auraComposition[categoryKey] = 100;
      }
    });
  });
  
  // Normalize to ensure all values sum to 100
  const total = Object.values(auraComposition).reduce((sum, value) => sum + value, 0);
  Object.keys(auraComposition).forEach(key => {
    const categoryKey = key as keyof AuraComposition;
    auraComposition[categoryKey] = Math.round((auraComposition[categoryKey] / total) * 100);
  });
  
  return auraComposition;
};

// Get a description of the aura composition
export const getAuraDescription = (auraComposition: AuraComposition): string => {
  // Find the dominant category
  const dominantCategory = getDominantCategory(auraComposition);
  
  // Find the secondary category (excluding the dominant one)
  const compositionWithoutDominant = { ...auraComposition };
  compositionWithoutDominant[dominantCategory] = 0;
  const secondaryCategory = getDominantCategory(compositionWithoutDominant);
  
  // Generate description based on dominant and secondary categories
  const descriptions: Record<AuraCategory, Record<AuraCategory, string>> = {
    Calmness: {
      Energy: "You carry a peaceful energy, balanced with inner vitality. Your spirit seeks harmony while maintaining enthusiasm for life.",
      Anxiety: "While you possess natural tranquility, there's an undercurrent of concern seeking resolution. Focus on grounding practices.",
      Confidence: "Your calm demeanor is enhanced by self-assurance. You bring peaceful confidence to situations around you.",
      Love: "Your serene spirit radiates compassion. You create safe spaces for connection through your peaceful presence."
    },
    Energy: {
      Calmness: "Your vibrant energy is beautifully tempered by inner peace. You know when to act and when to rest.",
      Anxiety: "Your dynamic spirit sometimes races ahead of itself. Channel your abundant energy toward constructive outlets.",
      Confidence: "Your energetic presence is amplified by self-assurance. You inspire others through confident action.",
      Love: "Your enthusiastic spirit shares vibrant love with others. Your energy creates exciting connections."
    },
    Anxiety: {
      Calmness: "Though you feel internal tension, you have access to deep wells of peace. Tap into this resource more intentionally.",
      Energy: "Your sensitivity creates both concern and motivation. Transform worries into purposeful action.",
      Confidence: "While uncertainty visits you, your inner knowing remains strong. Trust your deeper wisdom.",
      Love: "Your caring nature sometimes manifests as worry. Your concern for others shows the depth of your compassion."
    },
    Confidence: {
      Calmness: "Your self-assurance creates a peaceful presence. You trust yourself and the unfolding of life.",
      Energy: "Your confidence fuels dynamic action. You move through life with purpose and certainty.",
      Anxiety: "Though generally self-assured, occasional doubts arise. These moments of reflection can deepen your authentic confidence.",
      Love: "Your self-worth enables deep connections. You love from a place of strength and healthy boundaries."
    },
    Love: {
      Calmness: "Your compassionate heart brings peace to others. Your love flows from a serene center.",
      Energy: "Your love is expressed actively and enthusiastically. You bring warmth and excitement to relationships.",
      Anxiety: "Your deep caring sometimes manifests as concern. Remember that love includes trusting the journey of others.",
      Confidence: "Your ability to love is enhanced by self-worth. You give and receive affection with healthy boundaries."
    }
  };
  
  return descriptions[dominantCategory][secondaryCategory];
};

// Get the dominant aura category
export const getDominantCategory = (auraComposition: AuraComposition): AuraCategory => {
  return Object.entries(auraComposition).reduce(
    (max, [category, value]) => {
      return value > max.value ? { category: category as AuraCategory, value } : max;
    },
    { category: 'Calmness' as AuraCategory, value: 0 }
  ).category;
};
