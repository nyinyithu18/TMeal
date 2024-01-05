import { combineReducers } from "redux";
import { mealsReducer } from "./meals-reducer/meals-reducer";

export const reducer = combineReducers({
  meals: mealsReducer,
});
