import React from "react";
import { Link } from "react-router-dom";
import "./Categoryitem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="cat-2-container">
      <div className="img-con">
      <Link to={`/products/${item.cat}`}>
        <img className="cat-2-image" src={item.img} alt={item.title} />
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button className="cat-button">SHOP NOW</button>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
