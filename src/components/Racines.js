import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Cart from './Cart'
import Footer from './Footer';
import Categories from './Categories';
import '../styles/Racines.css';



const Racines = ({productItems, cartItems, categories, handleAddProduct}) => {

  return (
    <div className='main'>
      <Routes>
        <Route exact path="/" element={<Categories categories={categories}  cartItems={cartItems}  handleAddProduct={handleAddProduct}/>}/>
        <Route exact path="/cart" element={<Cart  cartItems={cartItems} handleAddProduct={handleAddProduct}/>}/>
      </Routes>
        <Footer/>
    </div>
  )
}

export default Racines
