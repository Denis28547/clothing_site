import { createSelector } from "reselect";
import { RootState } from "../store";

import { CartState } from "./cart.reducer";

const selectCartReducer = (state: RootState): CartState => {
  return state.cart;
};

export const selectCartItems = createSelector(
  // dont really need to createSelector for this simple-returning function
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);
