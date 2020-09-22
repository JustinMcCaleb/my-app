import React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>My first REACT app!</h1>
    // </div>
      React.createElement('div', null, 'h1', 'I\'m a React.createElement... element')
  );
}

export default App;
