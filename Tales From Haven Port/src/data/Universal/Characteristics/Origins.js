// src/static/origins.js
export const origins = {
    childhoods: [
        {
            id: 'street_urchin',
            name: 'Street Urchin',
            description: 'Grew up on the streets of Haven Port, learning to survive through wit and theft.',
            effects: {
                skills: { LockPicking: 2, Perception: 1 },
                attributes: { Cunning: 2, Willpower: 1 }
            }
        },
        {
            id: 'corporate_heir',
            name: 'Corporate Heir',
            description: 'Raised in luxury within one of Haven Port\'s powerful corporate families.',
            effects: {
                skills: { FinancialAcumen: 3, Persuasion: 1 },
                attributes: { Charisma: 2, Intelligence: 1 }
            }
        },
        {
            id: 'foster_system',
            name: 'Foster System Kid',
            description: 'Bounced between foster homes, never staying anywhere long enough to put down roots.',
            effects: {
                skills: { Adaptability: 2, Deception: 1 },
                attributes: { Cunning: 2, Willpower: 1 }
            }
        },
        {
            id: 'dock_worker',
            name: 'Dock Worker Family',
            description: 'Family worked in the docks, learning the ins and outs of harbor operations.',
            effects: {
                skills: { Mechanical: 2, Strength: 1 },
                attributes: { Endurance: 2, Strength: 1 }
            }
        },
        {
            id: 'religious_upbringing',
            name: 'Religious Upbringing',
            description: 'Raised in one of Haven Port\'s many churches or cults.',
            effects: {
                skills: { Persuasion: 2, Willpower: 1 },
                attributes: { Willpower: 2, Charisma: 1 }
            }
        },
        {
            id: 'military_brat',
            name: 'Military Brat',
            description: 'Grew up on military bases, moving frequently with a parent in the service.',
            effects: {
                skills: { Firearms: 2, Discipline: 1 },
                attributes: { Discipline: 2, Strength: 1 }
            }
        },
        {
            id: 'artist_colony',
            name: 'Artist Colony',
            description: 'Raised in Haven Port\'s bohemian district surrounded by artists and free thinkers.',
            effects: {
                skills: { Creativity: 2, Persuasion: 1 },
                attributes: { Creativity: 2, Charisma: 1 }
            }
        },
        {
            id: 'fishing_village',
            name: 'Fishing Village',
            description: 'Grew up in one of the small fishing communities on the outskirts of Haven Port.',
            effects: {
                skills: { Sailing: 2, Endurance: 1 },
                attributes: { Endurance: 2, Strength: 1 }
            }
        },
        {
            id: 'academy_student',
            name: 'Academy Student',
            description: 'Attended one of Haven Port\'s prestigious academies from a young age.',
            effects: {
                skills: { Intelligence: 2, Research: 1 },
                attributes: { Intelligence: 2, Wisdom: 1 }
            }
        },
        {
            id: 'gang_affiliated',
            name: 'Gang Affiliated',
            description: 'Grew up in a neighborhood controlled by one of Haven Port\'s gangs.',
            effects: {
                skills: { Intimidation: 2, StreetSmarts: 1 },
                attributes: { Cunning: 2, Toughness: 1 }
            }
        },
        {
            id: 'orphanage',
            name: 'Orphanage Raised',
            description: 'Spent childhood in one of Haven Port\'s overcrowded orphanages.',
            effects: {
                skills: { Stealth: 2, Survival: 1 },
                attributes: { Resilience: 2, Cunning: 1 }
            }
        },
        {
            id: 'medical_family',
            name: 'Medical Family',
            description: 'Family worked in healthcare, exposed to medicine from a young age.',
            effects: {
                skills: { FirstAid: 2, Chemistry: 1 },
                attributes: { Intelligence: 2, Compassion: 1 }
            }
        },
        {
            id: 'criminal_enterprise',
            name: 'Criminal Enterprise',
            description: 'Family was involved in organized crime, learning the business young.',
            effects: {
                skills: { Intimidation: 2, Deception: 1 },
                attributes: { Cunning: 2, Ruthlessness: 1 }
            }
        },
        {
            id: 'high_society',
            name: 'High Society',
            description: 'Raised among Haven Port\'s elite, attending galas and social events.',
            effects: {
                skills: { Etiquette: 2, Persuasion: 1 },
                attributes: { Charisma: 2, Intelligence: 1 }
            }
        },
        {
            id: 'rural_outsider',
            name: 'Rural Outsider',
            description: 'Grew up outside the city, recently moved to Haven Port.',
            effects: {
                skills: { Survival: 2, Nature: 1 },
                attributes: { Endurance: 2, Strength: 1 }
            }
        },
        {
            id: 'tech_enthusiast',
            name: 'Tech Enthusiast',
            description: 'Spent childhood tinkering with electronics and computers.',
            effects: {
                skills: { Technology: 2, Hacking: 1 },
                attributes: { Intelligence: 2, Creativity: 1 }
            }
        },
        {
            id: 'entertainment_family',
            name: 'Entertainment Family',
            description: 'Family worked in Haven Port\'s entertainment industry.',
            effects: {
                skills: { Performance: 2, Persuasion: 1 },
                attributes: { Charisma: 2, Creativity: 1 }
            }
        },
        {
            id: 'refugee',
            name: 'Refugee',
            description: 'Fled to Haven Port from a war-torn or troubled region.',
            effects: {
                skills: { Survival: 2, Adaptability: 1 },
                attributes: { Resilience: 2, Willpower: 1 }
            }
        },
        {
            id: 'police_family',
            name: 'Police Family',
            description: 'Grew up with family members in law enforcement.',
            effects: {
                skills: { Investigation: 2, Firearms: 1 },
                attributes: { Discipline: 2, Integrity: 1 }
            }
        },
        {
            id: 'addicted_parents',
            name: 'Addicted Parents',
            description: 'Raised by parents struggling with addiction.',
            effects: {
                skills: { StreetSmarts: 2, Deception: 1 },
                attributes: { Resilience: 2, Cunning: 1 }
            }
        },
        {
            id: 'gambling_den',
            name: 'Gambling Den',
            description: 'Family ran or frequently visited underground gambling establishments.',
            effects: {
                skills: { Probability: 2, Deception: 1 },
                attributes: { Cunning: 2, RiskTaking: 1 }
            }
        },
        {
            id: 'library_rat',
            name: 'Library Rat',
            description: 'Spent most of childhood in libraries, immersed in books.',
            effects: {
                skills: { Research: 2, Knowledge: 1 },
                attributes: { Intelligence: 2, Wisdom: 1 }
            }
        },
        {
            id: 'doomsday_cult',
            name: 'Doomsday Cult',
            description: 'Raised in an isolated doomsday cult on the outskirts of Haven Port.',
            effects: {
                skills: { Persuasion: 2, Survival: 1 },
                attributes: { Willpower: 2, Faith: 1 }
            }
        },
        {
            id: 'black_market',
            name: 'Black Market',
            description: 'Family operated in Haven Port\'s underground black market.',
            effects: {
                skills: { Barter: 2, Stealth: 1 },
                attributes: { Cunning: 2, StreetSmarts: 1 }
            }
        },
        {
            id: 'upper_middle_class',
            name: 'Upper Middle Class',
            description: 'Comfortable suburban upbringing with all the advantages.',
            effects: {
                skills: { Education: 2, SocialSkills: 1 },
                attributes: { Charisma: 2, Intelligence: 1 }
            }
        }
    ],

    inclinations: [
        {
            id: 'violent',
            name: 'Violent',
            description: 'Tendency to resolve conflicts through force and aggression.',
            effects: {
                skills: { Intimidation: 2, Fighting: 1 },
                attributes: { Strength: 2, Aggression: 1 }
            }
        },
        {
            id: 'charitable',
            name: 'Charitable',
            description: 'Driven to help others, even at personal cost.',
            effects: {
                skills: { Persuasion: 2, Empathy: 1 },
                attributes: { Compassion: 2, Charisma: 1 }
            }
        },
        {
            id: 'deceptive',
            name: 'Deceptive',
            description: 'Naturally inclined to mislead and manipulate others.',
            effects: {
                skills: { Deception: 2, Stealth: 1 },
                attributes: { Cunning: 2, Charisma: 1 }
            }
        },
        {
            id: 'ambitious',
            name: 'Ambitious',
            description: 'Driven to achieve power, status, and success.',
            effects: {
                skills: { Leadership: 2, Strategy: 1 },
                attributes: { Willpower: 2, Intelligence: 1 }
            }
        },
        {
            id: 'lazy',
            name: 'Lazy',
            description: 'Prefers the path of least resistance and minimal effort.',
            effects: {
                skills: { Creativity: 2, -Discipline: 1 },
                attributes: { -Willpower: 2, Cunning: 1 }
            }
        },
        {
            id: 'curious',
            name: 'Curious',
            description: 'Naturally inquisitive, always seeking new knowledge.',
            effects: {
                skills: { Research: 2, Perception: 1 },
                attributes: { Intelligence: 2, Wisdom: 1 }
            }
        },
        {
            id: 'risk_taker',
            name: 'Risk Taker',
            description: 'Thrives on danger and high-stakes situations.',
            effects: {
                skills: { Adaptability: 2, Courage: 1 },
                attributes: { Bravery: 2, Cunning: 1 }
            }
        },
        {
            id: 'cautious',
            name: 'Cautious',
            description: 'Prefers careful planning over impulsive action.',
            effects: {
                skills: { Planning: 2, Perception: 1 },
                attributes: { Wisdom: 2, Intelligence: 1 }
            }
        },
        {
            id: 'hedonistic',
            name: 'Hedonistic',
            description: 'Seeks pleasure and sensory experiences above all else.',
            effects: {
                skills: { Seduction: 2, Persuasion: 1 },
                attributes: { Charisma: 2, -Willpower: 1 }
            }
        },
        {
            id: 'disciplined',
            name: 'Disciplined',
            description: 'Maintains strict self-control and routine.',
            effects: {
                skills: { Focus: 2, Training: 1 },
                attributes: { Willpower: 2, Discipline: 1 }
            }
        },
        {
            id: 'paranoid',
            name: 'Paranoid',
            description: 'Constantly suspicious of others\' motives.',
            effects: {
                skills: { Perception: 2, Investigation: 1 },
                attributes: { Cunning: 2, -Charisma: 1 }
            }
        },
        {
            id: 'optimistic',
            name: 'Optimistic',
            description: 'Sees the positive in every situation, sometimes naively.',
            effects: {
                skills: { Persuasion: 2, Motivation: 1 },
                attributes: { Charisma: 2, -Perception: 1 }
            }
        },
        {
            id: 'pessimistic',
            name: 'Pessimistic',
            description: 'Expects the worst outcome in every situation.',
            effects: {
                skills: { Planning: 2, -Persuasion: 1 },
                attributes: { Wisdom: 2, -Charisma: 1 }
            }
        },
        {
            id: 'loyal',
            name: 'Loyal',
            description: 'Devoted to friends, family, and causes.',
            effects: {
                skills: { Teamwork: 2, Protection: 1 },
                attributes: { Integrity: 2, Willpower: 1 }
            }
        },
        {
            id: 'treacherous',
            name: 'Treacherous',
            description: 'Willing to betray others for personal gain.',
            effects: {
                skills: { Deception: 2, Stealth: 1 },
                attributes: { Cunning: 2, -Integrity: 1 }
            }
        },
        {
            id: 'creative',
            name: 'Creative',
            description: 'Thinks outside the box, finds unconventional solutions.',
            effects: {
                skills: { Innovation: 2, Artistry: 1 },
                attributes: { Creativity: 2, Intelligence: 1 }
            }
        },
        {
            id: 'analytic',
            name: 'Analytic',
            description: 'Approaches problems with logic and systematic thinking.',
            effects: {
                skills: { Research: 2, Strategy: 1 },
                attributes: { Intelligence: 2, Wisdom: 1 }
            }
        },
        {
            id: 'spiritual',
            name: 'Spiritual',
            description: 'Seeks meaning beyond the material world.',
            effects: {
                skills: { Persuasion: 2, Meditation: 1 },
                attributes: { Willpower: 2, Wisdom: 1 }
            }
        },
        {
            id: 'materialistic',
            name: 'Materialistic',
            description: 'Values possessions and wealth above all else.',
            effects: {
                skills: { Barter: 2, Appraisal: 1 },
                attributes: { Cunning: 2, -Compassion: 1 }
            }
        },
        {
            id: 'competitive',
            name: 'Competitive',
            description: 'Driven to win and be better than others.',
            effects: {
                skills: { Strategy: 2, Performance: 1 },
                attributes: { Willpower: 2, Aggression: 1 }
            }
        },
        {
            id: 'cooperative',
            name: 'Cooperative',
            description: 'Prefers working with others rather than alone.',
            effects: {
                skills: { Teamwork: 2, Communication: 1 },
                attributes: { Charisma: 2, Compassion: 1 }
            }
        },
        {
            id: 'stoic',
            name: 'Stoic',
            description: 'Shows little emotion, endures hardship without complaint.',
            effects: {
                skills: { Willpower: 2, Discipline: 1 },
                attributes: { Resilience: 2, -Charisma: 1 }
            }
        },
        {
            id: 'emotional',
            name: 'Emotional',
            description: 'Experiences and expresses feelings intensely.',
            effects: {
                skills: { Empathy: 2, Persuasion: 1 },
                attributes: { Compassion: 2, -Discipline: 1 }
            }
        },
        {
            id: 'traditional',
            name: 'Traditional',
            description: 'Values established customs and ways of doing things.',
            effects: {
                skills: { History: 2, Culture: 1 },
                attributes: { Wisdom: 2, -Creativity: 1 }
            }
        },
        {
            id: 'progressive',
            name: 'Progressive',
            description: 'Seeks change and innovation, challenges established norms.',
            effects: {
                skills: { Innovation: 2, Persuasion: 1 },
                attributes: { Creativity: 2, Intelligence: 1 }
            }
        }
    ],

    jobBackgrounds: [
        {
            id: 'enforcer',
            name: 'Enforcer',
            description: 'Worked as muscle for criminal organizations.',
            effects: {
                skills: { Intimidation: 2, Fighting: 1 },
                attributes: { Strength: 2, Aggression: 1 }
            }
        },
        {
            id: 'bartender',
            name: 'Bartender',
            description: 'Served drinks and gathered information in Haven Port\'s bars.',
            effects: {
                skills: { Persuasion: 2, Perception: 1 },
                attributes: { Charisma: 2, Wisdom: 1 }
            }
        },
        {
            id: 'mechanic',
            name: 'Mechanic',
            description: 'Worked with vehicles and machinery.',
            effects: {
                skills: { Mechanical: 2, Technology: 1 },
                attributes: { Intelligence: 2, Dexterity: 1 }
            }
        },
        {
            id: 'corporate_analyst',
            name: 'Corporate Analyst',
            description: 'Worked in data analysis for a corporation.',
            effects: {
                skills: { Research: 2, Strategy: 1 },
                attributes: { Intelligence: 2, Wisdom: 1 }
            }
        },
        {
            id: 'sex_worker',
            name: 'Sex Worker',
            description: 'Worked in Haven Port\'s adult entertainment industry.',
            effects: {
                skills: { Seduction: 2, Perception: 1 },
                attributes: { Charisma: 2, Cunning: 1 }
            }
        },
        {
            id: 'paramedic',
            name: 'Paramedic',
            description: 'Provided emergency medical services.',
            effects: {
                skills: { FirstAid: 2, Composure: 1 },
                attributes: { Intelligence: 2, Compassion: 1 }
            }
        },
        {
            id: 'security_guard',
            name: 'Security Guard',
            description: 'Provided protection for businesses and individuals.',
            effects: {
                skills: { Perception: 2, Firearms: 1 },
                attributes: { Discipline: 2, Vigilance: 1 }
            }
        },
        {
            id: 'drug_courier',
            name: 'Drug Courier',
            description: 'Transported illicit substances throughout Haven Port.',
            effects: {
                skills: { Stealth: 2, StreetSmarts: 1 },
                attributes: { Cunning: 2, Dexterity: 1 }
            }
        },
        {
            id: 'journalist',
            name: 'Journalist',
            description: 'Investigated and reported on Haven Port\'s stories.',
            effects: {
                skills: { Research: 2, Persuasion: 1 },
                attributes: { Intelligence: 2, Charisma: 1 }
            }
        },
        {
            id: 'chef',
            name: 'Chef',
            description: 'Prepared food in Haven Port\'s restaurants.',
            effects: {
                skills: { Creativity: 2, Discipline: 1 },
                attributes: { Dexterity: 2, Intelligence: 1 }
            }
        },
        {
            id: 'street_performer',
            name: 'Street Performer',
            description: 'Entertained crowds in public spaces for tips.',
            effects: {
                skills: { Performance: 2, Persuasion: 1 },
                attributes: { Charisma: 2, Creativity: 1 }
            }
        },
        {
            id: 'hacker',
            name: 'Hacker',
            description: 'Worked in digital infiltration and information gathering.',
            effects: {
                skills: { Technology: 2, Research: 1 },
                attributes: { Intelligence: 2, Cunning: 1 }
            }
        },
        {
            id: 'construction_worker',
            name: 'Construction Worker',
            description: 'Worked on Haven Port\'s building projects.',
            effects: {
                skills: { Strength: 2, Mechanical: 1 },
                attributes: { Endurance: 2, Strength: 1 }
            }
        },
        {
            id: 'drug_dealer',
            name: 'Drug Dealer',
            description: 'Sold illicit substances on Haven Port\'s streets.',
            effects: {
                skills: { StreetSmarts: 2, Barter: 1 },
                attributes: { Cunning: 2, Charisma: 1 }
            }
        },
        {
            id: 'personal_trainer',
            name: 'Personal Trainer',
            description: 'Trained clients in physical fitness.',
            effects: {
                skills: { Training: 2, Motivation: 1 },
                attributes: { Strength: 2, Charisma: 1 }
            }
        },
        {
            id: 'tattoo_artist',
            name: 'Tattoo Artist',
            description: 'Created body art in Haven Port\'s parlors.',
            effects: {
                skills: { Artistry: 2, Dexterity: 1 },
                attributes: { Creativity: 2, Dexterity: 1 }
            }
        },
        {
            id: 'taxi_driver',
            name: 'Taxi Driver',
            description: 'Navigated Haven Port\'s streets while transporting passengers.',
            effects: {
                skills: { Driving: 2, Perception: 1 },
                attributes: { Wisdom: 2, Dexterity: 1 }
            }
        },
        {
            id: 'shop_clerk',
            name: 'Shop Clerk',
            description: 'Worked retail in one of Haven Port\'s many stores.',
            effects: {
                skills: { Barter: 2, Persuasion: 1 },
                attributes: { Charisma: 2, Patience: 1 }
            }
        },
        {
            id: 'bouncer',
            name: 'Bouncer',
            description: 'Provided security at clubs and bars.',
            effects: {
                skills: { Intimidation: 2, Fighting: 1 },
                attributes: { Strength: 2, Perception: 1 }
            }
        },
        {
            id: 'pickpocket',
            name: 'Pickpocket',
            description: 'Specialized in discreet theft from individuals.',
            effects: {
                skills: { Stealth: 2, Dexterity: 1 },
                attributes: { Cunning: 2, Dexterity: 1 }
            }
        },
        {
            id: 'social_worker',
            name: 'Social Worker',
            description: 'Worked with Haven Port\'s vulnerable populations.',
            effects: {
                skills: { Empathy: 2, Persuasion: 1 },
                attributes: { Compassion: 2, Willpower: 1 }
            }
        },
        {
            id: 'dock_worker',
            name: 'Dock Worker',
            description: 'Worked loading and unloading ships in the harbor.',
            effects: {
                skills: { Strength: 2, Endurance: 1 },
                attributes: { Strength: 2, Endurance: 1 }
            }
        },
        {
            id: 'stripper',
            name: 'Stripper',
            description: 'Performed in adult entertainment venues.',
            effects: {
                skills: { Performance: 2, Seduction: 1 },
                attributes: { Charisma: 2, Dexterity: 1 }
            }
        },
        {
            id: 'loan_shark',
            name: 'Loan Shark',
            description: 'Provided high-interest loans with aggressive collection methods.',
            effects: {
                skills: { Intimidation: 2, Barter: 1 },
                attributes: { Cunning: 2, Ruthlessness: 1 }
            }
        },
        {
            id: 'janitor',
            name: 'Janitor',
            description: 'Cleaned and maintained buildings throughout Haven Port.',
            effects: {
                skills: { Perception: 2, Stealth: 1 },
                attributes: { Endurance: 2, Wisdom: 1 }
            }
        }
    ]
};

