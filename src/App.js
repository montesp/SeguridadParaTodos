import {Fragment} from 'react';
import { Main } from './components/article_page/main/Main';
import { HeaderContainer } from './components/article_page/header/header-container/HeaderContainer';
import { TitleName } from './components/article_page/header/title-name/TitleName';

import './App.css';


function App() {
  return (
    <Fragment>
      <HeaderContainer>
        <TitleName/>
      </HeaderContainer>
      <Main>
      </Main>
    </Fragment>
  );
}


export default App;
