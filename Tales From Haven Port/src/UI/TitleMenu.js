import React, { useState } from 'react';
import PreferencesMenu from './PreferencesMenu';

const TitleMenu = () => {
  const [showPreferences, setShowPreferences] = useState(false);

  return (
    <div className="title-menu">
      {/* Other menu options */}
      <button onClick={() => setShowPreferences(true)}>Preferences</button>
      
      {showPreferences && (
        <PreferencesMenu onClose={() => setShowPreferences(false)} />
      )}
    </div>
  );
};

export default TitleMenu;