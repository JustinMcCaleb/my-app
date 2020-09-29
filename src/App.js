import React, {Component} from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{
    state = {
        persons: [
            { id: 1,name: 'Justin', age: 26 },
            { id: 2,name: 'Chey', age: 27 },
            { id: 3,name: 'Fluffy', age: 278}
        ],
        username: "Good Ol Jeff",
        showPersons: false,
        inputLength: 0,
        inputValue: '',
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

    //updates length of input and updates the input value
    inputLengthHandler = (event) => {
        this.setState(
            {
                inputLength: event.target.value.length,
                inputValue: event.target.value
            })
    }

    //takes in a string and returns it as an array
    stringToArray = (str) => {
        return str.split('');
    }

    //deletes char
    deleteCharHandler = (charIndex) => {
        let copyString = this.state.inputValue;
        let newCharArray = copyString.split('');
        newCharArray.splice(charIndex, 1);
        newCharArray = newCharArray.join('');
        this.setState({
            inputValue: newCharArray,
            inputLength: newCharArray.length
        });
    }

render() {
//here we are setting the btn style with javascript and then changing it in the if statement below for dynamic styling
 const btnStyle = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        font: 'inherit',
     ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
     }
    }

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
            btnStyle.backgroundColor = 'red';
            btnStyle[':hover'] = {
                backgroundColor: 'lightpink',
                color: 'black'
            }
    }



    let chars = (
        <div>
            {this.stringToArray(this.state.inputValue).map((char,index) => {
               return  <CharComponent
                        key={index}
                        textInput={char}
                        click={() => this.deleteCharHandler(index)}
                        />
            })}
        </div>
    )

    let classes = [];
    if(this.state.persons.length <= 2){ classes.push('red') }
    if(this.state.persons.length <= 1){ classes.push('bold')}

    return (
        //This import from Radium is necessary in order to use media queries like we do in the person component (Person.js)
        <StyleRoot>
            <div className="App">
                <h1>My first REACT app!</h1>
                <p className={classes.join(' ')}>Dynamic class test</p>
                {/*this way of using an anon function is not the recommended practice, use the bind method instead*/}
                <button
                    style={btnStyle}
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
                        <input
                            type="text"
                            onChange={(event => this.inputLengthHandler(event))}
                            value={this.state.inputValue}
                        />
                        <p>Total Length: {this.state.inputLength}</p>
                        <hr/>
                        {/*I had to use the /> to get the props to work in ValidationComponent.js*/}
                        <ValidationComponent
                            textLength={this.state.inputLength}
                        />
                        <hr/>
                        {chars}
                    </div>
                </div>
            </div>
        </StyleRoot>
      //the below code is what the above JSX (NOT HTML) code gets COMPILED into. It just serves as an example of what the JSX above code gets turned into with the React import
      // React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I\'m a React.createElement element'))
  );
}
}

export default Radium(App);
