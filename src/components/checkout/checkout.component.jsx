import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, deleteItemFromCart } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, name, imageUrl, quantity, price } = cartItem;

        return (
          <div key={id}>
            <img src={imageUrl} />
            <div>{name}</div>
            {/* <div onClick={() => increaseItemQuantity(id)}>+</div> */}
            <h4>{quantity}</h4>
            {/* <div onClick={} >-</div> */}
            <h4>{quantity * price}</h4>
            <div onClick={() => deleteItemFromCart(id)}>delete</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
