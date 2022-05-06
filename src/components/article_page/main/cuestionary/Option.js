import React from "react";


function Option(props){
    return(
        <div className="option">
            <input type="radio" id="anw1" name="anw" value="anw1" checked/>
            <label for="anw1">Respuesta 1</label>
        </div>
    )
}

export { Option };