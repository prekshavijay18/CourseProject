import classes from "./Card.module.css";
 const Card = (props)=>
 { //styling component
return <div className={classes.card}>{props.children}</div>
 };
 export default Card;