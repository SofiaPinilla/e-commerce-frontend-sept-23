import React, { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import {ShoppingCartOutlined} from "@ant-design/icons"
import { Badge } from "antd";

const Header = () => {
  const { user,logout } = useContext(UserContext);
  const {cart}= useContext(ProductsContext)
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  return (
    <div>
              <NavLink to="/">Shop </NavLink>

      {user ? (
        <>
          <NavLink to="/profile">
            {user.name} <UserOutlined />
          </NavLink>
          <NavLink to="/login" onClick={logout}>Logout</NavLink>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
              <NavLink to="/cart"> <Badge count={cart.length} size="small" ><ShoppingCartOutlined /></Badge> </NavLink>

    </div>
  );
};

export default Header;
