// Conversion functions
export const cmToFeetInches = (cm) => {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
};

export const kgToLbs = (kg) => {
  return Math.round(kg * 2.20462);
};

export const formatHeight = (cm, unitSystem) => {
  if (unitSystem === 'metric') {
    return `${cm} cm`;
  } else {
    const { feet, inches } = cmToFeetInches(cm);
    return `${feet}'${inches}"`;
  }
};

export const formatWeight = (kg, unitSystem) => {
  if (unitSystem === 'metric') {
    return `${kg} kg`;
  } else {
    return `${kgToLbs(kg)} lbs`;
  }
};

// For temperature, distance, etc. if needed
export const celsiusToFahrenheit = (c) => {
  return Math.round((c * 9/5) + 32);
};

export const kmToMiles = (km) => {
  return Math.round(km * 0.621371);
};