import React from "react";
import TitleQuestion from './TitleQuestion';
import Answers from './Answers';
import './Question.css';


function Question({question}){
    return(
        <fieldset className="question-container">
            <TitleQuestion question = {question}/>
            <Answers question ={question}/>
        </fieldset>
    )
}

export default Question ;