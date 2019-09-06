import React,{useState,useEffect} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


function BurgerBuilder (props){

    const INGREDIENT_PRICES = {
        salad : 0.5,
        cheese : 0.4,
        meat : 1.3,
        bacon : 0.7
    }
      const [BurgerState,setBurger] = useState({
        ingredients: null,
        totalPrice: 4,
        purchasable: false
      })

      const [purchasing,setCheckout] = useState({
        purchasing : false,
        loading : false
      })
    //   useEffect(() =>{
    //     axios.get('https://react-my-burger-f2d6c.firebaseio.com/ingredients.json')
    //     .then( response =>{
            
    //             console.log(response,ingredient,BurgerState);
    //     }
    //         )
            
    // }, [])
    useEffect(() => {
        axios
          .get("https://react-my-burger-f2d6c.firebaseio.com/ingredients.json")
          .then(result => setBurger({ingredients: result.data,
            totalPrice: 4,
            purchasable: false}))
      }, []);
   
      const updatePurchaseState = (newIngredients , newPrice) => {
           
          let sum = Object.keys(newIngredients) 
          .map(igKey =>{
              return newIngredients[igKey];
          })
          .reduce((sum ,el) => {
              return sum + el;
          } ,0);
          setBurger( { ingredients : newIngredients , totalPrice : newPrice , purchasable: sum > 0 } );
         
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
          setCheckout({ purchasing : true , loading : false })
      }
      const purchaseCancelHandler = () =>{
        setCheckout({ purchasing : false , loading : false})
    }
    const purchaseContinueHandler = () =>{
   
        const queryParams =[];

        for (let i in BurgerState.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(BurgerState.ingredients[i]));
        }
        queryParams.push('price=' + BurgerState.totalPrice)
        const queryString = queryParams.join('&');
         props.history.push({
            pathname: '/checkout',
            search : '?' + queryString  
            });
 
    }
      const disabledInfo = {
          ...BurgerState.ingredients
      };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 ;
        }
        let orderSummary =   null
    
        
       
        let burger =  <Spinner/>
        if(BurgerState.ingredients){
             burger=
        (
        <React.Fragment>
        <Burger ingredients={BurgerState.ingredients}/>
        <BuildControls ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled = {disabledInfo}
        ordered = {purchaseHandler}
        price = {BurgerState.totalPrice}
        purchasable = {BurgerState.purchasable}/>
        </React.Fragment>
        ) ;
        orderSummary=(
        <OrderSummary 
        price = {BurgerState.totalPrice}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinue={purchaseContinueHandler}
        ingredients={BurgerState.ingredients}/> );
        }
        if(purchasing.loading){
            orderSummary = <Spinner/>
        }
       
    return(
        <React.Fragment>
               {console.log(BurgerState)}
            <Modal show={purchasing.purchasing}
            modalClosed={purchaseCancelHandler}>
                
                {orderSummary}
             </Modal>
             {burger}
        </React.Fragment>
    );
}

export default withErrorHandler(BurgerBuilder,axios);