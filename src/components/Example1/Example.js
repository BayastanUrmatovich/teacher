import Example2 from "../Example2/Example2";
import classes from "./Example.module.scss";

import { useState } from "react";
function Example1() {

  const [number, setNumber] = useState(0);
  
  function change() {
    setNumber(number+1);
  }


  return ( 
    <>
      <div className={classes.Example1}>
        <Example2  number={number} act={change} />

        <button onClick={() => {
          setNumber(number-1);
        }}>
          minus
        </button>
      </div>
    </>
  );
}

export default Example1;