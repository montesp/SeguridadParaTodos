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
                                            
                                        </div>
                                }}
                        />
                    }
                >
                </Route>
                <Route 
                    path="/article2"
                    element = {<ArticlePage />}
                >
                </Route>
                <Route 
                    path="/article3"
                    element = {<ArticlePage />}>
                </Route>
            </Routes>

            </section>

        </Router>
    )
}

export { Main };