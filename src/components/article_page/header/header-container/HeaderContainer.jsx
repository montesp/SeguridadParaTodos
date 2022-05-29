import './HeaderContainer.css'

function HeaderContainer(props){
    return(
        <header className="header">
            {props.children}
        </header>
    )
}

export { HeaderContainer };