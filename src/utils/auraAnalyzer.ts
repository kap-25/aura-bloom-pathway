
import { AuraCategory, AuraComposition } from "../types/aura";

// Initialize default aura composition with balanced values
export const getInitialAuraComposition = (): AuraComposition => ({
  Calmness: 20,
  Energy: 20,
  Anxiety: 20,
  Confidence: 20,
  Love: 20,
  Wisdom: 0,
  Creativity: 0,
  Intuition: 0,
  Healing: 0
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
      if (categoryKey in auraComposition) {
        auraComposition[categoryKey] += value;
        
        // Ensure values stay between 0 and 100
        if (auraComposition[categoryKey] < 0) {
          auraComposition[categoryKey] = 0;
        } else if (auraComposition[categoryKey] > 100) {
          auraComposition[categoryKey] = 100;
        }
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
  const descriptions: Partial<Record<AuraCategory, Partial<Record<AuraCategory, string>>>> = {
    Calmness: {
      Energy: "You carry a peaceful energy, balanced with inner vitality. Your spirit seeks harmony while maintaining enthusiasm for life.",
      Anxiety: "While you possess natural tranquility, there's an undercurrent of concern seeking resolution. Focus on grounding practices.",
      Confidence: "Your calm demeanor is enhanced by self-assurance. You bring peaceful confidence to situations around you.",
      Love: "Your serene spirit radiates compassion. You create safe spaces for connection through your peaceful presence.",
      Wisdom: "Your tranquil nature is deepened by inner knowing. You embody peaceful wisdom in all your interactions.",
      Creativity: "Your calm presence nurtures creative flow. Ideas emerge gently from your peaceful center.",
      Intuition: "Your stillness enhances your intuitive gifts. Quiet moments reveal profound insights.",
      Healing: "Your peaceful presence naturally heals. You bring soothing energy to those around you."
    },
    Energy: {
      Calmness: "Your vibrant energy is beautifully tempered by inner peace. You know when to act and when to rest.",
      Anxiety: "Your dynamic spirit sometimes races ahead of itself. Channel your abundant energy toward constructive outlets.",
      Confidence: "Your energetic presence is amplified by self-assurance. You inspire others through confident action.",
      Love: "Your enthusiastic spirit shares vibrant love with others. Your energy creates exciting connections.",
      Wisdom: "Your energetic nature is guided by deep wisdom. You act with both enthusiasm and purpose.",
      Creativity: "Your vibrant energy fuels endless creativity. You bring passionate innovation to everything you do.",
      Intuition: "Your dynamic energy is guided by strong intuition. You follow inner flashes of insight with immediate action.",
      Healing: "Your vibrant energy revitalizes others. Your presence brings renewed vitality to those around you."
    },
    Anxiety: {
      Calmness: "Though you feel internal tension, you have access to deep wells of peace. Tap into this resource more intentionally.",
      Energy: "Your sensitivity creates both concern and motivation. Transform worries into purposeful action.",
      Confidence: "While uncertainty visits you, your inner knowing remains strong. Trust your deeper wisdom.",
      Love: "Your caring nature sometimes manifests as worry. Your concern for others shows the depth of your compassion.",
      Wisdom: "Your anxious thoughts are balanced by innate wisdom. Let your higher knowing guide your worries to resolution.",
      Creativity: "Your sensitivity fuels creative thinking. Channel anxious energy into artistic expression.",
      Intuition: "Your heightened awareness brings both anxiety and insight. Trust the guidance beneath the concern.",
      Healing: "Your sensitivity allows you to recognize where healing is needed. Your awareness is the first step to transformation."
    },
    Confidence: {
      Calmness: "Your self-assurance creates a peaceful presence. You trust yourself and the unfolding of life.",
      Energy: "Your confidence fuels dynamic action. You move through life with purpose and certainty.",
      Anxiety: "Though generally self-assured, occasional doubts arise. These moments of reflection can deepen your authentic confidence.",
      Love: "Your self-worth enables deep connections. You love from a place of strength and healthy boundaries.",
      Wisdom: "Your confidence is grounded in true wisdom. You trust your knowledge and experience.",
      Creativity: "Your self-assurance liberates your creative expression. You boldly share your unique vision.",
      Intuition: "Your confidence strengthens your intuitive trust. You follow your inner guidance without hesitation.",
      Healing: "Your confident energy supports others' healing journeys. You inspire trust in the process of transformation."
    },
    Love: {
      Calmness: "Your compassionate heart brings peace to others. Your love flows from a serene center.",
      Energy: "Your love is expressed actively and enthusiastically. You bring warmth and excitement to relationships.",
      Anxiety: "Your deep caring sometimes manifests as concern. Remember that love includes trusting the journey of others.",
      Confidence: "Your ability to love is enhanced by self-worth. You give and receive affection with healthy boundaries.",
      Wisdom: "Your loving nature is guided by deep wisdom. You understand the profound rhythms of connection.",
      Creativity: "Your love inspires creative expression. You see and nurture the unique beauty in others.",
      Intuition: "Your loving awareness perceives the unspoken needs of others. You intuitively understand hearts.",
      Healing: "Your love is inherently healing. Your compassionate presence mends hearts and spirits."
    },
    Wisdom: {
      Calmness: "Your inner wisdom creates profound peace. You understand the deeper currents of existence.",
      Energy: "Your wisdom channels into purposeful action. You know both when to move and when to wait.",
      Anxiety: "Your wisdom provides perspective during uncertain times. You see the larger patterns beyond immediate concerns.",
      Confidence: "Your wisdom creates genuine confidence. You trust life's unfolding with deep knowing.",
      Love: "Your wisdom enhances your capacity for compassion. You love with understanding and acceptance.",
      Creativity: "Your wisdom infuses your creative work with depth. You create with meaningful purpose.",
      Intuition: "Your wisdom and intuition work in harmony. Ancient knowing meets present insight.",
      Healing: "Your wisdom facilitates profound healing. You understand the root causes beneath symptoms."
    },
    Creativity: {
      Calmness: "Your creativity flows from a peaceful center. You create with both passion and serenity.",
      Energy: "Your creative spark ignites enthusiastic action. You bring vibrant innovation to all endeavors.",
      Anxiety: "Your creative mind sometimes races with possibilities. Channel this energy into focused expression.",
      Confidence: "Your creativity is enhanced by self-trust. You boldly bring new forms into being.",
      Love: "Your creativity is an expression of love. You see and reveal beauty in unexpected places.",
      Wisdom: "Your creativity is guided by deep wisdom. You create works with lasting significance.",
      Intuition: "Your creativity and intuition dance together. Inspirations arrive as fully-formed visions.",
      Healing: "Your creative expression facilitates healing. You transform experiences into meaningful art."
    },
    Intuition: {
      Calmness: "Your intuitive gifts are heightened by inner stillness. Quiet moments bring powerful insights.",
      Energy: "Your intuition sparks dynamic action. You follow inner guidance with enthusiasm.",
      Anxiety: "Your intuitive sensitivity sometimes creates overwhelm. Practice grounding to clarify your perceptions.",
      Confidence: "Your intuition strengthens your self-trust. You move forward with certainty in your inner knowing.",
      Love: "Your intuitive heart understands others deeply. You connect with compassionate insight.",
      Wisdom: "Your intuition draws from ancient wisdom. Your inner knowing transcends ordinary understanding.",
      Creativity: "Your intuition fuels unique creative expression. You channel insights into innovative forms.",
      Healing: "Your intuitive gifts reveal paths to healing. You sense what needs to be addressed for wholeness."
    },
    Healing: {
      Calmness: "Your healing presence brings profound peace. You naturally soothe turbulent energies.",
      Energy: "Your healing work is energizing and revitalizing. You help restore vitality and balance.",
      Anxiety: "Your healing sensitivity sometimes absorbs others' distress. Remember to cleanse your own energy field.",
      Confidence: "Your healing gifts are strengthened by self-trust. You work with assured compassion.",
      Love: "Your healing emanates from profound love. Compassion infuses all your interactions.",
      Wisdom: "Your healing work is guided by deep wisdom. You understand the subtle dynamics of wholeness.",
      Creativity: "Your healing approach is uniquely creative. You find innovative paths to restoration.",
      Intuition: "Your healing is enhanced by intuitive insight. You perceive exactly what's needed in each moment."
    }
  };
  
  // Return the description or a default if not found
  return descriptions[dominantCategory]?.[secondaryCategory] || 
    "Your unique energy blend reveals a multifaceted spiritual nature with evolving potential.";
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
