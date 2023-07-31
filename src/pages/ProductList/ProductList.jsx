import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import './ProductList.css'
import { useLocation } from "react-router-dom";


const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };


  return (
    <div>
      <Navbar />
      
      <h1 style={{margin: '20px'}}>{cat}</h1>
      <div className="pl-fil-con">
        <div className="select-con">
          <h2>Filter Products:</h2>
          <select style={{padding:'10px'}}name="color" onChange={handleFilters}>
            <option disabled selected>Color</option>
            <option >white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select style={{padding:'10px',margin:'10px'}}name="size" onChange={handleFilters}>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="select-con">
          <h2>Sort Products:</h2>
          <select style={{padding:'10px'}} onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
