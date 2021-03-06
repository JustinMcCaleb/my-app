import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
    width: 30%;
    margin: 16px auto;
    border: 1px solid #6c00b5;
    box-shadow: 0 2px 3px #6c00b5;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px) {
            width: 450px;
        }
    
}
`

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //     }
    // }
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
};

// export default Radium(person);
export default person;