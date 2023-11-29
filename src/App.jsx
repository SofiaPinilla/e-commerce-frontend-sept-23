import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
