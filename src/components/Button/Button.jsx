import { useState } from 'react';
import './Button.css'

export const Button = () => {
    const [buttonText, setButtonText] = useState(false);
    
      function handleClick(){
        setButtonText((prevState) => {
          return !prevState;
        });
      }

    return (<button onClick={handleClick} className={ buttonText ? 'green' : 'red'}> {buttonText ? 'hello' : '' } </button>);
}