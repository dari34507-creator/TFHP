class CharacterBase {
  constructor() {
    // Physical descriptors
    this.ethnicity = '';
    this.skinTone = '';
    this.height = 0; // in cm or inches
    this.weight = 0; // in kg or pounds
    this.build = '';
    this.hairColor = '';
    this.hairStyle = '';
    this.eyeColor = '';
    this.scars = [];
    this.tattoos = [];
    
    // Sex characteristics
    this.breastSize = '';
    this.penisSize = '';
    this.testicleSize = '';
    
    // Age-related
    this.age = 0;
    this.apparentAge = 0; // For characters that look younger/older
  }
}

// Extend both PlayerCharacter and NPC from CharacterBase