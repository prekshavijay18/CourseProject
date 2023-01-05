import React from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btn, setBtn] = useState(false);
  const cartCtx = useContext(CartContext); //reevaluated whenever context changes 
  const countCartItem = cartCtx.items.reduce((curCount, item) => {
    return curCount + item.amount;
  }, 0); 
  const { items } = cartCtx;
  const buttonClasses = `${classes.button} ${btn ? classes.bump : ""}`; //Template literal notation|animation
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtn(true);
    const timer= setTimeout(() => {
      setBtn(false);
    }, 300);
    return(()=>{
        clearTimeout(timer);
    })
  }, [items]);
  return ( //badge- number of items in the cart
  
    // pointer func to be executed here on button click
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{countCartItem}</span> 
    </button>
  );
};

export default HeaderCartButton;
