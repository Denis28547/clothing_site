import { createContext, useState, useEffect } from "react";

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

const deleteItem = (cartItems, id) => {
  const changedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  return changedCartItems;
};

// const increaseQuantity = (cartItems, id) => {
//   const changedCartItems = cartItems.map((cartItem) =>
//     cartItem.id === id
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
//   );
//   console.log(changedCartItems);
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  console.log(cartItems);
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteItemFromCart = (idOfItemToDelete) => {
    setCartItems(deleteItem(cartItems, idOfItemToDelete));
  };

  // const increaseItemQuantity = (idToIncrease) => {
  //   setCartCount(increaseQuantity(cartItems, idToIncrease));
  // };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    deleteItemFromCart,
    // increaseItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
