import React from 'react';
import Layout from './container/Layout/Layout'
import {Route,Switch} from 'react-router-dom'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
import Checkout from './container/Checkout/Checkout'

function App() {
  return (
    <div>
      <Layout>
        <Switch>
      <Route path ="/checkout" component = {Checkout} />
        <Route path ="/" exact component = {BurgerBuilder} />
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
