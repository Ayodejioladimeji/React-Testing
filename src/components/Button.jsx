import React, { useState } from 'react';

const Button = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
      <button data-testid='button' onClick={() => setShowButton(!showButton)}>
        Click me to see another
      </button>

      {showButton && (
        <button data-testid='button' onClick={() => setShowButton(!showButton)}>
          How are you today
        </button>
      )}
    </div>
  );
};

export default Button;
