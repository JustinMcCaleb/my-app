import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
    state = {
        persons: [
            { name: 'Justin', age: 26 },
            { name: 'Chey', age: 27 },
            { name: 'Fluffy', age: 278}
        ]
    }

    switchNameHandler = () => {
        alert('It works!')
    }

render() {
    return (
    <div className="App">
        <h1>My first REACT app!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I am Magic</Person>
    </div>
      //the below code is what the above JSX (NOT HTML) code gets COMPILED into. It just serves as an example of what the JSX above code gets turned into with the React import
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I\'m a React.createElement element'))
  );
}
}

export default App;
