
import { AuraCategory, JourneyPath, SoulAvatar, SpiritualPath } from '../types/aura';
import { determineJourneyPath, determineSoulAvatar, generateMysticalAffirmations, generateSoulRitual } from './soulAvatarsAndPaths';

// Get a spiritual path recommendation based on the dominant aura category
export const getSpiritualPathRecommendation = (dominantCategory: AuraCategory, auraComposition?: { [key in AuraCategory]?: number }): SpiritualPath => {
  // If we have the full aura composition, use it to determine soul avatar and journey path
  if (auraComposition) {
    const soulAvatar: SoulAvatar = determineSoulAvatar(auraComposition);
    const journeyPath: JourneyPath = determineJourneyPath(auraComposition);
    const soulRitual: string = generateSoulRitual(journeyPath);
    const mysticalAffirmations: string[] = generateMysticalAffirmations(journeyPath);
    
    return {
      pathName: journeyPath.pathName,
      description: journeyPath.description,
      avatar: soulAvatar.symbol,
      soulRitual: soulRitual,
      affirmations: mysticalAffirmations,
      dailyPractice: soulRitual, // For backward compatibility
      affirmation: mysticalAffirmations[0] // For backward compatibility
    };
  }
  
  // Fallback to the original behavior if no aura composition is provided
  switch (dominantCategory) {
    case 'Calmness':
      return {
        dailyPractice: '5-minute mindful breathing meditation focusing on your heart center',
        affirmation: 'I am at peace with myself and the universe flows through me',
        mantra: 'Om Shanti Shanti Shanti (Peace of mind, body, and spirit)'
      };
    case 'Energy':
      return {
        dailyPractice: 'Dance freely to your favorite song for 3 minutes',
        affirmation: 'I am vibrant, energetic, and filled with creative potential',
        mantra: 'So Hum (I am that divine energy)'
      };
    case 'Anxiety':
      return {
        dailyPractice: 'Ground yourself by walking barefoot on earth or grass for 5 minutes',
        affirmation: 'I release worry and embrace the natural flow of life',
        mantra: 'Sa Ta Na Ma (Birth, Life, Death, Rebirth - the cycle of transformation)'
      };
    case 'Confidence':
      return {
        dailyPractice: 'Stand tall in front of a mirror and speak 3 things you love about yourself',
        affirmation: 'I trust my inner wisdom and move forward with courage',
      };
    case 'Love':
      return {
        dailyPractice: 'Send loving thoughts to 3 people in your life for 1 minute each',
        affirmation: 'My heart is open to giving and receiving boundless love',
        mantra: 'Aham Prema (I am Divine Love)'
      };
    case 'Wisdom':
      return {
        dailyPractice: 'Sit in silent contemplation of a meaningful question for 7 minutes',
        affirmation: 'Ancient wisdom flows through me, guiding my steps on this path',
        mantra: 'Om Gum Ganapatayei Namaha (Removing obstacles to clear wisdom)'
      };
    case 'Creativity':
      return {
        dailyPractice: 'Express yourself through color - draw or paint freely for 5 minutes',
        affirmation: 'I am a vessel for divine creative expression',
        mantra: 'Om Aim Saraswatyei Namaha (Invoking creative flow)'
      };
    case 'Intuition':
      return {
        dailyPractice: 'Place your hands over your third eye center and breathe deeply for 3 minutes',
        affirmation: 'My inner knowing guides me to my highest truth',
        mantra: 'Aad Guray Nameh (I bow to the primal wisdom)'
      };
    case 'Healing':
      return {
        dailyPractice: 'Place your hands on your heart and visualize healing light for 4 minutes',
        affirmation: 'I am a channel for healing energy that restores balance within and around me',
        mantra: 'Ra Ma Da Sa Sa Say So Hung (Sun, Moon, Earth, Infinity, All that is in All)'
      };
    default:
      return {
        dailyPractice: 'Take 5 deep breaths while focusing on how you feel in this moment',
        affirmation: 'I am aligned with my highest truth and growing every day',
      };
  }
};
