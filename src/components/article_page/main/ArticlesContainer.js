import React from "react";
import { Article } from "./Article";

function ArticlesContainer({
    children,
    changeHeader,
    setChangeHeader,
}){

    setChangeHeader(false);
    return(
        <section>
            <h1>Nuevos Artículos</h1>
            <section className="articles-container">
                {children}
                <Article
                    setChangeHeader={setChangeHeader}
                    props = {{

                        title:"El nuevo antivirus del que todos están hablando",
                        to:"/article1"
                    }}
                />
                <Article
                    setChangeHeader={setChangeHeader}
                    props = {{
                        title:"¿Conoces todos los tipos de estáfa electrónica?",
                        to:"/article3"
                    }}
                />
                <Article
                    setChangeHeader={setChangeHeader}
                    props = {{

                        title:"Como usar tu tarjet online y obrevivir en el intento",
                        to:"/article2"
                    }}
                />
            </section>
        </section>

    )
}

export { ArticlesContainer };