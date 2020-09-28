import React from "react";
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className={'CharComponent'}>
            <p>{props.textInput}</p>
        </div>
    )
}

export default CharComponent;