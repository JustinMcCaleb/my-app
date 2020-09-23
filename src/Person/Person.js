import React from 'react';

const person = () => {
    return (
        <div>
            <p>I'm a person and I am {Math.floor(Math.random() * 30)}</p>
        </div>
    );
};

export default person;