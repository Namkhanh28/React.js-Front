import React, { useState, useRef } from 'react';
function RenderCounter() {
  const [inputValue, setInputValue] = useState('');
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Component Render Counter</h2>
      <label>
        Input:{' '}
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}

export default RenderCounter;