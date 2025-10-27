// src/components/CharacterCreator.js
import React, { useState, useEffect } from 'react';
import CharacterCreatorEngine, { CharacterCreatorUtils } from '../engine/CharacterCreator';
import './CharacterCreator.css';

const CharacterCreator = ({ onCharacterComplete, onCancel }) => {
  const [creator] = useState(new CharacterCreatorEngine());
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [availableOptions, setAvailableOptions] = useState({});

  // Steps configuration
  const steps = [
    { id: 'basic', title: 'Basic Info' },
    { id: 'physical', title: 'Physical Attributes' },
    { id: 'origins', title: 'Origins' },
    { id: 'weaknesses', title: 'Weaknesses' },
    { id: 'attributes', title: 'Attributes' },
    { id: 'skills', title: 'Skills' },
    { id: 'appearance', title: 'Appearance' },
    { id: 'review', title: 'Review' }
  ];

  useEffect(() => {
    // Load options for the current step
    const stepId = steps[currentStep].id;
    const options = creator.getOptionsForStep(stepId);
    setAvailableOptions(options || {});
  }, [currentStep, creator]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStepSubmit = () => {
    const stepId = steps[currentStep].id;
    
    switch (stepId) {
      case 'basic':
        creator.setBasicInfo(
          formData.name,
          formData.age,
          formData.gender,
          formData.pronouns
        );
        break;
        
      case 'physical':
        creator.setPhysicalAttributes(formData);
        break;
        
      case 'origins':
        creator.setOrigins(
          formData.childhood,
          formData.inclination,
          formData.jobBackground
        );
        break;
        
      case 'weaknesses':
        creator.setWeaknesses(formData.weaknesses || []);
        break;
        
      case 'attributes':
        creator.setAttributes(formData.attributes || {});
        break;
        
      case 'skills':
        creator.setSkills(formData.skills || {});
        break;
        
      case 'appearance':
        creator.setAppearance(formData);
        break;
        
      default:
        break;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setFormData({});
    } else {
      // Finalize character
      const character = creator.finalizeCharacter();
      onCharacterComplete(character);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    const stepId = steps[currentStep].id;
    
    switch (stepId) {
      case 'basic':
        return <BasicInfoStep 
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'physical':
        return <PhysicalAttributesStep 
          options={availableOptions}
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'origins':
        return <OriginsStep 
          options={availableOptions}
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'weaknesses':
        return <WeaknessesStep 
          options={availableOptions}
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'attributes':
        return <AttributesStep 
          options={availableOptions}
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'skills':
        return <SkillsStep 
          options={availableOptions}
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'appearance':
        return <AppearanceStep 
          formData={formData} 
          onChange={handleInputChange} 
        />;
        
      case 'review':
        return <ReviewStep 
          character={creator.character}
          onEdit={() => setCurrentStep(0)} // Start over for editing
        />;
        
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="character-creator">
      <div className="creator-header">
        <h1>Character Creation</h1>
        <div className="progress-indicator">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`progress-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      <div className="creator-content">
        {renderStep()}
      </div>

      <div className="creator-actions">
        <button onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
        
        {currentStep > 0 && (
          <button onClick={handlePrevious} className="btn-secondary">
            Previous
          </button>
        )}
        
        <button onClick={handleStepSubmit} className="btn-primary">
          {currentStep === steps.length - 1 ? 'Complete Character' : 'Next'}
        </button>
      </div>
    </div>
  );
};

// Step Components
const BasicInfoStep = ({ formData, onChange }) => {
  return (
    <div className="step-container">
      <h2>Basic Information</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="Enter character name"
          />
        </div>
        
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={formData.age || ''}
            onChange={(e) => onChange('age', parseInt(e.target.value))}
            min="18"
            max="80"
          />
        </div>
        
        <div className="form-group">
          <label>Gender</label>
          <select
            value={formData.gender || ''}
            onChange={(e) => onChange('gender', e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Pronouns</label>
          <select
            value={formData.pronouns || ''}
            onChange={(e) => onChange('pronouns', e.target.value)}
          >
            <option value="">Select Pronouns</option>
            <option value="he/him">He/Him</option>
            <option value="she/her">She/Her</option>
            <option value="they/them">They/Them</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const PhysicalAttributesStep = ({ options, formData, onChange }) => {
  const [selectedUnit, setSelectedUnit] = useState('lb');
  
  return (
    <div className="step-container">
      <h2>Physical Attributes</h2>
      
      <div className="form-section">
        <h3>Height & Weight</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              value={formData.height || ''}
              onChange={(e) => onChange('height', parseFloat(e.target.value))}
              min={options.height?.ranges?.ft?.min || 4.5}
              max={options.height?.ranges?.ft?.max || 7.0}
              step={options.height?.ranges?.ft?.step || 0.5}
            />
            <span className="unit">ft</span>
          </div>
          
          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              value={formData.weight || ''}
              onChange={(e) => onChange('weight', parseFloat(e.target.value))}
              min={options.weight?.ranges?.lb?.min || 80}
              max={options.weight?.ranges?.lb?.max || 350}
              step={options.weight?.ranges?.lb?.step || 5}
            />
            <span className="unit">lb</span>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Body Type</h3>
        <div className="option-grid">
          {options.builds?.map(build => (
            <div 
              key={build.id}
              className={`option-card ${formData.build === build.id ? 'selected' : ''}`}
              onClick={() => onChange('build', build.id)}
            >
              <h4>{build.name}</h4>
              <p>{build.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="form-section">
        <h3>Gender Expression</h3>
        <div className="option-grid">
          {options.genderExpressions?.map(expression => (
            <div 
              key={expression.id}
              className={`option-card ${formData.genderExpression === expression.id ? 'selected' : ''}`}
              onClick={() => onChange('genderExpression', expression.id)}
            >
              <h4>{expression.name}</h4>
              <p>{expression.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OriginsStep = ({ options, formData, onChange }) => {
  return (
    <div className="step-container">
      <h2>Character Origins</h2>
      
      <div className="form-section">
        <h3>Childhood</h3>
        <div className="option-list">
          {options.childhoods?.map(childhood => (
            <div 
              key={childhood.id}
              className={`option-card ${formData.childhood === childhood.id ? 'selected' : ''}`}
              onClick={() => onChange('childhood', childhood.id)}
            >
              <h4>{childhood.name}</h4>
              <p>{childhood.description}</p>
              <div className="effects">
                <strong>Effects:</strong>
                {childhood.effects && Object.entries(childhood.effects).map(([type, effects]) => (
                  <div key={type}>
                    {type}: {JSON.stringify(effects)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="form-section">
        <h3>Inclination</h3>
        <div className="option-list">
          {options.inclinations?.map(inclination => (
            <div 
              key={inclination.id}
              className={`option-card ${formData.inclination === inclination.id ? 'selected' : ''}`}
              onClick={() => onChange('inclination', inclination.id)}
            >
              <h4>{inclination.name}</h4>
              <p>{inclination.description}</p>
              <div className="effects">
                <strong>Effects:</strong>
                {inclination.effects && Object.entries(inclination.effects).map(([type, effects]) => (
                  <div key={type}>
                    {type}: {JSON.stringify(effects)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="form-section">
        <h3>Job Background</h3>
        <div className="option-list">
          {options.jobBackgrounds?.map(job => (
            <div 
              key={job.id}
              className={`option-card ${formData.jobBackground === job.id ? 'selected' : ''}`}
              onClick={() => onChange('jobBackground', job.id)}
            >
              <h4>{job.name}</h4>
              <p>{job.description}</p>
              <div className="effects">
                <strong>Effects:</strong>
                {job.effects && Object.entries(job.effects).map(([type, effects]) => (
                  <div key={type}>
                    {type}: {JSON.stringify(effects)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WeaknessesStep = ({ options, formData, onChange }) => {
  const toggleWeakness = (weaknessId) => {
    const currentWeaknesses = formData.weaknesses || [];
    const newWeaknesses = currentWeaknesses.includes(weaknessId)
      ? currentWeaknesses.filter(id => id !== weaknessId)
      : [...currentWeaknesses, weaknessId];
    
    onChange('weaknesses', newWeaknesses);
  };

  return (
    <div className="step-container">
      <h2>Select Weaknesses</h2>
      <p>Choose weaknesses that give your character both buffs and debuffs.</p>
      
      <div className="weakness-categories">
        {['physical', 'mental', 'social', 'supernatural'].map(category => (
          <div key={category} className="weakness-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Weaknesses</h3>
            <div className="option-grid">
              {options.filter(w => w.category === category).map(weakness => (
                <div 
                  key={weakness.id}
                  className={`option-card ${(formData.weaknesses || []).includes(weakness.id) ? 'selected' : ''}`}
                  onClick={() => toggleWeakness(weakness.id)}
                >
                  <h4>{weakness.name}</h4>
                  <p>{weakness.description}</p>
                  
                  <div className="weakness-effects">
                    <div className="buffs">
                      <strong>Buffs:</strong>
                      {weakness.buffs && Object.entries(weakness.buffs).map(([type, effects]) => (
                        <div key={type}>
                          {type}: {JSON.stringify(effects)}
                        </div>
                      ))}
                    </div>
                    
                    <div className="debuffs">
                      <strong>Debuffs:</strong>
                      {weakness.debuffs && Object.entries(weakness.debuffs).map(([type, effects]) => (
                        <div key={type}>
                          {type}: {JSON.stringify(effects)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AttributesStep = ({ options, formData, onChange }) => {
  const [pointsRemaining, setPointsRemaining] = useState(options.availablePoints || 15);
  
  const updateAttribute = (attributeId, value) => {
    const currentAttributes = formData.attributes || {};
    const currentValue = currentAttributes[attributeId] || 5;
    const newValue = parseInt(value);
    
    if (newValue >= 1 && newValue <= 10) {
      const pointDifference = newValue - currentValue;
      
      if (pointDifference <= pointsRemaining) {
        const newAttributes = {
          ...currentAttributes,
          [attributeId]: newValue
        };
        
        onChange('attributes', newAttributes);
        setPointsRemaining(pointsRemaining - pointDifference);
      }
    }
  };

  return (
    <div className="step-container">
      <h2>Attribute Points Distribution</h2>
      <div className="points-remaining">
        Points Remaining: {pointsRemaining}
      </div>
      
      <div className="attributes-grid">
        {Object.values(options.attributes || {}).map(attribute => {
          const value = (formData.attributes || {})[attribute.id] || 5;
          
          return (
            <div key={attribute.id} className="attribute-item">
              <div className="attribute-header">
                <h3>{attribute.name}</h3>
                <div className="attribute-value">
                  <button 
                    onClick={() => updateAttribute(attribute.id, value - 1)}
                    disabled={value <= 1}
                  >-</button>
                  <span>{value}</span>
                  <button 
                    onClick={() => updateAttribute(attribute.id, value + 1)}
                    disabled={value >= 10 || pointsRemaining <= 0}
                  >+</button>
                </div>
              </div>
              <p>{attribute.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SkillsStep = ({ options, formData, onChange }) => {
  const [pointsRemaining, setPointsRemaining] = useState(options.availablePoints || 20);
  
  const updateSkill = (skillId, value) => {
    const currentSkills = formData.skills || {};
    const currentValue = currentSkills[skillId] || 0;
    const newValue = parseInt(value);
    
    if (newValue >= 0 && newValue <= 10) {
      const pointDifference = newValue - currentValue;
      
      if (pointDifference <= pointsRemaining) {
        const newSkills = {
          ...currentSkills,
          [skillId]: newValue
        };
        
        onChange('skills', newSkills);
        setPointsRemaining(pointsRemaining - pointDifference);
      }
    }
  };

  return (
    <div className="step-container">
      <h2>Skill Points Distribution</h2>
      <div className="points-remaining">
        Points Remaining: {pointsRemaining}
      </div>
      
      <div className="skill-categories">
        {Object.values(options.categories || {}).map(category => (
          <div key={category.name} className="skill-category">
            <h3>{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map(skillId => {
                const skill = options.skills[skillId];
                const value = (formData.skills || {})[skillId] || 0;
                
                return (
                  <div key={skillId} className="skill-item">
                    <div className="skill-header">
                      <h4>{skill.name}</h4>
                      <div className="skill-value">
                        <button 
                          onClick={() => updateSkill(skillId, value - 1)}
                          disabled={value <= 0}
                        >-</button>
                        <span>{value}</span>
                        <button 
                          onClick={() => updateSkill(skillId, value + 1)}
                          disabled={value >= 10 || pointsRemaining <= 0}
                        >+</button>
                      </div>
                    </div>
                    <p>{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AppearanceStep = ({ formData, onChange }) => {
  return (
    <div className="step-container">
      <h2>Appearance Details</h2>
      
      <div className="form-section">
        <h3>Hair</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Hair Color</label>
            <select
              value={formData.hairColor || ''}
              onChange={(e) => onChange('hairColor', e.target.value)}
            >
              <option value="">Select Color</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
              <option value="blonde">Blonde</option>
              <option value="red">Red</option>
              <option value="gray">Gray</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Hair Style</label>
            <select
              value={formData.hairStyle || ''}
              onChange={(e) => onChange('hairStyle', e.target.value)}
            >
              <option value="">Select Style</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
              <option value="bald">Bald</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Eyes & Skin</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Eye Color</label>
            <select
              value={formData.eyeColor || ''}
              onChange={(e) => onChange('eyeColor', e.target.value)}
            >
              <option value="">Select Color</option>
              <option value="brown">Brown</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="hazel">Hazel</option>
              <option value="gray">Gray</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Skin Tone</label>
            <select
              value={formData.skinTone || ''}
              onChange={(e) => onChange('skinTone', e.target.value)}
            >
              <option value="">Select Tone</option>
              <option value="pale">Pale</option>
              <option value="fair">Fair</option>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="olive">Olive</option>
              <option value="tan">Tan</option>
              <option value="brown">Brown</option>
              <option value="dark">Dark</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Distinguishing Features</h3>
        <textarea
          value={formData.features || ''}
          onChange={(e) => onChange('features', e.target.value)}
          placeholder="Scars, tattoos, piercings, or other notable features..."
          rows={4}
        />
      </div>
    </div>
  );
};

const ReviewStep = ({ character, onEdit }) => {
  return (
    <div className="step-container">
      <h2>Character Review</h2>
      
      <div className="character-review">
        <div className="review-section">
          <h3>Basic Information</h3>
          <p><strong>Name:</strong> {character.name}</p>
          <p><strong>Age:</strong> {character.age}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Pronouns:</strong> {character.pronouns?.subject}/{character.pronouns?.object}</p>
        </div>
        
        <div className="review-section">
          <h3>Physical Attributes</h3>
          <p><strong>Height:</strong> {character.physical?.height?.value} {character.physical?.height?.unit}</p>
          <p><strong>Weight:</strong> {character.physical?.weight?.value} {character.physical?.weight?.unit}</p>
          <p><strong>Build:</strong> {character.physical?.build?.name}</p>
          <p><strong>Gender Expression:</strong> {character.physical?.genderExpression?.name}</p>
        </div>
        
        <div className="review-section">
          <h3>Origins</h3>
          <p><strong>Childhood:</strong> {character.origins?.childhood?.name}</p>
          <p><strong>Inclination:</strong> {character.origins?.inclination?.name}</p>
          <p><strong>Job Background:</strong> {character.origins?.jobBackground?.name}</p>
        </div>
        
        <div className="review-section">
          <h3>Attributes</h3>
          <div className="attributes-list">
            {character.attributes && Object.entries(character.attributes).map(([id, value]) => (
              <div key={id} className="attribute-item">
                <span className="attribute-name">
                  {CharacterCreatorUtils.getAttributeName(id)}:
                </span>
                <span className="attribute-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="review-section">
          <h3>Skills</h3>
          <div className="skills-list">
            {character.skills && Object.entries(character.skills).map(([id, value]) => (
              <div key={id} className="skill-item">
                <span className="skill-name">
                  {CharacterCreatorUtils.getSkillName(id)}:
                </span>
                <span className="skill-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="review-actions">
        <button onClick={onEdit} className="btn-secondary">
          Edit Character
        </button>
      </div>
    </div>
  );
};

export default CharacterCreator;