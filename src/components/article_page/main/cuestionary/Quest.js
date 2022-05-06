import React, { useState } from "react";
import Question  from "./Question";

let questions

function Quest({questions}){
    createQuestions(questions)
    const [calificacion, setCalificacion] = useState(0);
    
    return(
        <div>
            <div>
                {placeQuestions()}
            </div>
            <div className="quet-foot">
                <button className= "exam-button" 
                onClick={()=> setCalificacion(checkCalif())}> Ver resultados</button>
                <span>Puntaje: {calificacion} / 100</span>
            </div>

            
        </div>
    )
}

function checkCalif(){
    let puntaje = 0
    let puntajeMaximo = questions.length

    questions.forEach(question => {
        if (question.isCorrect)
            puntaje++
    });
    
    return parseInt(100 * puntaje/puntajeMaximo)
}

function placeQuestions(){
    let questionsHmtl = []

    questions.forEach(question => {
        questionsHmtl.push(<Question question = {question}></Question>)
    });

    return questionsHmtl
}

function createQuestions(vanillaQuestions){
    questions = []
    vanillaQuestions.forEach(question => {
        questions.push(createQuestion(question))
        
    });
}

function createQuestion(question){
    return {
        ...question,
        isCorrect: false,
        setResponse(newResponse){
            this.isCorrect = this.rightAnswer === newResponse + 1
        }
        
    }

}


export default Quest ;