import React from "react";
import {Link} from "react-router-dom";

function Article({
    props,
    setChangeHeader,
}){
    return(
        <article className="article-card">
            <h4>{props.title}</h4>
            <Link
                onClick={()=> setChangeHeader(true)}
                to={props.to}>Ver Más</Link>
        </article>
    )
}

export { Article };