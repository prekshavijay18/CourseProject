import { useReducer } from "react";
import CartContext from "./cart-context";
//manage cart data and provide access to all related components that needs such data
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//state-last state snapshot
//action-what user dispatches
//return new state snapshot
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); //new array
     
    }
    

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if(action.type==="REMOVE")
  {
   
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex]; 
      const updatedAmount =
      state.totalAmount - existingCartItem.price;
      let updatedItems;
      if(existingCartItem.amount===1)
      {
        updatedItems=state.items.filter(item=>item.id!==action.id);// if not equal (false), remove(filter) that item from list 

      }
      else{

        const updatedItem={...existingCartItem, amount:existingCartItem.amount-1};//get a copy of existing cart item and update
        updatedItems=[...state.items]; 
        updatedItems[existingCartItemIndex]=updatedItem;// updating amount(quantity) of item after removal
      }
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
