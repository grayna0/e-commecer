import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./page/about";
import Cart from "./page/cart";
import Checkout from "./page/checkout";
import ProductDetail from "./page/ProductDetail";
import Layout from "./compoents/layout";
import Login from "./page/login";
import Home from "./page/Home/home";
import "./App.scss";
import "./styles/comon.scss";
import Admin from "./page/admin/admin";
import Users from "./page/admin/users/users";

import Dashboard from "./page/admin/dashboard/dashboard";
import Products from "./page/admin/products/products";
import { Product } from "./page/admin/product/product";
import User from "./page/admin/user/user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/product" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
