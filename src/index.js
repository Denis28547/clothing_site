import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

// import { UserProvider } from "./contexts/user.context";
import { CartProvider } from "./contexts/cart.context";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </Provider>
  //</React.StrictMode>
);

reportWebVitals();
