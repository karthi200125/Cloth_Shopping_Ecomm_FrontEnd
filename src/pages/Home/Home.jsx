import React from "react";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div>            
      <Navbar />
      <Slider />
      <h1 className="heading"><span>CATEGORIES</span></h1>
      <Categories />
      <h1 className="re-pro heading"><span>Recent Products</span></h1>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
