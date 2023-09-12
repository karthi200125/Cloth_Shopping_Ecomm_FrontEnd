import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag, BiSearch, BiLogOut } from "react-icons/bi";
import logo from "../../../assets/logo.png";
import cart from "../../../assets/cart.png";
import "./Navbar.css";
import { logout } from "../../redux/userRedux";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const catclick = (cat) => {
    navigate(`/products/${cat}`);
  };

  return (
    <div className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="left">
        <img src={cart} alt="" id="cart" />
        <Link to="/home" style={{ textDecoration: "none", color: "white" }} id="li">
          <span>HOME</span>
        </Link>
        <span id="li">CONTACT US</span>
        <select className="cat-dropdown" onChange={(e) => catclick(e.target.value)} id="li">
          {/* <option value="" disabled>
            Catagories
          </option> */}
          <option value="men">Mens</option>
          <option value="women">Womens</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="center" onClick={() => navigate("/home")}>
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <Link to="/search" style={{ textDecoration: "none" }}>
          <div className="search-container">
            <input placeholder="Search" />
            <BiSearch className="search" />
          </div>
        </Link>
        <div className="logout" onClick={handleLogout}>
          LOGOUT 
        </div>
        <Link to="/cart">
          <div className="custombadge">
            <BiShoppingBag style={{ fontSize: 24, marginLeft: "10px" }} className="bag" />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
