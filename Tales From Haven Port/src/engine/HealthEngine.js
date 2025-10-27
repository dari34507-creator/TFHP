// Example usage in your game
import HealthEngine, { HealthUtils } from './engine/HealthEngine.js';

// Initialize health system for a character
const character = {
    attributes: {
        Endurance: 8,
        Willpower: 7,
        Perception: 6
    },
    skills: {
        Dodge: 4,
        Fitness: 3
    },
    equipment: {
        armor: {
            protection: 10
        }
    }
};

const healthSystem = new HealthEngine(character);

// In your game loop
function gameLoop(deltaTime) {
    healthSystem.update(deltaTime);
    
    const healthStatus = healthSystem.getHealthStatus();
    if (healthSystem.isIncapacitated()) {
        // Handle character incapacitation
        handleIncapacitation();
    }
}

// When character is attacked
function handleAttack(attackData) {
    const result = healthSystem.processAttack(attackData);
    
    if (result.hit) {
        // Show damage indicators
        showDamageIndicator(result.damage, result.critical);
        
        // Update UI
        updateHealthDisplay(healthSystem.getHealthStatus());
    }
}

// When using medical items
function useMedicalItem(item) {
    healthSystem.useMedicalItem(item);
    updateHealthDisplay(healthSystem.getHealthStatus());
}

// When treating wounds
function treatWound(woundId, treatmentQuality) {
    healthSystem.treatWound(woundId, treatmentQuality);
    updateHealthDisplay(healthSystem.getHealthStatus());
}