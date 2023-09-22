import logo, { useState } from 'react';
import './App.css';

function App() {
  const [count,setcount]=useState(1);
  const incrementCounter =()=>{
    setcount(count+1);

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>counter app with button</h1>
        <p>counter value:{count}</p>
        <button onClick={incrementCounter}>increment </button>
        
      </header>
    </div>
  );
}

export default App;
