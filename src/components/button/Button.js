import React from "react";
import "./button.css";

function Button({onClick}) {
  return (
    <div>
      <button className="button" onClick={onClick}>Giriş Yap</button>
    </div>
  );
}

export default Button;
