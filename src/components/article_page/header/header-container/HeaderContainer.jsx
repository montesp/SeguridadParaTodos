import { TitleName } from '../title-name/TitleName'

import './HeaderContainer.css'

function HeaderContainer({changeHeader}){
    return(
        <header className={`header ${changeHeader && "header__changed"}`}>
           <TitleName
               changeHeader={changeHeader}
           />
        </header>
    )
}

export { HeaderContainer };