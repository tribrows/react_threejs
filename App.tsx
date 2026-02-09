
import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen.tsx';
import SceneContainer from './components/SceneContainer.tsx';
import type { SkyColors, CloudColors } from './types.ts';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skyColors, setSkyColors] = useState<SkyColors>({
    top: '#4d71a8',
    bottom: '#b9d5ff',
  });
  const [cloudColors, setCloudColors] = useState<CloudColors>({
    color1: '#a4b1c4',
    color2: '#d4dde8',
    color3: '#ffffff',
  });
  const [lightsOn, setLightsOn] = useState(true);

  const handleEnterScene = () => {
    // This function is called from the loading screen to transition to the main scene.
    // The initial colors are already set in the state hooks above.
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onEnter={handleEnterScene} />;
  }

  return (
    <SceneContainer
      skyColors={skyColors}
      setSkyColors={setSkyColors}
      cloudColors={cloudColors}
      setCloudColors={setCloudColors}
      lightsOn={lightsOn}
      setLightsOn={setLightsOn}
    />
  );
};

export default App;