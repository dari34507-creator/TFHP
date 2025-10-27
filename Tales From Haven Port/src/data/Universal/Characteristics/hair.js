// src/static/hair.js
export const hairData = {
    // Hairstyles categorized by general type
    styles: [
        // Short Styles
        'Buzz Cut', 'Crew Cut', 'Pixie Cut', 'Undercut', 'Fade', 'Caesar Cut', 'Flat Top',
        // Medium Styles
        'Bob', 'Shag', 'Layered Cut', 'Mohawk', 'Afro', 'Pageboy', 'Bowl Cut', 'Mullet',
        // Long Styles
        'Long Straight', 'Long Wavy', 'Braids', 'Dreadlocks', 'Ponytail', 'Pigtails', 'Top Knot', 'Man Bun',
        'Fishtail Braid', 'French Braid', 'Waterfall Braid', 'Crown Braid',
        // Special/Formal Styles
        'French Twist', 'Cornrows', 'Beehive', 'Victory Rolls', 'Chignon', 'Bouffant', 'Pompadour'
    ],

    // Length categories with descriptions
    lengths: [
        { id: 'bald', name: 'Bald', description: 'Completely shaved or naturally hairless' },
        { id: 'buzz', name: 'Buzz-cut Length', description: 'Very short, uniform length' },
        { id: 'ear', name: 'Ear Length', description: 'Hair reaches the tops of the ears' },
        { id: 'chin', name: 'Chin Length', description: 'Hair reaches the chin' },
        { id: 'shoulder', name: 'Shoulder Length', description: 'Hair reaches the shoulders' },
        { id: 'mid-back', name: 'Mid-back Length', description: 'Hair reaches the middle of the back' },
        { id: 'waist', name: 'Waist Length', description: 'Hair reaches the waist' },
        { id: 'hip', name: 'Hip Length', description: 'Hair reaches the hips' },
        { id: 'classic', name: 'Classic Length', description: 'Hair reaches the top of the thighs' },
        { id: 'knee', name: 'Knee Length', description: 'Hair reaches the knees' }
    ],

    // Natural hair colors
    naturalColors: [
        'Jet Black', 'Dark Brown', 'Medium Brown', 'Light Brown', 'Dark Blonde',
        'Blonde', 'Light Blonde', 'Platinum Blonde', 'Strawberry Blonde',
        'Red', 'Auburn', 'Copper', 'Honey Brown', 'Chestnut Brown',
        'Salt and Pepper', 'Silver', 'White'
    ],

    // Fantasy/unnatural colors
    fantasyColors: [
        'Electric Blue', 'Royal Blue', 'Sky Blue', 'Navy Blue',
        'Hot Pink', 'Bubblegum Pink', 'Magenta', 'Deep Purple',
        'Lavender', 'Violet', 'Emerald Green', 'Lime Green',
        'Forest Green', 'Blood Red', 'Crimson', 'Scarlet',
        'Bright Orange', 'Sunset Orange', 'Gold', 'Silver',
        'Platinum', 'Rainbow', 'Ombre', 'Pastel Pink', 'Pastel Blue',
        'Pastel Purple', 'Pastel Green', 'Pastel Yellow', 'Teal',
        'Turquoise', 'Midnight Blue', 'Neon Green', 'Neon Yellow'
    ],

    // Hair adornments
    adornments: [
        { id: 'none', name: 'None', description: 'No adornments' },
        { id: 'clip', name: 'Hair Clip', description: 'Decorative hair clip' },
        { id: 'headband', name: 'Headband', description: 'Fabric or elastic headband' },
        { id: 'bandana', name: 'Bandana', description: 'Triangular or square bandana' },
        { id: 'scarf', name: 'Scarf', description: 'Silk or fabric scarf' },
        { id: 'tiara', name: 'Tiara', description: 'Decorative crown-like piece' },
        { id: 'flowers', name: 'Flowers', description: 'Fresh or artificial flowers' },
        { id: 'feathers', name: 'Feathers', description: 'Decorative feathers' },
        { id: 'beads', name: 'Beads', description: 'Wooden, metal, or plastic beads' },
        { id: 'ribbons', name: 'Ribbons', description: 'Satin or fabric ribbons' },
        { id: 'cuffs', name: 'Hair Cuffs', description: 'Decorative metal cuffs' },
        { id: 'chains', name: 'Gold Chains', description: 'Thin gold chain accessories' },
        { id: 'pins', name: 'Crystal Hairpins', description: 'Decorative pins with crystals' },
        { id: 'wrap', name: 'Hair Wrap', description: 'Thread or yarn wrapped around sections' },
        { id: 'shells', name: 'Seashells', description: 'Small decorative seashells' },
        { id: 'coins', name: 'Coin Adornments', description: 'Small coins or metallic pieces' }
    ],

    // Hair texture types
    textures: [
        { id: 'straight', name: 'Straight', description: 'Smooth, without curls or waves' },
        { id: 'wavy', name: 'Wavy', description: 'Gentle waves throughout' },
        { id: 'curly', name: 'Curly', description: 'Defined curls' },
        { id: 'coily', name: 'Coily', description: 'Tight coils or kinks' },
        { id: 'afro', name: 'Afro-textured', description: 'Dense, voluminous texture' },
        { id: 'fine', name: 'Fine', description: 'Thin individual strands' },
        { id: 'thick', name: 'Thick', description: 'Dense individual strands' }
    ],

    // Hair density types
    densities: [
        { id: 'thin', name: 'Thin', description: 'Sparse hair coverage' },
        { id: 'medium', name: 'Medium', description: 'Average hair coverage' },
        { id: 'thick', name: 'Thick', description: 'Dense hair coverage' },
        { id: 'very-thick', name: 'Very Thick', description: 'Extremely dense hair coverage' }
    ]
};

