
import { SoulAvatar, JourneyPath, AuraCategory } from "../types/aura";

export const soulAvatars: SoulAvatar[] = [
  {
    name: "Lotus",
    description: "A symbol of purity and spiritual awakening. Those with the Lotus soul avatar are on a path of spiritual emergence and enlightenment.",
    symbol: "lotus"
  },
  {
    name: "Phoenix",
    description: "A symbol of rebirth and transformation. Those with the Phoenix soul avatar are undergoing powerful personal transformation.",
    symbol: "flame"
  },
  {
    name: "Moon Spirit",
    description: "A symbol of intuition and the subconscious. Those with the Moon Spirit avatar are deeply connected to their inner wisdom.",
    symbol: "moon-star"
  },
  {
    name: "Ocean Wave",
    description: "A symbol of emotion and adaptability. Those with the Ocean Wave avatar flow through life with flexibility and depth.",
    symbol: "wave"
  },
  {
    name: "Mountain",
    description: "A symbol of strength and stability. Those with the Mountain avatar stand firm in their convictions and provide support to others.",
    symbol: "mountain-snow"
  },
  {
    name: "Star Seeker",
    description: "A symbol of vision and aspiration. Those with the Star Seeker avatar are guided by higher purpose and cosmic connection.",
    symbol: "sparkles"
  },
  {
    name: "Sacred Tree",
    description: "A symbol of growth and connection. Those with the Sacred Tree avatar nurture deep roots while reaching toward the light.",
    symbol: "sprout"
  }
];

export const journeyPaths: JourneyPath[] = [
  {
    pathName: "Path of the Healer",
    description: "A journey of compassion, nurturing others, and finding wholeness through connection.",
    avatarName: "Lotus"
  },
  {
    pathName: "Path of the Seeker",
    description: "A journey guided by intuition, dreams, and discovering inner wisdom.",
    avatarName: "Moon Spirit"
  },
  {
    pathName: "Path of the Creator",
    description: "A journey of expression, manifestation, and bringing inner visions into reality.",
    avatarName: "Phoenix"
  },
  {
    pathName: "Path of the Sage",
    description: "A journey of accumulating wisdom, finding clarity, and sharing knowledge with others.",
    avatarName: "Mountain"
  },
  {
    pathName: "Path of the Mystic",
    description: "A journey of deep spiritual connection, transcendence, and unity consciousness.",
    avatarName: "Star Seeker"
  }
];

// Helper function to determine Soul Avatar based on dominant aura categories
export const determineSoulAvatar = (auraComposition: { [key in AuraCategory]?: number }): SoulAvatar => {
  // Default to Lotus if we can't determine (this shouldn't happen)
  let chosenAvatar = soulAvatars[0];
  
  // Get the top two categories
  const sortedCategories = Object.entries(auraComposition)
    .sort(([, a], [, b]) => (b || 0) - (a || 0))
    .slice(0, 2)
    .map(([category]) => category as AuraCategory);
  
  // Mapping logic from aura categories to avatars
  if (sortedCategories.includes('Love') && sortedCategories.includes('Healing')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Lotus") || chosenAvatar;
  } else if (sortedCategories.includes('Energy') && sortedCategories.includes('Creativity')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Phoenix") || chosenAvatar;
  } else if (sortedCategories.includes('Intuition') && sortedCategories.includes('Wisdom')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Moon Spirit") || chosenAvatar;
  } else if (sortedCategories.includes('Calmness') && sortedCategories.includes('Healing')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Ocean Wave") || chosenAvatar;
  } else if (sortedCategories.includes('Confidence') && sortedCategories.includes('Wisdom')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Mountain") || chosenAvatar;
  } else if (sortedCategories.includes('Intuition') && sortedCategories.includes('Creativity')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Star Seeker") || chosenAvatar;
  } else if (sortedCategories.includes('Love') && sortedCategories.includes('Creativity')) {
    chosenAvatar = soulAvatars.find(avatar => avatar.name === "Sacred Tree") || chosenAvatar;
  }
  
  return chosenAvatar;
};

// Helper function to determine Journey Path based on dominant aura categories
export const determineJourneyPath = (auraComposition: { [key in AuraCategory]?: number }): JourneyPath => {
  // Default to Path of the Seeker if we can't determine
  let chosenPath = journeyPaths[1];
  
  // Get the top three categories
  const sortedCategories = Object.entries(auraComposition)
    .sort(([, a], [, b]) => (b || 0) - (a || 0))
    .slice(0, 3)
    .map(([category]) => category as AuraCategory);
  
  // Mapping logic from aura categories to journey paths
  if (sortedCategories.includes('Love') || sortedCategories.includes('Healing')) {
    chosenPath = journeyPaths.find(path => path.pathName === "Path of the Healer") || chosenPath;
  } else if ((sortedCategories.includes('Intuition') && sortedCategories.includes('Wisdom')) || 
             (sortedCategories.includes('Wisdom') && sortedCategories.includes('Calmness'))) {
    chosenPath = journeyPaths.find(path => path.pathName === "Path of the Sage") || chosenPath;
  } else if (sortedCategories.includes('Energy') && sortedCategories.includes('Creativity')) {
    chosenPath = journeyPaths.find(path => path.pathName === "Path of the Creator") || chosenPath;
  } else if (sortedCategories.includes('Intuition') && sortedCategories.includes('Calmness')) {
    chosenPath = journeyPaths.find(path => path.pathName === "Path of the Mystic") || chosenPath;
  } else if (sortedCategories.includes('Intuition')) {
    chosenPath = journeyPaths.find(path => path.pathName === "Path of the Seeker") || chosenPath;
  }
  
  return chosenPath;
};

