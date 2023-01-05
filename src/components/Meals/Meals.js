import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
const Meals = () => {
  return( //fragment-wrapper for the 2 components
  <Fragment>
    <MealsSummary />
    <AvailableMeals />
  </Fragment>);
};
export default Meals;
