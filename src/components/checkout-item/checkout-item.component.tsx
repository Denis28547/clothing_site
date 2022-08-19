import { FC } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  decreaseQuantity,
  deleteItemFromCart,
} from "../../store/cart/cart.action";
import { TypedCartItem } from "../../store/cart/cart.types";

import "./checkout-item.styles.scss";

type CheckoutItemProps = {
  cartItem: TypedCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const decreaseItemHandler = () =>
    dispatch(decreaseQuantity(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const deleteItemHandler = () =>
    dispatch(deleteItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{quantity * price}</span>
      <div className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
