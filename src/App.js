import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBlack, setIsBlack] = useState(false);

  const handleToggle = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div className={`container ${isBlack ? 'black' : 'white'}`}>
      <button onClick={handleToggle}>
        {isBlack ? 'Switch to White' : 'Switch to Black'}
      </button>
    </div>
  );
}

export default App;
