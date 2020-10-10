import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}
function App() {
  const [ show, setShow ] = useState(true);
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show]);
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <p>
          <button onClick={()=>{setShow(!show)}}>Refresh dog photo</button>
        </p>
        { loading ? <p>狗狗读取中</p>
        :<img src={dogResult && dogResult.message}/> }
        <LikeButton/>
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
