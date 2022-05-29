import React from "react";


function Option({props}){
    return(
        <div className="option">
            <input onClick={()=> props.answerStatus.setResponse(props.answer.id)} 
                type="radio" id="anw1" name="anw" value="0" 
            />
            <label >{props.answer.answer}</label>
        </div>
    )
}



export default  Option ;