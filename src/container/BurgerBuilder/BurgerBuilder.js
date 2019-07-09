import React,{useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

function BurgerBuilder (props){

    const INGREDIENT_PRICES = {
        salad : 0.5,
        cheese : 0.4,
        meat : 1.3,
        bacon : 0.7
    }
      const [BurgerState,setBurger] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
      })

      const [purchasing,setCheckout] = useState({
        purchasing : false
      })

      const updatePurchaseState = (newIngredients , newPrice) => {
           
          let sum = Object.keys(newIngredients) 
          .map(igKey =>{
              return newIngredients[igKey];
          })
          .reduce((sum ,el) => {
              return sum + el;
          } ,0);
          setBurger( { ingredients : newIngredients , totalPrice : newPrice , purchasable: sum > 0 } );;
         
      }
      const addIngredientHandler = (type) => {
            const oldCount = BurgerState.ingredients[type];
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...BurgerState.ingredients                                         //change state inmutably
            };
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = BurgerState.totalPrice;
            const newPrice = oldPrice + priceAddition;
           
            // setBurger( { ingredients : updatedIngredients , totalPrice : newPrice } );
            updatePurchaseState(updatedIngredients,newPrice);
           
      }

     const removeIngredientHandler = (type) =>{
        const oldCount = BurgerState.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...BurgerState.ingredients                                         //change state inmutably
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = BurgerState.totalPrice;
        const newPrice = oldPrice - priceDeduction;
       
        // setBurger({ ingredients : updatedIngredients , totalPrice : newPrice });
        updatePurchaseState(updatedIngredients,newPrice);
    
      }
      const purchaseHandler = () =>{
          setCheckout({ purchasing : true })
      }
      const purchaseCancelHandler = () =>{
        setCheckout({ purchasing : false })
    }
    const purchaseContinueHandler = () =>{
        alert('You Continue !!');
    }
      const disabledInfo = {
          ...BurgerState.ingredients
      };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 ;
        }
    return(
        <React.Fragment>
            {console.log(BurgerState)}
            <Modal show={purchasing.purchasing}
            modalClosed={purchaseCancelHandler}>
                <OrderSummary 
                price = {BurgerState.totalPrice}
                purchaseCancelled={purchaseCancelHandler}
                purchaseContinue={purchaseContinueHandler}
                ingredients={BurgerState.ingredients}/> 
             </Modal>
        <Burger ingredients={BurgerState.ingredients}/>
        <BuildControls ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled = {disabledInfo}
        ordered = {purchaseHandler}
        price = {BurgerState.totalPrice}
        purchasable = {BurgerState.purchasable}/>
       
        </React.Fragment>
    );
}

export default BurgerBuilder;