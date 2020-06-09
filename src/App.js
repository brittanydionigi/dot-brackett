import React from 'react';
import './App.css';
import PracticeArea from './PracticeArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Object Literals:</h1>
        <h2>Accessing Object Properties with Dot Notation & Bracket Notation</h2>
        <p className="instructions">Here you will run through a series of practice exercises where you must choose how to properly create or access a property on an object. Read through the prompt first, then take some time to examine the provided code. Whenever you encounter <code className="cta">text formatted like this</code> in the code examples, click on it to choose between different syntax options. After you have made your selections, click the 'Run Code' button to see the results.</p>
        <hr />
      </header>
      <PracticeArea></PracticeArea>
    </div>
  );
}

export default App;
