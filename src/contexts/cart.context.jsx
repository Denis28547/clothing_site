import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const decreasingQuantity = (cartItems, productToDecrease) => {
  const itemToDecrease = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );

  if (itemToDecrease.quantity === 1) {
    return deleteCartItem(cartItems, itemToDecrease); //returns all items besides productToDecrease (if productToDecrease.quantity === 1)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
  addItemToCart: () => {},
  decreaseQuantity: () => {},
  deleteItemFromCart: () => {},
  setIsCartOpen: () => {},
});

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

const ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART: "TOGGLE_CART",
};

const cartReducer = (state, action) => {
  // console.log(state);
  // console.log(action);
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case ACTIONS.TOGGLE_CART:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    dispatch({
      type: ACTIONS.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const decreaseQuantity = (productToDecrease) => {
    const newCartItems = decreasingQuantity(cartItems, productToDecrease);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    console.log(bool);
    dispatch({ type: ACTIONS.TOGGLE_CART, payload: bool });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    decreaseQuantity,
    deleteItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
