import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./Search.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const res = await axios.get("https://mern-ecom-api-y5yo.onrender.com/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [query, products]);

  const handleClose = () => {
    setShowSearchModal(false);
    navigate("/home");
  };

  return (
    <>
      {showSearchModal && (
        <div className="search-modal">
          <Navbar />
          <div className="form-field">
            <input
              autoFocus
              type="text"
              placeholder="Search for products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <MdClose className="close-btn" onClick={handleClose} />
          </div>
          <div className="search-result-content">
            <div className="search-results">

              {filteredProducts.map((filter) => (
                <Link to={`/product/${filter._id}`} style={{textDecoration:'none'}}>
                <div className="search-result-item" key={filter.id}>
                  <div className="image-container">
                    <img src={filter.img} alt="Product" />
                  </div>
                  <div className="prod-details">
                    <span className="name">{filter.title}</span>
                    <span className="desc">{filter.desc}</span>
                  </div>
                </div>
                </Link>
              ))}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
