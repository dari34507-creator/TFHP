// src/data/static/traits.js

/**
 * Traits system for Tales From Haven Port
 * Defines character traits that can be acquired through gameplay or selected during character creation
 */

import { ATTRIBUTES } from './attributes.js';
import { SKILLS } from './skills.js';

const TRAITS = {
  // Physical Traits
  ATHLETIC: {
    id: 'athletic',
    name: 'Athletic',
    description: 'Natural physical prowess and coordination.',
    category: 'physical',
    effects: {
      attributes: { [ATTRIBUTES.STRENGTH.id]: 1, [ATTRIBUTES.DEXTERITY.id]: 1 },
      skills: { [SKILLS.MELEE.id]: 1, [SKILLS.DRIVING.id]: 1 }
    },
    exclusiveWith: ['frail', 'clumsy']
  },
  FRAIL: {
    id: 'frail',
    name: 'Frail',
    description: 'Naturally weak physical constitution.',
    category: 'physical',
    effects: {
      attributes: { [ATTRIBUTES.STRENGTH.id]: -2 },
      skills: { [SKILLS.MELEE.id]: -1 }
    },
    exclusiveWith: ['athletic', 'sturdy']
  },
  STURDY: {
    id: 'sturdy',
    name: 'Sturdy',
    description: 'Resilient body that can withstand punishment.',
    category: 'physical',
    effects: {
      attributes: { [ATTRIBUTES.ENDURANCE.id]: 2 },
      skills: { [SKILLS.FIRST_AID.id]: 1 }
    },
    exclusiveWith: ['frail']
  },
  CLUMSY: {
    id: 'clumsy',
    name: 'Clumsy',
    description: 'Poor coordination and tendency to stumble.',
    category: 'physical',
    effects: {
      attributes: { [ATTRIBUTES.DEXTERITY.id]: -2 },
      skills: { [SKILLS.DRIVING.id]: -1, [SKILLS.STEALTH.id]: -1 }
    },
    exclusiveWith: ['athletic', 'graceful']
  },

  // Mental Traits
  ANALYTICAL: {
    id: 'analytical',
    name: 'Analytical',
    description: 'Exceptional problem-solving and logical thinking abilities.',
    category: 'mental',
    effects: {
      attributes: { [ATTRIBUTES.INTELLIGENCE.id]: 2 },
      skills: { [SKILLS.HACKING.id]: 1, [SKILLS.INVESTIGATION.id]: 1 }
    },
    exclusiveWith: ['simple_minded']
  },
  SIMPLE_MINDED: {
    id: 'simple_minded',
    name: 'Simple Minded',
    description: 'Struggles with complex concepts and problem-solving.',
    category: 'mental',
    effects: {
      attributes: { [ATTRIBUTES.INTELLIGENCE.id]: -2 },
      skills: { [SKILLS.HACKING.id]: -2, [SKILLS.FINANCE.id]: -2 }
    },
    exclusiveWith: ['analytical', 'wise']
  },
  WISE: {
    id: 'wise',
    name: 'Wise',
    description: 'Deep understanding of people and situations.',
    category: 'mental',
    effects: {
      attributes: { [ATTRIBUTES.INTELLIGENCE.id]: 1, [ATTRIBUTES.CUNNING.id]: 1 },
      skills: { [SKILLS.INVESTIGATION.id]: 1, [SKILLS.STREETWISE.id]: 1 }
    },
    exclusiveWith: ['simple_minded']
  },
  OBSERVANT: {
    id: 'observant',
    name: 'Observant',
    description: 'Notices details others often miss.',
    category: 'mental',
    effects: {
      attributes: { [ATTRIBUTES.PERCEPTION.id]: 2 },
      skills: { [SKILLS.INVESTIGATION.id]: 1, [SKILLS.STEALTH.id]: 1 }
    }
  },

  // Social Traits
  CHARISMATIC: {
    id: 'charismatic',
    name: 'Charismatic',
    description: 'Naturally persuasive and likable.',
    category: 'social',
    effects: {
      attributes: { [ATTRIBUTES.CHARISMA.id]: 2 },
      skills: { [SKILLS.PERSUASION.id]: 1, [SKILLS.SEDUCTION.id]: 1 }
    },
    exclusiveWith: ['unlikable']
  },
  UNLIKABLE: {
    id: 'unlikable',
    name: 'Unlikable',
    description: 'Socially awkward and off-putting to others.',
    category: 'social',
    effects: {
      attributes: { [ATTRIBUTES.CHARISMA.id]: -2 },
      skills: { [SKILLS.PERSUASION.id]: -1, [SKILLS.SEDUCTION.id]: -1 }
    },
    exclusiveWith: ['charismatic']
  },
  INTIMIDATING: {
    id: 'intimidating',
    name: 'Intimidating',
    description: 'Natural presence that commands fear and respect.',
    category: 'social',
    effects: {
      attributes: { [ATTRIBUTES.CHARISMA.id]: 1 },
      skills: { [SKILLS.INTIMIDATION.id]: 2 }
    }
  },
  EMPATHETIC: {
    id: 'empathetic',
    name: 'Emphatetic',
    description: 'Sensitive to the emotions and needs of others.',
    category: 'social',
    effects: {
      attributes: { [ATTRIBUTES.CHARISMA.id]: 1 },
      skills: { [SKILLS.PERSUASION.id]: 1, [SKILLS.SEDUCTION.id]: 1 }
    }
  },

  // Criminal Traits
  STREET_SMART: {
    id: 'street_smart',
    name: 'Street Smart',
    description: 'Knowledgeable about urban survival and criminal underworld.',
    category: 'criminal',
    effects: {
      attributes: { [ATTRIBUTES.CUNNING.id]: 2 },
      skills: { [SKILLS.STREETWISE.id]: 2, [SKILLS.STEALTH.id]: 1 }
    }
  },
  CONNIVER: {
    id: 'conniver',
    name: 'Conniver',
    description: 'Skilled at manipulation and deceit.',
    category: 'criminal',
    effects: {
      attributes: { [ATTRIBUTES.CUNNING.id]: 2 },
      skills: { [SKILLS.PERSUASION.id]: 1, [SKILLS.SEDUCTION.id]: 1 }
    }
  },
  BRUTAL: {
    id: 'brutal',
    name: 'Brutal',
    description: 'Willing to use extreme violence without hesitation.',
    category: 'criminal',
    effects: {
      attributes: { [ATTRIBUTES.STRENGTH.id]: 1 },
      skills: { [SKILLS.INTIMIDATION.id]: 2, [SKILLS.MELEE.id]: 1 }
    },
    reputationEffect: { fear: 2, respect: -1 }
  },
  SILENT_TYPE: {
    id: 'silent_type',
    name: 'Silent Type',
    description: 'Prefers to observe rather than speak, making others uneasy.',
    category: 'criminal',
    effects: {
      attributes: { [ATTRIBUTES.CUNNING.id]: 1 },
      skills: { [SKILLS.STEALTH.id]: 1, [SKILLS.INTIMIDATION.id]: 1 }
    }
  },

  // Special Traits (Acquired through gameplay)
  ADDICT: {
    id: 'addict',
    name: 'Addict',
    description: 'Struggles with substance dependency.',
    category: 'special',
    effects: {
      attributes: { [ATTRIBUTES.WILLPOWER.id]: -2 },
      skills: { [SKILLS.STREETWISE.id]: 1 }
    },
    acquired: true
  },
  CONNECTED: {
    id: 'connected',
    name: 'Connected',
    description: 'Has valuable contacts throughout Haven Port.',
    category: 'special',
    effects: {
      skills: { [SKILLS.STREETWISE.id]: 2, [SKILLS.PERSUASION.id]: 1 }
    },
    acquired: true
  },
  NOTORIOUS: {
    id: 'notorious',
    name: 'Notorious',
    description: 'Known throughout the criminal underworld.',
    category: 'special',
    effects: {
      skills: { [SKILLS.INTIMIDATION.id]: 2 },
      reputationEffect: { fear: 3, respect: 2 }
    },
    acquired: true
  },
  INFORMANT: {
    id: 'informant',
    name: 'Informant',
    description: 'Has ties to law enforcement.',
    category: 'special',
    effects: {
      skills: { [SKILLS.STREETWISE.id]: 1, [SKILLS.INVESTIGATION.id]: 1 }
    },
    acquired: true,
    exclusiveWith: ['notorious']
  }
};

