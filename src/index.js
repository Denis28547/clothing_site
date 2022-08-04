import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { store, persistor } from "./store/store";

import reportWebVitals from "./reportWebVitals";
import { stripePromise } from "./utils/stripe/stripe.utils";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Router>
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);

reportWebVitals();
