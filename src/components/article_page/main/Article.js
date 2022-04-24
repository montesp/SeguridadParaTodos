import React from "react";
import {Link} from "react-router-dom";

function Article({props}){
    return(
        <article className="article-card">
            <h4>{props.title}</h4>
            <Link to="/article1">Ver Más</Link>
        </article>
    )
}

export { Article };