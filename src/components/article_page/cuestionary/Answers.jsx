import React from "react";
import Option from "./Option";
import './Answers.css'


function Answers({question}){
    return(
        <form className="answers">
            {deployOptions(question)}
        </form>
    )
}

function deployOptions(question){
    let answers = question.answers
    let answersHtml = []
    for (let id = 0; id < answers.length; id++) {
        const answer = answers[id];
        answersHtml.push(
            <Option props= {
                {
                    answer:{answer,id},
                    answerStatus:question
                }
            }/>
        )
    }

    return answersHtml
}

export default Answers ;