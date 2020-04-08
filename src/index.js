import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer'
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import BaseLayout from './components/layout/BaseLayout'


// import App from './App';
//Create counter component
//////////////// Redux/////////////////////////
//dispatch
//mapsStateToProps
//Action Creator
//Reducer(state,action)
//create store (reducer)

let store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//connect component to connect mapStateToProps
//wrap out application inside Provider
//pass to the proviver to store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route exact path="/addProduct" component={AddProduct} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  ,
  document.getElementById('root')
);


