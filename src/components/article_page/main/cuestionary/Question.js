import React from "react";


function Question(props){
    return(
        <fieldset className="question-container">
            {props.children}
        </fieldset>
    )
}

export { Question };