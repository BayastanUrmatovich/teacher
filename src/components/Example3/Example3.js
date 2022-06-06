import classes from "./Example3.module.scss";

import { useState } from "react";



function Example3() {

  const [number, setNumber] = useState(0);
  function onClick(event) {
    setNumber(number+1);
  }

  return ( 
    <>
      <div className={classes.Example3}>

        <div >
          {number}
        </div>
        <button onClick={onClick}>
          Plus
        </button>
        
      </div>
    </>
    );
}

export default Example3;