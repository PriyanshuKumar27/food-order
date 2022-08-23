import React,{useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  const showCarthandler = () => {
    setCartIsShown(true);
  }
  return (
    <CartProvider>
      {/* wrapping all components inside seperate CartProvider component
      where we wrap it inside CartContext.Provider so as to access the context*/}
      {/* using CartProvider component lets us manage all cart related state seperately in
      CartProvider component instead of App.js, thus making App.js leaner */}
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCarthandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
