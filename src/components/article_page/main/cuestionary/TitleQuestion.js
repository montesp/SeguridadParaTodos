import React from "react";
import { Question } from "./Question";
import './TitleQuestion.css'

function TitleQuestion({question}){
    return(
        <p className="title-question">{question.title}</p>
    )
}


export default  TitleQuestion ;