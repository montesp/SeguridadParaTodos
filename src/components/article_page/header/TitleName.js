import React from "react";
import image from '../../../assets/icons/logo.png';

function TitleName(props){
    return(
        <div className="product-container">
            <img
            src = {image}
            alt = "logo de la pagina"
            />
            <h1>Seguridad para todos</h1>
        </div>
    )
}

export { TitleName };