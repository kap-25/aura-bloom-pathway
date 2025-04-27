
import { SpiritualQuestion } from "../types/aura";

export const spiritualQuestions: SpiritualQuestion[] = [
  {
    id: 1,
    question: "Pick a color that feels most aligned with your heart today.",
    options: [
      {
        value: "blue",
        label: "Blue",
        auraMapping: { Calmness: 20, Anxiety: -10 }
      },
      {
        value: "red",
        label: "Red",
        auraMapping: { Energy: 20, Calmness: -5 }
      },
      {
        value: "green",
        label: "Green",
        auraMapping: { Calmness: 15, Love: 10 }
      },
      {
        value: "yellow",
        label: "Yellow",
        auraMapping: { Confidence: 15, Energy: 10 }
      },
      {
        value: "purple",
        label: "Purple",
        auraMapping: { Love: 15, Confidence: 5 }
      }
    ]
  },
  {
    id: 2,
    question: "Choose an element you feel drawn to right now:",
    options: [
      {
        value: "fire",
        label: "Fire",
        auraMapping: { Energy: 15, Confidence: 10 }
      },
      {
        value: "water",
        label: "Water",
        auraMapping: { Calmness: 15, Anxiety: -10 }
      },
      {
        value: "earth",
        label: "Earth",
        auraMapping: { Calmness: 10, Confidence: 5 }
      },
      {
        value: "air",
        label: "Air",
        auraMapping: { Energy: 5, Anxiety: 5 }
      }
    ]
  },
  {
    id: 3,
    question: "Complete the sentence: 'Today, my spirit feels ____.'",
    options: [
      {
        value: "light",
        label: "Light",
        auraMapping: { Calmness: 10, Energy: 10 }
      },
      {
        value: "heavy",
        label: "Heavy",
        auraMapping: { Anxiety: 15, Calmness: -5 }
      },
      {
        value: "vibrant",
        label: "Vibrant",
        auraMapping: { Energy: 15, Confidence: 10 }
      },
      {
        value: "peaceful",
        label: "Peaceful",
        auraMapping: { Calmness: 20, Anxiety: -10 }
      },
      {
        value: "scattered",
        label: "Scattered",
        auraMapping: { Anxiety: 15, Energy: 5 }
      }
    ]
  },
  {
    id: 4,
    question: "What would your soul like more of today?",
    options: [
      {
        value: "rest",
        label: "Rest",
        auraMapping: { Calmness: 15, Energy: -10 }
      },
      {
        value: "adventure",
        label: "Adventure",
        auraMapping: { Energy: 15, Confidence: 10 }
      },
      {
        value: "connection",
        label: "Connection",
        auraMapping: { Love: 20 }
      },
      {
        value: "creativity",
        label: "Creativity",
        auraMapping: { Energy: 10, Confidence: 10 }
      },
      {
        value: "solitude",
        label: "Solitude",
        auraMapping: { Calmness: 15, Anxiety: -5 }
      }
    ]
  },
  {
    id: 5,
    question: "How heavy does your energy feel today?",
    options: [
      {
        value: "very-light",
        label: "Very light (1-2)",
        auraMapping: { Calmness: 15, Energy: 10 }
      },
      {
        value: "somewhat-light",
        label: "Somewhat light (3-4)",
        auraMapping: { Calmness: 10, Energy: 5 }
      },
      {
        value: "neutral",
        label: "Neutral (5-6)",
        auraMapping: { Calmness: 5, Energy: 5 }
      },
      {
        value: "somewhat-heavy",
        label: "Somewhat heavy (7-8)",
        auraMapping: { Anxiety: 10, Energy: -5 }
      },
      {
        value: "very-heavy",
        label: "Very heavy (9-10)",
        auraMapping: { Anxiety: 15, Energy: -10 }
      }
    ]
  },
  {
    id: 6,
    question: "Which landscape resonates with you most right now?",
    options: [
      {
        value: "ocean",
        label: "Ocean waves",
        auraMapping: { Calmness: 15, Love: 5 }
      },
      {
        value: "mountains",
        label: "Mountain peak",
        auraMapping: { Confidence: 15, Energy: 5 }
      },
      {
        value: "forest",
        label: "Dense forest",
        auraMapping: { Calmness: 10, Anxiety: -5 }
      },
      {
        value: "desert",
        label: "Vast desert",
        auraMapping: { Confidence: 10, Calmness: 5 }
      },
      {
        value: "meadow",
        label: "Flowering meadow",
        auraMapping: { Love: 15, Calmness: 10 }
      }
    ]
  },
  {
    id: 7,
    question: "If your emotions had a sound, what would it be?",
    options: [
      {
        value: "flowing-water",
        label: "Flowing water",
        auraMapping: { Calmness: 15, Anxiety: -10 }
      },
      {
        value: "thunder",
        label: "Thunder",
        auraMapping: { Energy: 15, Anxiety: 5 }
      },
      {
        value: "birds-singing",
        label: "Birds singing",
        auraMapping: { Love: 15, Energy: 5 }
      },
      {
        value: "wind",
        label: "Wind in trees",
        auraMapping: { Calmness: 10, Confidence: 5 }
      },
      {
        value: "silence",
        label: "Complete silence",
        auraMapping: { Calmness: 20, Energy: -10 }
      }
    ]
  }
];
