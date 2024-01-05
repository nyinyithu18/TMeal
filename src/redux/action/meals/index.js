import { ActionType } from "../action-type";

export const fetchCategoriesMeals = (categoriesMeals) => {
  return{
    type: ActionType.CATEGORIES_MEALS,
    payload: categoriesMeals
  }
}

export const fetchMeals = (meals) => {
  return {
    type: ActionType.FETCH_MEALS,
    payload: meals,
  };
};

export const selectedMeal = (meal) => {
  return {
    type: ActionType.SELECTED_MEAL,
    payload: meal,
  };
};
