// src/static/weaknesses.js
export const weaknesses = {
    physical: [
        {
            id: 'blind',
            name: 'Blind',
            description: 'You have been blind since birth or lost your sight due to injury.',
            buffs: {
                skills: { Perception: 3, 'Hearing-based Checks': 2 },
                attributes: { Willpower: 2, 'Spatial Awareness': 2 }
            },
            debuffs: {
                skills: { 'Visual Perception': -4, Driving: -3, Firearms: -3 },
                attributes: { 'Combat Awareness': -2 }
            },
            exclusive: true // Cannot be taken with other vision-related weaknesses
        },
        {
            id: 'deaf',
            name: 'Deaf',
            description: 'You have significant hearing impairment or complete deafness.',
            buffs: {
                skills: { 'Visual Perception': 2, 'Lip Reading': 3 },
                attributes: { Focus: 2, 'Visual Memory': 2 }
            },
            debuffs: {
                skills: { 'Hearing-based Checks': -4, Persuasion: -2, 'Social Cues': -2 },
                attributes: { 'Situational Awareness': -2 }
            },
            exclusive: true
        },
        {
            id: 'lame',
            name: 'Lame',
            description: 'You have a significant limp or mobility impairment.',
            buffs: {
                skills: { 'Upper Body Strength': 2, 'Seated Combat': 2 },
                attributes: { Endurance: 2, Willpower: 2 }
            },
            debuffs: {
                skills: { Running: -4, Dodge: -3, 'Foot Pursuits': -3 },
                attributes: { Mobility: -3 }
            }
        },
        {
            id: 'chronic_pain',
            name: 'Chronic Pain',
            description: 'You suffer from constant physical pain that affects your daily life.',
            buffs: {
                skills: { 'Pain Tolerance': 3, 'Mental Fortitude': 2 },
                attributes: { Willpower: 3, Resilience: 2 }
            },
            debuffs: {
                skills: { Concentration: -2, 'Fine Motor Skills': -2, Sleep: -2 },
                attributes: { 'General Comfort': -3 }
            }
        },
        {
            id: 'frail',
            name: 'Frail',
            description: 'You have a naturally weak physical constitution.',
            buffs: {
                skills: { 'Mental Acuity': 2, 'Avoiding Confrontation': 2 },
                attributes: { Intelligence: 2, Cunning: 2 }
            },
            debuffs: {
                skills: { Strength: -3, Endurance: -3, 'Carrying Capacity': -2 },
                attributes: { 'Physical Resilience': -3 }
            }
        }
    ],

    mental: [
        {
            id: 'phobia_heights',
            name: 'Acrophobia',
            description: 'You have an intense fear of heights.',
            buffs: {
                skills: { 'Ground-level Awareness': 2, 'Caution': 2 },
                attributes: { 'Risk Assessment': 2 }
            },
            debuffs: {
                skills: { 'High-place Navigation': -4, 'Balancing': -3 },
                attributes: { 'Vertigo Effects': -3 }
            }
        },
        {
            id: 'phobia_crowds',
            name: 'Agoraphobia',
            description: 'You fear crowded or open spaces.',
            buffs: {
                skills: { 'Solo Operations': 2, 'Small Space Tactics': 2 },
                attributes: { Focus: 2 }
            },
            debuffs: {
                skills: { 'Crowd Navigation': -3, 'Public Speaking': -3 },
                attributes: { 'Social Comfort': -3 }
            }
        },
        {
            id: 'phobia_confinement',
            name: 'Claustrophobia',
            description: 'You fear confined spaces.',
            buffs: {
                skills: { 'Open Space Awareness': 2, 'Escape Planning': 2 },
                attributes: { 'Claustrophobia Management': 2 }
            },
            debuffs: {
                skills: { 'Small Space Operations': -4, 'Underground Navigation': -3 },
                attributes: { 'Confined Space Tolerance': -3 }
            }
        },
        {
            id: 'addiction',
            name: 'Addiction',
            description: 'You struggle with substance dependency.',
            buffs: {
                skills: { 'Street Knowledge': 2, 'Connections': 2, 'Resistance to Effects': 1 },
                attributes: { 'Willpower (when using)': 2 }
            },
            debuffs: {
                skills: { 'Withdrawal Effects': -3, 'Financial Management': -2 },
                attributes: { 'Willpower (when abstaining)': -3, Health: -2 }
            },
            subtypes: [
                'Alcohol', 'Stimulants', 'Opiates', 'Hallucinogens', 'Designer Drugs'
            ]
        },
        {
            id: 'ptsd',
            name: 'PTSD',
            description: 'You suffer from post-traumatic stress disorder.',
            buffs: {
                skills: { 'Hyper-vigilance': 3, 'Threat Detection': 2 },
                attributes: { 'Survival Instinct': 2 }
            },
            debuffs: {
                skills: { 'Stress Management': -3, 'Sleep Quality': -2 },
                attributes: { 'Mental Stability': -3 }
            },
            triggers: ['Loud Noises', 'Specific Situations', 'Certain Locations']
        }
    ],

    social: [
        {
            id: 'infamous',
            name: 'Infamous',
            description: 'You have a negative reputation that precedes you.',
            buffs: {
                skills: { Intimidation: 3, 'Street Cred': 2 },
                attributes: { 'Fear Factor': 2 }
            },
            debuffs: {
                skills: { Persuasion: -2, 'Legitimate Business': -3, 'Police Relations': -3 },
                attributes: { 'Social Acceptance': -3 }
            }
        },
        {
            id: 'social_anxiety',
            name: 'Social Anxiety',
            description: 'You experience significant anxiety in social situations.',
            buffs: {
                skills: { 'Solo Work': 2, 'Observation': 2, 'Online Interaction': 2 },
                attributes: { 'Internal Focus': 2 }
            },
            debuffs: {
                skills: { 'Social Gatherings': -3, 'Public Speaking': -3, 'Negotiation': -2 },
                attributes: { 'Social Confidence': -3 }
            }
        },
        {
            id: 'enemy',
            name: 'Powerful Enemy',
            description: 'You have made a dangerous enemy who seeks to harm you.',
            buffs: {
                skills: { 'Situational Awareness': 3, 'Escape Planning': 2, 'Defensive Tactics': 2 },
                attributes: { 'Constant Vigilance': 2 }
            },
            debuffs: {
                skills: { 'Safety': -3, 'Predictable Routines': -2 },
                attributes: { 'Peace of Mind': -3 }
            },
            enemyTypes: ['Rival Gang', 'Corporation', 'Corrupt Official', 'Former Associate']
        },
        {
            id: 'obligations',
            name: 'Family Obligations',
            description: 'You have significant family responsibilities that demand your attention.',
            buffs: {
                skills: { 'Time Management': 2, 'Multi-tasking': 2, 'Negotiation': 1 },
                attributes: { 'Sense of Responsibility': 2 }
            },
            debuffs: {
                skills: { 'Availability': -2, 'Spontaneous Actions': -2, 'Risk-taking': -2 },
                attributes: { 'Free Time': -3 }
            }
        },
        {
            id: 'distinctive',
            name: 'Distinctive Appearance',
            description: 'You have a highly memorable appearance that makes blending in difficult.',
            buffs: {
                skills: { Intimidation: 2, 'Presence': 2, 'Performance': 1 },
                attributes: { 'Memorability': 2 }
            },
            debuffs: {
                skills: { Stealth: -3, 'Blending In': -3, 'Undercover Work': -3 },
                attributes: { 'Anonymity': -3 }
            },
            aspects: ['Unusual Height', 'Distinctive Scarring', 'Unique Hair', 'Noticeable Tattoos', 'Uncommon Features']
        }
    ],

    supernatural: [
        {
            id: 'cursed',
            name: 'Cursed',
            description: 'You are afflicted with a supernatural curse.',
            buffs: {
                skills: { 'Occult Knowledge': 3, 'Resistance to Magic': 2 },
                attributes: { 'Supernatural Awareness': 2 }
            },
            debuffs: {
                skills: { 'Luck': -3, 'Avoiding Supernatural Attention': -2 },
                attributes: { 'General Fortune': -3 }
            },
            curseTypes: ['Bad Luck', 'Haunting', 'Physical Affliction', 'Social Isolation']
        },
        {
            id: 'haunted',
            name: 'Haunted',
            description: 'You are occasionally followed by spirits of those you ended',
            buffs: {
                skills: { 'Spirit Communication': 3, 'Occult Knowledge': 2 },
                attributes: { 'Supernatural Sensitivity': 2 }
            },
            debuffs: {
                skills: { 'Peaceful Sleep': -3, 'Concentration': -2, 'Privacy': -3 },
                attributes: { 'Mental Peace': -3 }
            }
        },
        {
            id: 'dreamer',
            name: 'Vivid Dreamer',
            description: 'Your dreams are intensely vivid and often disruptive.',
            buffs: {
                skills: { 'Dream Interpretation': 3, 'Creativity': 2, 'Intuition': 2 },
                attributes: { 'Subconscious Awareness': 2 }
            },
            debuffs: {
                skills: { 'Restful Sleep': -3, 'Dream/Reality Distinction': -2 },
                attributes: { 'Mental Stability': -2 }
            }
        }
    ]
};

