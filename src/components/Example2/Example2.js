import Example3 from "../Example3/Example3";
import classes from "./Example2.module.scss";

function Example2({number, act}) {

  

  

  return ( 

    <>
      <div className={classes.Example2}>
        <Example3 number={number} act={act}/>

      </div>
      </>
  );
}

export default Example2;