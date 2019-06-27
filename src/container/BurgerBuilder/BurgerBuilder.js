import React from 'react';
import Burger from '../../components/Burger/Burger';

const BurgerBuilder = props =>{

    return(
        <React.Fragment>
        <div><Burger/></div>
        <div>Build Controls</div>
        </React.Fragment>
    );
}

export default BurgerBuilder;