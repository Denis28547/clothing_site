import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Contact from "./routes/contact/contact.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
