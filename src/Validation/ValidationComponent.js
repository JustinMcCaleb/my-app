import React from "react";

const ValidationComponent = (props) => {
    let isLongEnough = null;
    if(props.textLength < 5){
        isLongEnough = (
            <div className={'ValidationComponent'}>
                <p>Input length of: {props.textLength} is NOT long enough</p>
            </div>
        )
    }else if(props.textLength >= 5){
        isLongEnough = (
            <div className={'ValidationComponent'}>
                <p>Input length of: {props.textLength} IS long enough</p>
            </div>
        )
    }

    return (isLongEnough)
}

export default ValidationComponent;