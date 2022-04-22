import React from 'react';
import { Main } from './components/article_page/main/Main';
import { Header } from './components/article_page/header/Header';
import { TitleName } from './components/article_page/header/TitleName';
import { Username } from './components/article_page/header/Username';
import { TitleMain } from './components/article_page/main/TitleMain';
import { ArticlesContainer } from './components/article_page/main/ArticlesContainer';
import { Article } from './components/article_page/main/Article';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header>
        <TitleName/>
        <Username/>
      </Header>
      <Main>
        <TitleMain/>
        <ArticlesContainer>
          <Article/>
        </ArticlesContainer>
      </Main>
    </React.Fragment>
  );
}

export default App;
