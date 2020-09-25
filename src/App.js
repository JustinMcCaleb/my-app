import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component{
    state = {
        persons: [
            { name: 'Justin', age: 26 },
            { name: 'Chey', age: 27 },
            { name: 'Fluffy', age: 278}
        ],
        username: "Good Ol Jeff",
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {

    }

    //dynamically changes second persons name to what is typed into input box
    typeNameHandler = (event) => {
        this.setState({ persons: [
                { name: 'Justin', age: 26 },
                { name: event.target.value, age: 27 },
                { name: 'Fluffy', age: 278}
            ]
        })
    }

    //Changes username based on what is typed into input box
    usernameHandler = (event) => {
        this.setState({username: event.target.value})
    }

    //shows or hides person components
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }



render() {
    const btnStyle = {
        backgroundColor: '#b7c3b7',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        font: 'inherit'
    }

    let persons = null;
    if(this.state.showPersons){
        persons = (
            <div>
                {/*instead of hardcoding each person component we take the persons array of abjects and use .map to transform each object into a person component*/}
                {this.state.persons.map((person,index) => {
                    return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            />
                })}
                {/*<Person*/}
                {/*    name={this.state.persons[0].name}*/}
                {/*    age={this.state.persons[0].age}/>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[1].name}*/}
                {/*    age={this.state.persons[1].age}*/}
                {/*    click={this.switchNameHandler.bind(this, 'Justin')}*/}
                {/*    changed={this.typeNameHandler}/>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[2].name}*/}
                {/*    age={this.state.persons[2].age}>I am Magic</Person>*/}
            </div>
        )
    }

    return (
    <div className="App">
        <h1>My first REACT app!</h1>
        {/*this way of using an anon function is not the recommended practice, use the bind method instead*/}
        <button
            style={btnStyle}
            onClick={this.togglePersonHandler}>Show My Peeps</button>
        {persons}
        <div className={'assignmentOne'}>
            <h1>Assignment One</h1>
            <UserOutput
                username={this.state.username}
            />
            <UserInput
                username={this.state.username}
                changed={this.usernameHandler}
            />
        </div>
    </div>
      //the below code is what the above JSX (NOT HTML) code gets COMPILED into. It just serves as an example of what the JSX above code gets turned into with the React import
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I\'m a React.createElement element'))
  );
}
}

export default App;
