import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component{
    state = {
        persons: [
            { id: 1,name: 'Justin', age: 26 },
            { id: 2,name: 'Chey', age: 27 },
            { id: 3,name: 'Fluffy', age: 278}
        ],
        username: "Good Ol Jeff",
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        //using the spread operator means the const persons is a COPY of the array and not a reference to the original, which could be problematic
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    //dynamically changes second persons name to what is typed into input box
    typeNameHandler = (event, id) => {
        //using the passed in id with findIndex to find the index of the person object with the matching id, and storing that index in a const
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        //using the personIndex and spread operator to make a copy of the person object so we can manipulate it with no side effects
        const person = {
            ...this.state.persons[personIndex]
        }
        //updating the name of the copied person object with the value from the input box
        person.name = event.target.value;
        //making a copy of the state persons array of objects so we can safely manipulate it
        const persons = [...this.state.persons];
        //updating the copied array with the updated person const
        persons[personIndex] = person;
        //updating the original state persons array with the copied persons array
        this.setState({ persons: persons})
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

    let persons = null;
    if(this.state.showPersons){
        persons = (
            <div>
                {/*instead of hardcoding each person component we take the persons array of abjects and use .map to transform each object into a person component*/}
                {this.state.persons.map((person,index) => {
                    return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.typeNameHandler(event, person.id)}
                            />
                })}
            </div>
        )
    }

    return (
    <div className="App">
        <h1>My first REACT app!</h1>
        {/*this way of using an anon function is not the recommended practice, use the bind method instead*/}
        <button
            className={'btnStyle'}
            onClick={this.togglePersonHandler}>Show My Peeps</button>
        {persons}

        <div className={'assignmentContainer'}>
            {/*assignment one code*/}
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

            {/*assignment two code*/}
            <div className={'assignmentTwo'}>
                <h1>Assignment Two</h1>
                <input type="text"/>
            </div>
        </div>
    </div>
      //the below code is what the above JSX (NOT HTML) code gets COMPILED into. It just serves as an example of what the JSX above code gets turned into with the React import
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I\'m a React.createElement element'))
  );
}
}

export default App;
