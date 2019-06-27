import React from 'react'
import Styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    });
    return(
        <div className={Styles.Burger}>
            <BurgerIngredient type="bread-top" />
             {transformedIngredients}
              <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
