import React from "react";
import { Article } from "./Article";

import './ArticlesContainer.css';

function ArticlesContainer({
    setChangeHeader,
}){

    setChangeHeader(false);
    return(
        <div className="articles-container">
            <h1 className="articles-container__title">Nuevos Artículos</h1>
            <section className="articles-container__article">

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

            <secttion className='' >

            </secttion>

        </div>

    )
}

export { ArticlesContainer };