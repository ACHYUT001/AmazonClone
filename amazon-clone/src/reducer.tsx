import { IProduct } from "./models/product";
import { Item } from "semantic-ui-react";
import { stat } from "fs";

export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE-FROM-BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove the product (id: ${action.id}), not found!`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
