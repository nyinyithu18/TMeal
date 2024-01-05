import { ActionType } from "../../action/action-type";

const mealInitialState = {
  categoriesMeals: [],
  meals: [],
  meal: {},
};

export const mealsReducer = (state = mealInitialState, { type, payload }) => {
  switch (type) {
    case ActionType.CATEGORIES_MEALS:
      return { ...mealInitialState, categoriesMeals: payload };
    case ActionType.FETCH_MEALS:
      return { ...mealInitialState, meals: payload };
    case ActionType.SELECTED_MEAL:
      return { ...mealInitialState, meal: payload };
    default:
      return { state };
  }
};
