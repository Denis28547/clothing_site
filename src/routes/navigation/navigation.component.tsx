import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const [mobileBarOpen, setmobileBarOpen] = useState(false);

  const signOutUser = () => dispatch(signOutStart());

  const openPhoneBar = () => setmobileBarOpen(() => !mobileBarOpen);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div
          className={`phone-button ${mobileBarOpen && "open"}`}
          onClick={openPhoneBar}
        >
          <span className="bar" />
        </div>

        <div className={`nav-links-container ${mobileBarOpen && "open"}`}>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
