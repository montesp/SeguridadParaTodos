import React from "react";
import { Question } from "./Question";


function TitleQuestion({question}){
    return(
        <p className="question">{question.title}</p>
    )
}


export default  TitleQuestion ;