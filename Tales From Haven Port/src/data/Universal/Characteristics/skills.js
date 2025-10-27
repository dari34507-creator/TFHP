// src/data/static/skills.js

/**
 * Skill system for Tales From Haven Port
 * Defines all skills, their related attributes, and properties
 */

import { ATTRIBUTES } from './attributes.js';

const SKILLS = {
  FIREARMS: {
    id: 'firearms',
    name: 'Firearms',
    description: 'Proficiency with guns and ranged weapons. Affects accuracy, reload speed, and weapon handling.',
    primaryAttribute: ATTRIBUTES.DEXTERITY.id,
    secondaryAttribute: ATTRIBUTES.WILLPOWER.id,
    difficulty: 'medium', // easy, medium, hard
    perishRate: 0.15, // How quickly this skill decays when not used (per week)
    practiceRate: 0.25 // How quickly this skill improves with use
  },
  MELEE: {
    id: 'melee',
    name: 'Melee Combat',
    description: 'Proficiency with hand-to-hand combat and melee weapons. Affects damage and defense in close quarters.',
    primaryAttribute: ATTRIBUTES.STRENGTH.id,
    secondaryAttribute: ATTRIBUTES.DEXTERITY.id,
    difficulty: 'medium',
    perishRate: 0.1,
    practiceRate: 0.2
  },
  SEDUCTION: {
    id: 'seduction',
    name: 'Seduction',
    description: 'The art of persuasion through charm and attraction. Affects success in romantic encounters and certain social situations.',
    primaryAttribute: ATTRIBUTES.CHARISMA.id,
    secondaryAttribute: ATTRIBUTES.CUNNING.id,
    difficulty: 'hard',
    perishRate: 0.2,
    practiceRate: 0.15
  },
  PERSUASION: {
    id: 'persuasion',
    name: 'Persuasion',
    description: 'The ability to convince others through logical argument and rhetoric. Affects business deals and negotiations.',
    primaryAttribute: ATTRIBUTES.CHARISMA.id,
    secondaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    difficulty: 'medium',
    perishRate: 0.1,
    practiceRate: 0.2
  },
  INTIMIDATION: {
    id: 'intimidation',
    name: 'Intimidation',
    description: 'The ability to influence others through threats and fear. Affects interrogations and hostile negotiations.',
    primaryAttribute: ATTRIBUTES.STRENGTH.id,
    secondaryAttribute: ATTRIBUTES.CHARISMA.id,
    difficulty: 'easy',
    perishRate: 0.05,
    practiceRate: 0.3
  },
  STEALTH: {
    id: 'stealth',
    name: 'Stealth',
    description: 'The art of moving unseen and unheard. Affects sneaking, pickpocketing, and ambushes.',
    primaryAttribute: ATTRIBUTES.DEXTERITY.id,
    secondaryAttribute: ATTRIBUTES.CUNNING.id,
    difficulty: 'medium',
    perishRate: 0.2,
    practiceRate: 0.25
  },
  LOCKPICKING: {
    id: 'lockpicking',
    name: 'Lockpicking',
    description: 'The ability to open locks without keys. Affects burglary and infiltration.',
    primaryAttribute: ATTRIBUTES.DEXTERITY.id,
    secondaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    difficulty: 'hard',
    perishRate: 0.25,
    practiceRate: 0.15
  },
  HACKING: {
    id: 'hacking',
    name: 'Hacking',
    description: 'The ability to bypass digital security systems. Affects information gathering and sabotage.',
    primaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    secondaryAttribute: ATTRIBUTES.CUNNING.id,
    difficulty: 'hard',
    perishRate: 0.3,
    practiceRate: 0.1
  },
  FIRST_AID: {
    id: 'first_aid',
    name: 'First Aid',
    description: 'Knowledge of medical treatment and emergency care. Affects healing efficiency and drug effectiveness.',
    primaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    secondaryAttribute: ATTRIBUTES.DEXTERITY.id,
    difficulty: 'medium',
    perishRate: 0.15,
    practiceRate: 0.2
  },
  DRIVING: {
    id: 'driving',
    name: 'Driving',
    description: 'Proficiency with operating vehicles. Affects chase outcomes and vehicle handling.',
    primaryAttribute: ATTRIBUTES.DEXTERITY.id,
    secondaryAttribute: ATTRIBUTES.CUNNING.id,
    difficulty: 'easy',
    perishRate: 0.05,
    practiceRate: 0.3
  },
  STREETWISE: {
    id: 'streetwise',
    name: 'Streetwise',
    description: 'Knowledge of urban environments and criminal networks. Affects information gathering and navigating dangerous areas.',
    primaryAttribute: ATTRIBUTES.CUNNING.id,
    secondaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    difficulty: 'medium',
    perishRate: 0.1,
    practiceRate: 0.25
  },
  INVESTIGATION: {
    id: 'investigation',
    name: 'Investigation',
    description: 'The ability to find and interpret clues. Affects detective work and uncovering secrets.',
    primaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    secondaryAttribute: ATTRIBUTES.CUNNING.id,
    difficulty: 'hard',
    perishRate: 0.1,
    practiceRate: 0.15
  },
  FINANCE: {
    id: 'finance',
    name: 'Finance',
    description: 'Understanding of money management and economic systems. Affects business profits and investment returns.',
    primaryAttribute: ATTRIBUTES.INTELLIGENCE.id,
    secondaryAttribute: ATTRIBUTES.CUNNING.id,
    difficulty: 'hard',
    perishRate: 0.2,
    practiceRate: 0.1
  }
};

// Skill categories for UI organization
const SKILL_CATEGORIES = {
  COMBAT: {
    name: 'Combat',
    skills: [SKILLS.FIREARMS.id, SKILLS.MELEE.id]
  },
  SOCIAL: {
    name: 'Social',
    skills: [SKILLS.SEDUCTION.id, SKILLS.PERSUASION.id, SKILLS.INTIMIDATION.id]
  },
  STEALTH: {
    name: 'Stealth',
    skills: [SKILLS.STEALTH.id, SKILLS.LOCKPICKING.id]
  },
  TECHNICAL: {
    name: 'Technical',
    skills: [SKILLS.HACKING.id, SKILLS.FIRST_AID.id, SKILLS.DRIVING.id]
  },
  KNOWLEDGE: {
    name: 'Knowledge',
    skills: [SKILLS.STREETWISE.id, SKILLS.INVESTIGATION.id, SKILLS.FINANCE.id]
  }
};

// Starting skill bonuses by background
const BACKGROUND_SKILL_BONUSES = {
  STREET_URCHIN: {
    [SKILLS.STREETWISE.id]: 2,
    [SKILLS.STEALTH.id]: 1,
    [SKILLS.LOCKPICKING.id]: 1
  },
  CORPORATE_DESERTER: {
    [SKILLS.FINANCE.id]: 2,
    [SKILLS.HACKING.id]: 1,
    [SKILLS.PERSUASION.id]: 1
  }
  // Add more backgrounds as needed
};

export { SKILLS, SKILL_CATEGORIES, BACKGROUND_SKILL_BONUSES };