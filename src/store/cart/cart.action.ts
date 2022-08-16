import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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
  cartItems: CartItem[],
  productToDecrease: CartItem
): CartItem[] => {
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

const deleteCartItem = (cartItems: CartItem[], productToDelete: CartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CartItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const decreaseQuantity = (
  cartItems: CartItem[],
  productToDecrease: CartItem
) => {
  const newCartItems = decreasingQuantity(cartItems, productToDecrease);
  return setCartItems(newCartItems);
};

export const deleteItemFromCart = (
  cartItems: CartItem[],
  productToDelete: CartItem
) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return setCartItems(newCartItems);
};
