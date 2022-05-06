import React from 'react';
import { Main } from './components/article_page/main/Main';
import { Header } from './components/article_page/header/Header';
import { TitleName } from './components/article_page/header/TitleName';
import { Username } from './components/article_page/header/Username';
import { Question } from './components/article_page/main/cuestionary/Question';
import { TitleQuestion } from './components/article_page/main/cuestionary/TItleQuestion';
import { Answers } from './components/article_page/main/cuestionary/Answers';
import { ButtonCuestionary } from './components/article_page/main/cuestionary/ButtonCuestionary';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header>
        <TitleName/>
        <Username/>
      </Header>
      <Main>
        <Question>
          <TitleQuestion/>
          <Answers/>
        </Question>
        <ButtonCuestionary/>
      </Main>
    </React.Fragment>
  );
}

export default App;