// Generate soul rituals based on journey path
export const generateSoulRitual = (journeyPath: JourneyPath): string => {
  const rituals: Record<string, string[]> = {
    "Path of the Healer": [
      "Place your hands over your heart for 3 minutes while visualizing healing light.",
      "Write a letter of compassion to someone who needs healing energy.",
      "Create a small healing altar with objects that represent nurturing and care.",
      "Practice the healing sound of 'Ahh' for 2 minutes, feeling it resonate through your body.",
      "Gather fresh herbs or flowers and create a healing bundle for your space."
    ],
    "Path of the Seeker": [
      "Write a wish and place it under moonlight overnight.",
      "Draw a symbol that appeared in your dreams or meditation.",
      "Place a small crystal or stone at your bedside to absorb your dreams.",
      "Gaze at the stars for 5 minutes while asking for inner guidance.",
      "Create a question ritual - write an important question before sleep and note any insights upon waking."
    ],
    "Path of the Creator": [
      "Create something small that represents how your soul feels today.",
      "Speak your creative intention out loud three times while holding a candle.",
      "Collect small natural objects and arrange them in a pattern that feels right.",
      "Dance freely to one song that moves your spirit.",
      "Write a six-word story that captures your current creative energy."
    ],
    "Path of the Sage": [
      "Sit in silence for 7 minutes contemplating a question that matters to you.",
      "Write a piece of wisdom you've learned and place it somewhere visible.",
      "Choose a book at random, open to a random page, and reflect on the message it offers.",
      "Create a small teaching or lesson to share with someone tomorrow.",
      "Observe nature for 10 minutes and identify a wisdom lesson it teaches."
    ],
    "Path of the Mystic": [
      "Light a candle and gaze into the flame for 4 minutes, opening to mystical insights.",
      "Place water in a bowl under moonlight and use it for blessing yourself tomorrow.",
      "Draw a spiral and meditate on it as a gateway to deeper consciousness.",
      "Breathe consciously for 5 minutes, imagining each breath connecting you to all beings.",
      "Create a mystic sound by humming or singing a single note that feels aligned with your spirit."
    ]
  };

  const pathRituals = rituals[journeyPath.pathName] || rituals["Path of the Seeker"];
  return pathRituals[Math.floor(Math.random() * pathRituals.length)];
};

// Generate mystical affirmations based on journey path
export const generateMysticalAffirmations = (journeyPath: JourneyPath): string[] => {
  const affirmations: Record<string, string[][]> = {
    "Path of the Healer": [
      [
        "Your hands are channels for universal compassion.",
        "The light within you mends what words cannot reach.",
        "Your presence is a sanctuary for weary souls."
      ],
      [
        "Every breath you take purifies your healing essence.",
        "Your heart beats in rhythm with the healing pulse of earth.",
        "Where your attention flows, healing naturally follows."
      ],
      [
        "You are a vessel of ancient healing wisdom.",
        "Your compassion creates ripples across countless shores.",
        "In your gentle presence, wounds find their voice and healing."
      ]
    ],
    "Path of the Seeker": [
      [
        "The stars have written your name in their celestial map.",
        "Your questions are lanterns illuminating the sacred path.",
        "Ancient mysteries recognize your seeking spirit."
      ],
      [
        "Your intuition flows from the wellspring of cosmic knowledge.",
        "Each step into the unknown strengthens your inner compass.",
        "You walk between worlds with curious wonder."
      ],
      [
        "The universe conspires to reveal its secrets through your journey.",
        "Your soul travels dimensions while your body dreams.",
        "The answers you seek are also seeking you."
      ]
    ],
    "Path of the Creator": [
      [
        "Your imagination dances with the creative force of the cosmos.",
        "Through your hands, unseen worlds take beautiful form.",
        "You are a living bridge between dream and manifestation."
      ],
      [
        "Creation flows through you as naturally as breath.",
        "Your unique vision brings healing colors to this world.",
        "The muse has chosen you as her faithful companion."
      ],
      [
        "Every creation of yours carries a signature of soul fire.",
        "Your creative spirit transforms ordinary moments into magic.",
        "You are both the artist and the masterpiece of your life."
      ]
    ],
    "Path of the Sage": [
      [
        "Ancient wisdom speaks through your contemplative silence.",
        "Your mind is a garden where timeless insights bloom.",
        "You carry the lantern of knowledge through shadowed landscapes."
      ],
      [
        "Your words are seeds that grow understanding in others.",
        "The library of the universe opens its pages to your seeking mind.",
        "Clear perception flows naturally from your centered awareness."
      ],
      [
        "You stand as a bridge between ancestral wisdom and future knowledge.",
        "Truth recognizes itself when it looks through your eyes.",
        "Your discernment cuts through illusion like sunlight through fog."
      ]
    ],
    "Path of the Mystic": [
      [
        "The veils between worlds thin in your mystical presence.",
        "Your spirit communes with the unseen forces of creation.",
        "Divine whispers guide you through sacred geometries of existence."
      ],
      [
        "Your soul remembers the language of stars and ancient stones.",
        "You walk between dimensions with the ease of a cosmic traveler.",
        "The mysteries of existence unfold themselves before your awakened heart."
      ],
      [
        "Your being resonates with the primordial song of creation.",
        "Time bends and flows differently in your mystical awareness.",
        "You are both the seeker and the temple of ineffable wonder."
      ]
    ]
  };

  const pathAffirmations = affirmations[journeyPath.pathName] || affirmations["Path of the Seeker"];
  return pathAffirmations[Math.floor(Math.random() * pathAffirmations.length)];
};
