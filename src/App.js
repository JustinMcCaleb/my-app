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

    switchNameHandler = (newName) => {
        //DONT DO THIS
        // this.state.persons[0].name = 'DANGER'
        this.setState({ persons: [
                { name: newName, age: 26 },
                { name: 'Chey', age: 27 },
                { name: 'Fluffy', age: 278}
            ]
            })
    }

    typeNameHandler = (event) => {
        this.setState({ persons: [
                { name: 'Justin', age: 26 },
                { name: event.target.value, age: 27 },
                { name: 'Fluffy', age: 278}
            ]
        })
    }


render() {
    const btnStyle = {
        backgroundColor: '#b7c3b7',
        border: '1px solid blue',
        padding: '8px'
    }
    return (
    <div className="App">
        <h1>My first REACT app!</h1>
        {/*this way of using an anon function is not the recommended practice, use the bind method instead*/}
        <button
            style={btnStyle}
            onClick={() => this.switchNameHandler('Danger')}>Switch name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Justin')}
            changed={this.typeNameHandler}/>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>I am Magic</Person>
    </div>
      //the below code is what the above JSX (NOT HTML) code gets COMPILED into. It just serves as an example of what the JSX above code gets turned into with the React import
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I\'m a React.createElement element'))
  );
}
}

export default App;
