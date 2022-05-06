import React from "react";
import { ArticlePage } from "./ArticlePage";
import { ArticlesContainer } from "./ArticlesContainer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function Main(props){
    
    return(
        <Router>
            <main className="main">
                {props.children}
            </main>
            <section className="main-section">
            <Routes>
                <Route
                    path="/"
                    element={
                        <ArticlesContainer>
                        </ArticlesContainer>
                    }>

                </Route>
                <Route 
                    path="/article1"
                    element={
                        <ArticlePage           
                            props = {{
                                    title:"Sale nuevo anitvirus: más potente que karspersky",
                                    img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                                    body:
                                        <div>
                                            <h1>La mejor forma de protegerse</h1>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </p>

                                            <h1>Por qué necesitas un antivirus</h1>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </p>
                                            
                                        </div>,
                                    questions:[
                                        {
                                            title:"¿Cual antivirus es el más recomendado si no descargas cosas ?",
                                            answers:["Karspersky","Norton","Avast","Windows Defender"],
                                            rightAnswer:2
                                        },
                                        {
                                            title:"¿Cual de estos es el Antivirus más antiguo",
                                            answers:["Karspersky","Norton","Avast","Windows Defender"],
                                            rightAnswer:1
                                        },
                                        {
                                            title:"¿Cuál es el antivirus recomendado por el gobierno?",
                                            answers:["Karspersky","Norton","Avast","Windows Defender"],
                                            rightAnswer:3
                                        }
                            
                                    ]
                                }}
                        />
                    }
                >
                </Route>
                <Route 
                    path="/article2"
                    element = {<ArticlePage           
                        props = {{
                                title:"Como usar tus tarjetas de manera segura en internet",
                                img:"https://gestion.pe/resizer/u1CIiiDmDYAISHd20TCeLyGHCW4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/W4TYJL6NRBER3ICAK245T7T47M.jpg",
                                body:
                                    <div>
                                        <h1>Revisa bien los sitios donde te metes</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>

                                        <h1>Borra tu historial</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        
                                    </div>,
                                questions:[
                                    {
                                        title:"¿Cuál tarjeta es la más fácil de robar?",
                                        answers:["Visa","Paypal","Mastercard","Ninguna"],
                                        rightAnswer:2
                                    },
                                    {
                                        title:"¿Cual tarjeta deberias de usarla en un sitio dudoso?",
                                        answers:["Visa","Paypal","Mastercard","Ninguna"],
                                        rightAnswer:1
                                    },
                                    {
                                        title:"¿Cual tarjeta ess la más segura?",
                                        answers:["Visa","Paypal","Mastercard","Ninguna"],
                                        rightAnswer:3
                                    }
                        
                                ]
                            }}
                    />}
                >
                </Route>
                <Route 
                    path="/article3"
                    element = {<ArticlePage           
                        props = {{
                                title:"Como proteger tu correo electronico de estafadores y embusteros",
                                img:"https://www.nubedigital.mx/flexo/assets/imagenesblog/completas/correo-electronico-ndmx-b.jpg",
                                body:
                                    <div>
                                        <h1>No compartas tu correo</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>

                                        <h1>No te registres de buenas a primeras</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        
                                    </div>,
                                questions:[
                                    {
                                        title:"Cual es el correo más confiable",
                                        answers:["Gmail","Outlook","Yahoo","otro"],
                                        rightAnswer:2
                                    },
                                    {
                                        title:"¿Cual es el correo más antiguo?",
                                        answers:["Gmail","Outlook","Yahoo","otro"],
                                        rightAnswer:1
                                    },
                                    {
                                        title:"¿Cual es el correo mas visitado?",
                                        answers:["Gmail","Outlook","Yahoo","otro"],
                                        rightAnswer:3
                                    }
                        
                                ]
                            }}
                    />}>
                </Route>
            </Routes>

            </section>

        </Router>
    )
}

export { Main };