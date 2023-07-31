import { BiShoppingBag, BiSearch } from 'react-icons/bi';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import cart from '../../../assets/cart.png';
import './Navbar.css';

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartQuantity = useSelector((state) => state.cart.quantity);
  

  return (
    <div className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className='left'>
        <img src={cart} alt=""  id='cart'/>
        <Link to="/home" style={{textDecoration : "none",color : 'white'}} id='li'>
        <span>HOME</span>
        </Link >
        <Link to="/footer" style={{textDecoration : "none",color : 'white'}}id='li'>
        <span>CONTACT US</span>
        </Link>
        
      </div>
      <div className="center" onClick={() => navigate("/home")}>
        <img src={logo} alt=""/>
      </div>
      <div className='right'>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <div className='search-container'>
            <input placeholder="Search" />
            <BiSearch style={{ color: "gray", fontSize: 16 }} className='search' />
          </div>
        </Link>
        <Link to="/cart">
          <div className='custombadge'>
            <BiShoppingBag style={{ fontSize: 24, marginLeft: "10px" }} className='bag' />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
