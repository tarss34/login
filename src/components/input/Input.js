import React from "react";
import "./input.css";

function Input({type,placeHolder, onChange}) {
    return(
        <div>
            <input className="input" type={type} placeholder={placeHolder} onChange={onChange}/>
        </div>

    );
}

export default Input;