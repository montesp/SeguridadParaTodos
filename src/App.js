import React from 'react';
import { Main } from './components/article_page/main/Main';
import { Header } from './components/article_page/header/Header';
import { TitleName } from './components/article_page/header/TitleName';
import { Username } from './components/article_page/header/Username';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header>
        <TitleName/>
        <Username/>
      </Header>
      <Main>
      </Main>
    </React.Fragment>
  );
}


export default App;
