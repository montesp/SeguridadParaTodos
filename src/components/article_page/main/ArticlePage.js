import React from "react";
import Cuestionario from "./cuestionary/Quest"

function ArticlePage({props}){
    return(
        <section className="ArticlePage-card">
            <h4>{props.title}</h4>
            <img
            src={props.img}
            className="img-page"
            alt="img"
            />
            <div>
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