// Categories for UI organization
const TRAIT_CATEGORIES = {
  PHYSICAL: { name: 'Physical', traits: [] },
  MENTAL: { name: 'Mental', traits: [] },
  SOCIAL: { name: 'Social', traits: [] },
  CRIMINAL: { name: 'Criminal', traits: [] },
  SPECIAL: { name: 'Special', traits: [] }
};

// Populate categories
Object.values(TRAITS).forEach(trait => {
  TRAIT_CATEGORIES[trait.category.toUpperCase()].traits.push(trait.id);
});

// Starting trait options by background
const BACKGROUND_TRAIT_OPTIONS = {
  STREET_URCHIN: [
    TRAITS.STREET_SMART.id,
    TRAITS.STURDY.id,
    TRAITS.OBSERVANT.id,
    TRAITS.SILENT_TYPE.id
  ],
  CORPORATE_DESERTER: [
    TRAITS.ANALYTICAL.id,
    TRAITS.CHARISMATIC.id,
    TRAITS.CONNIVER.id,
    TRAITS.CONNECTED.id
  ]
  // Add more backgrounds as needed
};

// Utility functions
const TraitsUtils = {
  // Get trait by ID
  getTrait: (traitId) => TRAITS[traitId],

  // Check if traits are compatible
  checkCompatibility: (traitIds) => {
    const conflicts = [];
    const traits = traitIds.map(id => TRAITS[id]).filter(Boolean);
    
    traits.forEach(trait => {
      if (trait.exclusiveWith) {
        trait.exclusiveWith.forEach(exclusiveId => {
          if (traitIds.includes(exclusiveId)) {
            conflicts.push(`${trait.name} cannot be combined with ${TRAITS[exclusiveId].name}`);
          }
        });
      }
    });
    
    return conflicts;
  },

  // Calculate combined effects of traits
  calculateTraitEffects: (traitIds) => {
    const effects = {
      attributes: {},
      skills: {},
      reputation: {}
    };
    
    traitIds.forEach(id => {
      const trait = TRAITS[id];
      if (trait && trait.effects) {
        // Process attribute effects
        if (trait.effects.attributes) {
          Object.entries(trait.effects.attributes).forEach(([attr, value]) => {
            effects.attributes[attr] = (effects.attributes[attr] || 0) + value;
          });
        }
        
        // Process skill effects
        if (trait.effects.skills) {
          Object.entries(trait.effects.skills).forEach(([skill, value]) => {
            effects.skills[skill] = (effects.skills[skill] || 0) + value;
          });
        }
        
        // Process reputation effects
        if (trait.effects.reputationEffect) {
          Object.entries(trait.effects.reputationEffect).forEach(([rep, value]) => {
            effects.reputation[rep] = (effects.reputation[rep] || 0) + value;
          });
        }
      }
    });
    
    return effects;
  },

  // Get traits by category
  getTraitsByCategory: (category) => {
    return Object.values(TRAITS).filter(trait => trait.category === category);
  },

  // Get available starting traits based on background
  getBackgroundTraits: (backgroundId) => {
    return BACKGROUND_TRAIT_OPTIONS[backgroundId] || [];
  },

  // Filter out acquired traits (only for character creation)
  filterStartingTraits: (traits) => {
    return traits.filter(traitId => !TRAITS[traitId]?.acquired);
  }
};

export { TRAITS, TRAIT_CATEGORIES, BACKGROUND_TRAIT_OPTIONS, TraitsUtils };