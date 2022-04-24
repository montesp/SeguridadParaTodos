import React from "react";
import { Article } from "./Article";

function ArticlesContainer(props){
    return(
        <section>
            <h1>Nuevos Artículos</h1>
            <section className="articles-container">
                {props.children}
                <Article 
                    props = {{
                        title:"El nuevo antivirus del que todos están hablando",
                    }}
                />
            </section>
        </section>

    )
}

export { ArticlesContainer };