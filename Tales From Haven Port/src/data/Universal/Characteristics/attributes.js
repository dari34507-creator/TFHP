// src/data/static/attributes.js

/**
 * Core attributes system for Tales From Haven Port
 * Defines the seven primary attributes and their properties
 */

const ATTRIBUTES = {
  STRENGTH: {
    id: "str",
    name: "Strength",
    description: "Physical power, muscle, and brute force. Affects melee damage, carrying capacity, and intimidation.",
    effects: {
      combat: 2, // Bonus to melee damage
      capacity: 5, // Carrying capacity multiplier
      intimidation: 1 // Bonus to intimidation checks
    }
  },
  DEXTERITY: {
    id: "dex",
    name: "Dexterity",
    description: "Agility, reflexes, and coordination. Affects ranged combat, stealth, and lockpicking.",
    effects: {
      ranged: 2, // Bonus to ranged accuracy
      stealth: 1, // Bonus to stealth checks
      lockpicking: 1 // Bonus to lockpicking attempts
    }
  },
  INTELLIGENCE: {
    id: "int",
    name: "Intelligence",
    description: "Mental acuity, knowledge, and problem-solving. Affects hacking, investigation, and technology use.",
    effects: {
      hacking: 2, // Bonus to hacking attempts
      investigation: 1, // Bonus to investigation checks
      tech: 1 // Bonus to tech-related tasks
    }
  },
  CHARISMA: {
    id: "cha",
    name: "Charisma",
    description:
      "Personal magnetism, persuasiveness, and social grace. Affects persuasion, prices, and social interactions.",
    effects: {
      persuasion: 2, // Bonus to persuasion checks
      prices: 0.05, // Percentage better/worse prices
      reputation: 1 // Bonus to reputation gains
    }
  },
  CUNNING: {
    id: "cun",
    name: "Cunning",
    description: "Street smarts, guile, and deception. Affects scamming, stealth, and detecting lies.",
    effects: {
      scamming: 2, // Bonus to scam success
      stealth: 1, // Bonus to stealth checks
      detection: 1 // Bonus to detecting deception
    }
  },
  WILLPOWER: {
    id: "wil",
    name: "Willpower",
    description:
      "Mental fortitude, determination, and resistance. Affects stress, addiction resistance, and interrogation.",
    effects: {
      stress: -0.1, // Percentage reduction in stress gain
      addiction: 2, // Bonus to resist addiction
      interrogation: 1 // Bonus to resist/interrogate
    }
  },
  PERCEPTION: {
    id: "prc",
    name: "Perception",
    description: "Awareness of suroundings, sensitivity of the senses",
    effects: {
      stress: -0.1, // Percentage reduction in stress gain
      addiction: 2, // Bonus to resist addiction
      interrogation: 1 // Bonus to resist/interrogate
    }
  }
};

// Starting attribute ranges by background
const BACKGROUND_ATTRIBUTE_RANGES = {
  STREET_URCHIN: {
    [ATTRIBUTES.STRENGTH.id]: { min: 4, max: 7 },
    [ATTRIBUTES.DEXTERITY.id]: { min: 6, max: 9 },
    [ATTRIBUTES.INTELLIGENCE.id]: { min: 3, max: 6 },
    [ATTRIBUTES.CHARISMA.id]: { min: 4, max: 7 },
    [ATTRIBUTES.CUNNING.id]: { min: 7, max: 10 },
    [ATTRIBUTES.WILLPOWER.id]: { min: 5, max: 8 }
  },
  CORPORATE_DESERTER: {
    [ATTRIBUTES.STRENGTH.id]: { min: 3, max: 6 },
    [ATTRIBUTES.DEXTERITY.id]: { min: 4, max: 7 },
    [ATTRIBUTES.INTELLIGENCE.id]: { min: 7, max: 10 },
    [ATTRIBUTES.CHARISMA.id]: { min: 6, max: 9 },
    [ATTRIBUTES.CUNNING.id]: { min: 5, max: 8 },
    [ATTRIBUTES.WILLPOWER.id]: { min: 4, max: 7 }
  }
  // Add more backgrounds as needed
};

// Default natural drift rates (per in-game week)
const NATURAL_DRIFT_RATES = {
  [ATTRIBUTES.STRENGTH.id]: 0.2,
  [ATTRIBUTES.DEXTERITY.id]: 0.2,
  [ATTRIBUTES.INTELLIGENCE.id]: 0.15,
  [ATTRIBUTES.CHARISMA.id]: 0.1,
  [ATTRIBUTES.CUNNING.id]: 0.1,
  [ATTRIBUTES.WILLPOWER.id]: 0.15
};

export { ATTRIBUTES, BACKGROUND_ATTRIBUTE_RANGES, NATURAL_DRIFT_RATES };
