import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //use state for more than one conditions| here, to show or not show carts 
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return ( //components needed on the main page
  //wrap with cart provider all components that need access
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* pointer func to be executed from another component */}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
