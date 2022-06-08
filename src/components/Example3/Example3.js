import classes from "./Example3.module.scss";





function Example3({act, number}) {

  
  // function onClick(event) {
  //   setNumber(number+1);
  // }


  return ( 
    <>
      <div className={classes.Example3}>

        <div>
          {number}
        </div>
        <button onClick={act}>
          Plus
        </button>
        
      </div>
    </>
    );
}

export default Example3;