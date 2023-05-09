import React from "react";
import '../stylesheets/Button.css'
//children -> el numero que esta dentro del componente <Button>
//`${codigo JS}` plantillas literales, se usa para escribir codigo JS
//()=> para que onClick pueda funcionar

function Button(props){

  const isOperator = value => {
    return isNaN(value) && (value!=='.')&&(value!=='=');
  };

    return(
      <div 
      className={`buttonContainer ${isOperator(props.children) ? 'Operator' : ''}`.trim()}
      onClick={()=>props.handleClick(props.children)}
      >
        {props.children}
      </div>

    );
}

export default Button