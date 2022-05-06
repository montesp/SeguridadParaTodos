import React from "react";
import TitleQuestion from './TItleQuestion';
import Answers from './Answers';


function Question({question}){
    return(
        <fieldset className="question-container">
            <TitleQuestion question = {question}/>
            <Answers question ={question}/>
        </fieldset>
    )
}

export default Question ;