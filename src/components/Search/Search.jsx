import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(true);
const naviagte=useNavigate()
  const handleSearch = async (query) => {
    try {
      setQuery(query); // Save the query in state
      const response = await axios.get(`/search?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleClose = () => {
    setShowSearchModal(false); 
    naviagte("/home")
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
              onChange={(e) => handleSearch(e.target.value)}
            />
            <MdClose className="close-btn" onClick={handleClose} />
          </div>
          <div className="search-result-content">
            {searchResults.length === 0 ? (
              <div className="start-msg">
                Start typing to see products you are looking for.
              </div>
            ) : (
              <div className="search-results">
                {searchResults.map((product) => (
                  <div key={product._id} className="search-result-item">
                    <div className="image-container">
                      <img src={product.img} alt="Product" />
                    </div>
                    <div className="prod-details">
                      <span className="name">{product.title}</span>
                      <span className="desc">{product.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
