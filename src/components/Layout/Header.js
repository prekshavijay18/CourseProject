import {Fragment} from "react";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props)=>{
    return <Fragment>
<header className={classes.header}>
    <h1>Meals</h1>
   <HeaderCartButton onClick={props.onCartClick}/>
</header>
<div className={classes["main-image"]}>
<img  src={meals} alt="FOoooood"/>
 </div>
    </Fragment>
};

export default Header;