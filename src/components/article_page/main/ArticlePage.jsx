import React from "react";
import Cuestionario from "./cuestionary/Quest"
import './ArticlePage.css';

function ArticlePage({props}){
    return(
        <section className="article-page__container">
            <div className="article-title__container">
                <h4 className="article-title__title">{props.title}</h4>
                <img
                src={props.img}
                className="article-title__img"
                alt="img"
                />
            </div>
            <div className="paragraphs-container">
                {props.body}
            </div>
            <h1 className="cuestionario-title">Cuestionario</h1>
            <div>
                <Cuestionario questions = {props.questions}/>
            </div>
        </section>
    )
}

export { ArticlePage };