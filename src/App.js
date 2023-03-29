import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Racines from "./components/Racines";
import CategoriesNav from "./components/CategoriesNav";
import { productItems } from "./data/data";
import { categories } from "./data/data_beta";
import Cart from "./components/Cart";
import "./App.css";
import InfoBar from "./components/InfoBar";
// import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="body">
          <Header />
          <CategoriesNav />
          <InfoBar />
          <Racines
            categories={categories}
            productItems={productItems}
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
          />
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
          {/* <Footer/> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
