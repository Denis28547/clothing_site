import { FC } from "react";
import { TypedCartItem } from "../../store/cart/cart.types";
import "./cart-item.styles.scss";

type CartItemProps = {
  cartItem: TypedCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
