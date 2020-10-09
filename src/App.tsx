import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useMousePosition from './hooks/useMousePosition';
import LikeButton from './components/LikeButton';

function App() {
  const [ show, setShow ] = useState(true);
  const positions = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <p>
          <button onClick={()=>{setShow(!show)}}>Toggle Tracker</button>
        </p>
        <LikeButton/>
        <p>X: {positions.x} Y: {positions.y}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
