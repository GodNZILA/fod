import React, {useState} from 'react';
import {productItems} from './data/data';
import Header from './components/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import Racines  from './components/Racines';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      <div className="App">
        <Router>
          <Header />
          <Racines productItems={productItems} cartItems={cartItems} />
        </Router>
      </div>
    );
};

export default App;
