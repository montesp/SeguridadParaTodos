import React from "react";

function ArticlesContainer(props){
    return(
        <section class="articles-container">
            {props.children}
        </section>

    )
}

export { ArticlesContainer };