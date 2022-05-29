import './TitleName.css';

function TitleName({changeHeader}){
    return(
        <h1 className={`title-name ${changeHeader && "title-name__changed"}`}>
            <div>Seguridad </div>
            <div>Para</div>
            <div>Todos</div>
        </h1>
    )
}

export { TitleName };