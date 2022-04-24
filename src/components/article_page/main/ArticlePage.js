import React from "react";

function ArticlePage({props}){
    return(
        <section className="ArticlePage-card">
            <h4>{props.title}</h4>
            <img src={props.img} className="img-page">
            </img>
            <div>
                {props.body}
            </div>
        </section>
    )
}

export { ArticlePage };