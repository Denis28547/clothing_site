import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    toggleIsCartOpen();
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="emtpy-message">Your cart is empty</span>
        )}
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
