import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  const handleIncrement = () =>{
    setCount((prevCount)=>prevCount + 1);
  };

  const handleDecrement = () =>{
    setCount((prevCount)=>prevCount - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
