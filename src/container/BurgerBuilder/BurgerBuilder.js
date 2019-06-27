import React,{useState} from 'react';
import Burger from '../../components/Burger/Burger';

const BurgerBuilder = props =>{

      const [BurgerState,setBurger] = useState({
          ingredients : {
              salad : 1,
              bacon : 1,
              cheese : 2,
              meat : 2 
          }
      });   
    return(
        <React.Fragment>
        <div><Burger ingredients={BurgerState.ingredients}/></div>
        <div>Build Controls</div>
        </React.Fragment>
    );
}

export default BurgerBuilder;