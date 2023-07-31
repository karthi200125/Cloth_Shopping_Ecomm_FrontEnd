import React from "react";
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import ProductList from './pages/ProductList/ProductList'
import Product from './pages/Product/Product'
import Home from './pages/Home/Home'
import Success from './pages/Success/Success'
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  
  const PrivateRoute = ({ element: Element, ...props }) => {
    return user ? <Element {...props} /> : <Navigate to="/" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />        
          <Route path="/register" element={<Register />} />          
          
          <Route path="/home" element={<PrivateRoute element={Home} />} />

          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/success" element={<Success />} />          
          <Route path="/search" element={<Search />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
