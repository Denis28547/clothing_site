import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, TypedCartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

const addCartItem = (
  cartItems: TypedCartItem[],
  productToAdd: CategoryItem
): TypedCartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreasingQuantity = (
  cartItems: TypedCartItem[],
  productToDecrease: TypedCartItem
): TypedCartItem[] => {
  const itemToDecrease = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );

  if (itemToDecrease && itemToDecrease.quantity === 1) {
    return deleteCartItem(cartItems, itemToDecrease); //returns all items besides productToDecrease (if productToDecrease.quantity === 1)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (
  cartItems: TypedCartItem[],
  productToDelete: TypedCartItem
) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  TypedCartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: TypedCartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: TypedCartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const decreaseQuantity = (
  cartItems: TypedCartItem[],
  productToDecrease: TypedCartItem
) => {
  const newCartItems = decreasingQuantity(cartItems, productToDecrease);
  return setCartItems(newCartItems);
};

export const deleteItemFromCart = (
  cartItems: TypedCartItem[],
  productToDelete: TypedCartItem
) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return setCartItems(newCartItems);
};