// Function to get a random element from an array
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// Function to generate random hair description
export const generateRandomHair = () => {
    const style = getRandomElement(hairData.styles);
    const length = getRandomElement(hairData.lengths);
    const color = getRandomElement([...hairData.naturalColors, ...hairData.fantasyColors]);
    const adornment = getRandomElement(hairData.adornments);
    const texture = getRandomElement(hairData.textures);
    const density = getRandomElement(hairData.densities);

    return {
        style,
        length,
        color,
        adornment,
        texture,
        density
    };
};

// Function to get hair by category
export const getHairByCategory = (category) => {
    return hairData[category] || [];
};

// Function to filter hairstyles by length
export const getStylesByLength = (lengthId) => {
    const length = hairData.lengths.find(l => l.id === lengthId);
    if (!length) return [];
    
    // This is a simplified example - you would expand this with actual logic
    // matching styles to appropriate lengths
    const shortStyles = ['Buzz Cut', 'Crew Cut', 'Pixie Cut', 'Undercut', 'Fade'];
    const mediumStyles = ['Bob', 'Shag', 'Layered Cut', 'Mohawk', 'Afro'];
    const longStyles = ['Long Straight', 'Long Wavy', 'Braids', 'Dreadlocks', 'Ponytail'];
    
    switch(lengthId) {
        case 'bald':
        case 'buzz':
            return shortStyles;
        case 'ear':
        case 'chin':
            return [...shortStyles, ...mediumStyles];
        case 'shoulder':
        case 'mid-back':
            return mediumStyles;
        case 'waist':
        case 'hip':
        case 'classic':
        case 'knee':
            return longStyles;
        default:
            return hairData.styles;
    }
};

// Function to validate hair combination
export const validateHairCombination = (hair) => {
    const errors = [];
    
    // Check if bald but has style
    if (hair.length.id === 'bald' && hair.style !== 'Bald') {
        errors.push('Cannot have a hairstyle when bald');
    }
    
    // Check if adornment is none but has adornment details
    if (hair.adornment.id === 'none' && hair.adornmentDetails) {
        errors.push('Cannot have adornment details when no adornment is selected');
    }
    
    return errors;
};

// Default export
export default hairData;