// src/static/physicalAttributes.js

export const physicalAttributes = {
    // Weight options (in pounds and kilograms)
    weight: {
        units: ['lb', 'kg'],
        ranges: {
            lb: { min: 80, max: 350, step: 5 },
            kg: { min: 36, max: 159, step: 2 }
        },
        descriptors: [
            'Extremely Underweight', 'Underweight', 'Slender', 'Average', 
            'Solid', 'Heavy', 'Very Heavy', 'Obese'
        ]
    },

    // Height options (in feet/inches and centimeters)
    height: {
        units: ['ft', 'cm'],
        ranges: {
            ft: { min: 4.5, max: 7.0, step: 0.5 }, // 4'6" to 7'0"
            cm: { min: 137, max: 213, step: 5 }
        },
        descriptors: [
            'Extremely Short', 'Very Short', 'Short', 'Average Height',
            'Tall', 'Very Tall', 'Extremely Tall'
        ]
    },

    // Body build/types
    builds: [
        { id: 'slender', name: 'Slender', description: 'Thin with little muscle or fat definition' },
        { id: 'athletic', name: 'Athletic', description: 'Toned with visible muscle definition' },
        { id: 'average', name: 'Average', description: 'Moderate muscle and fat distribution' },
        { id: 'muscular', name: 'Muscular', description: 'Significant muscle mass and definition' },
        { id: 'stocky', name: 'Stocky', description: 'Solid build with more body fat' },
        { id: 'curvy', name: 'Curvy', description: 'Pronounced curves with higher fat distribution in hips and bust' },
        { id: 'heavy', name: 'Heavy', description: 'Large frame with significant body fat' },
        { id: 'bodybuilder', name: 'Bodybuilder', description: 'Extreme muscle mass with very low body fat' }
    ],

    // Gender expression options
    genderExpressions: [
        { id: 'hyper_masculine', name: 'Hyper Masculine', description: 'Extremely masculine presentation' },
        { id: 'masculine', name: 'Masculine', description: 'Typically masculine presentation' },
        { id: 'androgynous_masc', name: 'Androgynous (Masc)', description: 'Mixed presentation leaning masculine' },
        { id: 'androgynous', name: 'Androgynous', description: 'Balanced mix of masculine and feminine traits' },
        { id: 'androgynous_fem', name: 'Androgynous (Fem)', description: 'Mixed presentation leaning feminine' },
        { id: 'feminine', name: 'Feminine', description: 'Typically feminine presentation' },
        { id: 'hyper_feminine', name: 'Hyper Feminine', description: 'Extremely feminine presentation' },
        { id: 'non_conforming', name: 'Non-Conforming', description: 'Defies traditional gender presentation' }
    ],

    // Race/ethnicity options (sensitively handled)
    races: [
        { id: 'black', name: 'Black / African descent', skinTones: ['Deep Ebony', 'Dark Brown', 'Brown', 'Light Brown'] },
        { id: 'white', name: 'White / European descent', skinTones: ['Porcelain', 'Fair', 'Light', 'Olive', 'Tan'] },
        { id: 'asian', name: 'Asian / East Asian descent', skinTones: ['Fair', 'Light', 'Golden', 'Tan', 'Olive'] },
        { id: 'south_asian', name: 'South Asian / Indian descent', skinTones: ['Fair', 'Light Brown', 'Golden Brown', 'Dark Brown'] },
        { id: 'hispanic', name: 'Hispanic / Latin American', skinTones: ['Fair', 'Olive', 'Tan', 'Brown', 'Dark Brown'] },
        { id: 'middle_eastern', name: 'Middle Eastern', skinTones: ['Fair', 'Olive', 'Tan', 'Brown'] },
        { id: 'pacific_islander', name: 'Pacific Islander', skinTones: ['Light Brown', 'Brown', 'Dark Brown', 'Deep Brown'] },
        { id: 'mixed', name: 'Mixed Race', skinTones: ['Various'] },
        { id: 'other', name: 'Other / Prefer not to say', skinTones: ['Various'] }
    ],

    // Penis size options (in inches and centimeters)
    penisSize: {
        units: ['in', 'cm'],
        ranges: {
            in: { min: 2, max: 12, step: 0.5 },
            cm: { min: 5, max: 30, step: 1 }
        },
        descriptors: [
            'Micro', 'Very Small', 'Small', 'Below Average',
            'Average', 'Above Average', 'Large', 'Very Large', 'Massive'
        ],
        girthOptions: ['Slender', 'Average', 'Thick', 'Very Thick']
    },

    // Breast size options (cup sizes and measurements)
    breastSize: {
        cupSizes: ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H', 'I', 'J'],
        descriptors: [
            'Flat', 'Very Small', 'Small', 'Average', 'Large', 'Very Large', 'Massive'
        ],
        // Band sizes in inches
        bandSizes: [28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
    },

    // Vagina type options
    vaginaTypes: [
        { id: 'neat', name: 'Neat', description: 'Small, tidy labia' },
        { id: 'prominent_inner', name: 'Prominent Inner Lips', description: 'More noticeable inner labia' },
        { id: 'prominent_outer', name: 'Prominent Outer Lips', description: 'Fuller outer labia' },
        { id: 'hooded', name: 'Hooded', description: 'Clitoris is more covered' },
        { id: 'asymmetrical', name: 'Asymmetrical', description: 'Labia are different sizes' },
        { id: 'puffy', name: 'Puffy', description: 'Full, padded appearance' }
    ],

    // Ass size options
    assSize: {
        descriptors: [
            'Flat', 'Small', 'Average', 'Round', 'Large', 'Very Large', 'Massive'
        ],
        shapes: [
            'Heart-shaped', 'Round', 'Square', 'V-shaped', 'Flat', 'Bubble'
        ]
    }
};

// Utility functions
export const physicalAttributesUtils = {
    // Convert between measurement systems
    convertUnits: (value, fromUnit, toUnit) => {
        const conversions = {
            lbToKg: val => val * 0.453592,
            kgToLb: val => val * 2.20462,
            inToCm: val => val * 2.54,
            cmToIn: val => val * 0.393701,
            ftToCm: val => val * 30.48,
            cmToFt: val => val * 0.0328084
        };

        if (fromUnit === 'lb' && toUnit === 'kg') return conversions.lbToKg(value);
        if (fromUnit === 'kg' && toUnit === 'lb') return conversions.kgToLb(value);
        if (fromUnit === 'in' && toUnit === 'cm') return conversions.inToCm(value);
        if (fromUnit === 'cm' && toUnit === 'in') return conversions.cmToIn(value);
        if (fromUnit === 'ft' && toUnit === 'cm') return conversions.ftToCm(value);
        if (fromUnit === 'cm' && toUnit === 'ft') return conversions.cmToFt(value);

        return value; // Return original if conversion not needed or unknown
    },

    // Get descriptor based on measurement value
    getDescriptor: (value, attribute) => {
        if (!physicalAttributes[attribute] || !physicalAttributes[attribute].descriptors) {
            return 'Unknown';
        }

        const descriptors = physicalAttributes[attribute].descriptors;
        const rangeSize = descriptors.length;
        
        // For attributes with ranges
        if (attribute === 'weight' || attribute === 'height' || attribute === 'penisSize') {
            const ranges = physicalAttributes[attribute].ranges;
            const range = ranges[ranges.units[0]]; // Use first unit system for range
            const step = (range.max - range.min) / rangeSize;
            const index = Math.min(rangeSize - 1, Math.floor((value - range.min) / step));
            
            return descriptors[index];
        }
        
        // For breast and ass size (direct index based)
        if (attribute === 'breastSize' || attribute === 'assSize') {
            const index = Math.min(descriptors.length - 1, Math.floor(value));
            return descriptors[index];
        }
        
        return 'Unknown';
    },

    // Generate random physical attributes
    generateRandomAttributes: (biologicalSex = 'male') => {
        const getRandomInRange = (min, max) => min + Math.random() * (max - min);
        const getRandomFromArray = array => array[Math.floor(Math.random() * array.length)];
        
        const weight = getRandomInRange(110, 250); // in lb
        const height = getRandomInRange(5.0, 6.5); // in ft
        
        return {
            weight: {
                value: weight,
                unit: 'lb',
                descriptor: physicalAttributesUtils.getDescriptor(weight, 'weight')
            },
            height: {
                value: height,
                unit: 'ft',
                descriptor: physicalAttributesUtils.getDescriptor(height, 'height')
            },
            build: getRandomFromArray(physicalAttributes.builds),
            genderExpression: getRandomFromArray(physicalAttributes.genderExpressions),
            race: getRandomFromArray(physicalAttributes.races),
            penisSize: biologicalSex === 'male' ? {
                value: getRandomInRange(4, 8),
                unit: 'in',
                descriptor: physicalAttributesUtils.getDescriptor(getRandomInRange(4, 8), 'penisSize'),
                girth: getRandomFromArray(physicalAttributes.penisSize.girthOptions)
            } : null,
            breastSize: biologicalSex === 'female' ? {
                cup: getRandomFromArray(physicalAttributes.breastSize.cupSizes),
                band: getRandomFromArray(physicalAttributes.breastSize.bandSizes),
                descriptor: physicalAttributesUtils.getDescriptor(
                    Math.random() * physicalAttributes.breastSize.descriptors.length, 
                    'breastSize'
                )
            } : null,
            vaginaType: biologicalSex === 'female' ? 
                getRandomFromArray(physicalAttributes.vaginaTypes) : null,
            assSize: {
                descriptor: physicalAttributesUtils.getDescriptor(
                    Math.random() * physicalAttributes.assSize.descriptors.length, 
                    'assSize'
                ),
                shape: getRandomFromArray(physicalAttributes.assSize.shapes)
            }
        };
    },

    // Validate attributes for consistency
    validateAttributes: (attributes) => {
        const errors = [];
        
        // Check weight and height are in reasonable ranges
        if (attributes.weight.unit === 'lb' && 
            (attributes.weight.value < 80 || attributes.weight.value > 350)) {
            errors.push('Weight is outside reasonable range');
        }
        
        if (attributes.height.unit === 'ft' && 
            (attributes.height.value < 4.5 || attributes.height.value > 7.0)) {
            errors.push('Height is outside reasonable range');
        }
        
        // Check for biological consistency (optional based on game design)
        if (attributes.penisSize && attributes.breastSize) {
            errors.push('Character has both penis and breasts (intersex options may be available in future versions)');
        }
        
        return errors;
    }
};

// Default export
export default physicalAttributes;