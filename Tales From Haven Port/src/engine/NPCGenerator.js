import { 
  HAIR_COLORS, HAIR_STYLES, EYE_COLORS, SKIN_TONES, 
  BODY_BUILDS, ETHNICITIES, BREAST_SIZES, PENIS_SIZES 
} from '../data/static/appearance.js';
import { ETHNICITIES } from '../data/static/ethnicity.js';

class NPCGenerator {
  generatePhysicalTraits() {
    return {
      ethnicity: this.randomElement(ETHNICITIES),
      skinTone: this.randomElement(SKIN_TONES),
      height: this.randomRange(150, 200), // cm
      weight: this.randomRange(45, 120), // kg
      build: this.randomElement(BODY_BUILDS),
      hairColor: this.randomElement(HAIR_COLORS),
      hairStyle: this.randomElement(HAIR_STYLES),
      eyeColor: this.randomElement(EYE_COLORS),
      breastSize: this.randomElement(BREAST_SIZES),
      penisSize: this.randomElement(PENIS_SIZES),
      // Add more as needed
    };
  }
}