// Utility functions
export const weaknessesUtils = {
    // Get all weaknesses as a flat array
    getAllWeaknesses: () => {
        return [
            ...weaknesses.physical,
            ...weaknesses.mental,
            ...weaknesses.social,
            ...weaknesses.supernatural
        ];
    },

    // Get weakness by ID
    getWeaknessById: (id) => {
        const allWeaknesses = weaknessesUtils.getAllWeaknesses();
        return allWeaknesses.find(weakness => weakness.id === id);
    },

    // Check if weaknesses are compatible
    checkCompatibility: (selectedWeaknesses) => {
        const conflicts = [];
        const exclusiveWeaknesses = selectedWeaknesses.filter(w => w.exclusive);
        
        // Check for multiple exclusive weaknesses
        if (exclusiveWeaknesses.length > 1) {
            conflicts.push('Cannot have multiple exclusive weaknesses');
        }
        
        // Additional compatibility checks can be added here
        // For example, certain weaknesses might conflict with others
        
        return conflicts;
    },

    // Calculate combined effects of selected weaknesses
    calculateWeaknessEffects: (selectedWeaknessIds) => {
        const effects = {
            buffs: { skills: {}, attributes: {} },
            debuffs: { skills: {}, attributes: {} }
        };
        
        // Helper function to add effects
        const addEffects = (source, target) => {
            if (source.skills) {
                for (const [skill, value] of Object.entries(source.skills)) {
                    target.skills[skill] = (target.skills[skill] || 0) + value;
                }
            }
            
            if (source.attributes) {
                for (const [attribute, value] of Object.entries(source.attributes)) {
                    target.attributes[attribute] = (target.attributes[attribute] || 0) + value;
                }
            }
        };
        
        // Process each selected weakness
        selectedWeaknessIds.forEach(id => {
            const weakness = weaknessesUtils.getWeaknessById(id);
            if (weakness) {
                if (weakness.buffs) addEffects(weakness.buffs, effects.buffs);
                if (weakness.debuffs) addEffects(weakness.debuffs, effects.debuffs);
            }
        });
        
        return effects;
    },

    // Generate random weaknesses for NPCs
    generateRandomWeaknesses: (count = 1, categories = ['physical', 'mental', 'social', 'supernatural']) => {
        const availableWeaknesses = [];
        
        categories.forEach(category => {
            if (weaknesses[category]) {
                availableWeaknesses.push(...weaknesses[category]);
            }
        });
        
        const selected = [];
        const attempts = 0;
        const maxAttempts = 20;
        
        while (selected.length < count && attempts < maxAttempts && availableWeaknesses.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableWeaknesses.length);
            const candidate = availableWeaknesses[randomIndex];
            
            // Check if this weakness is compatible with already selected ones
            const tempSelected = [...selected, candidate];
            const conflicts = weaknessesUtils.checkCompatibility(tempSelected);
            
            if (conflicts.length === 0) {
                selected.push(candidate);
                // Remove from available to avoid duplicates
                availableWeaknesses.splice(randomIndex, 1);
            }
        }
        
        return selected;
    },

    // Get weaknesses by category
    getWeaknessesByCategory: (category) => {
        return weaknesses[category] || [];
    }
};

// Default export
export default weaknesses;