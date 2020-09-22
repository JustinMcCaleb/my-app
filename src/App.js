import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
        <h1>My first REACT app!</h1>
        <Person />
    </div>
      //the below code is what the above JSX (NOT HTML) code gets COMPILED into. It just serves as an example of what the JSX above code gets turned into with the React import
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I\'m a React.createElement element'))
  );
}

export default App;
