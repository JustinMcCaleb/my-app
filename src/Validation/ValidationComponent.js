import React from "react";

const ValidationComponent = (props) => {
    if(props.textLength < 5){
        return <p>Text too short</p>
    }else if(props.textLength >= 5){
    return <p>Text long enough</p>
    }else{
        return <p>Validation Component</p>
    }
}

export default ValidationComponent;