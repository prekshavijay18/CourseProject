import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";
const MealItemForm = (props)=>
{ 
    const [amtIsValid,setAmtIsValid]=useState(true);
    const amountInputRef= useRef();
    const submitHandler = event => {
event.preventDefault();
const eneteredAmount=amountInputRef.current.value;
const eneteredAmountNO=+eneteredAmount;
if(eneteredAmount.trim().length===0||eneteredAmountNO<1||eneteredAmountNO>5)
{
    setAmtIsValid(false);
    return;
}
props.onAddToCart(eneteredAmountNO);
    };
return <form className={classes.form} onSubmit={submitHandler}>
    <Input 
    ref={amountInputRef}
    label="Amount" input={
        {
            id: 'amount_' + props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
        }
    } />
    <button>
        + Add
    </button>
    {!amtIsValid&& <p>Enter valid amount</p>}
</form>
};
export default MealItemForm;