// Utility functions
export const originsUtils = {
    // Get random origin options
    getRandomOrigin: () => {
        const randomChildhood = origins.childhoods[Math.floor(Math.random() * origins.childhoods.length)];
        const randomInclination = origins.inclinations[Math.floor(Math.random() * origins.inclinations.length)];
        const randomJob = origins.jobBackgrounds[Math.floor(Math.random() * origins.jobBackgrounds.length)];
        
        return {
            childhood: randomChildhood,
            inclination: randomInclination,
            jobBackground: randomJob
        };
    },

    // Get origin by ID
    getOriginById: (type, id) => {
        return origins[type].find(origin => origin.id === id);
    },

    // Calculate combined effects of origins
    calculateOriginEffects: (childhoodId, inclinationId, jobBackgroundId) => {
        const childhood = originsUtils.getOriginById('childhoods', childhoodId);
        const inclination = originsUtils.getOriginById('inclinations', inclinationId);
        const jobBackground = originsUtils.getOriginById('jobBackgrounds', jobBackgroundId);
        
        const effects = {
            skills: {},
            attributes: {}
        };
        
        // Helper function to add effects
        const addEffects = (sourceEffects) => {
            if (sourceEffects.skills) {
                for (const [skill, value] of Object.entries(sourceEffects.skills)) {
                    effects.skills[skill] = (effects.skills[skill] || 0) + value;
                }
            }
            
            if (sourceEffects.attributes) {
                for (const [attribute, value] of Object.entries(sourceEffects.attributes)) {
                    effects.attributes[attribute] = (effects.attributes[attribute] || 0) + value;
                }
            }
        };
        
        if (childhood && childhood.effects) addEffects(childhood.effects);
        if (inclination && inclination.effects) addEffects(inclination.effects);
        if (jobBackground && jobBackground.effects) addEffects(jobBackground.effects);
        
        return effects;
    }
};

// Default export
export default origins;