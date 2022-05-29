import {Fragment, useState} from 'react';
import { Main } from './components/article_page/main/Main';
import { HeaderContainer } from './components/article_page/header/header-container/HeaderContainer';

import './App.css';


function App() {
  const [changeHeader, setChangeHeader] = useState(false);

  return (
    <Fragment>
      <HeaderContainer
      changeHeader={changeHeader}
      >
      </HeaderContainer>
      <Main
      changeHeader={changeHeader}
      setChangeHeader={setChangeHeader}
      >
      </Main>
    </Fragment>
  );
}


export default App;
