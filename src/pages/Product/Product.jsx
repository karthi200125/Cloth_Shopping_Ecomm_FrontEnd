import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import './Product.css'

const FilterColor = ({ color, onClick }) => (
  <div
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: color,
      margin: "0px 5px",
      cursor: "pointer",
    }}
    onClick={onClick}
  />
);

const FilterSize = ({ onChange, options }) => (
  <select style={{ marginLeft: "10px", padding: "5px" }} onChange={onChange}>
    {options.map((s) => (
      <option key={s}>{s}</option>
    ))}
  </select>
);

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="single-pro">
      <Navbar />
      <div className="single-wrap">
        <div className="single-img-con">
          <img src={product.img} alt="Product" />
        </div>
        <div className="single-info-con">
          <h1 style={{ fontWeight: "200" }}>{product.title}</h1>
          <p style={{ margin: "20px 0px" }}>{product.desc}</p>
          <span style={{ fontWeight: "100", fontSize: "50px" }} id="pri">
            ₹ {product.price}
          </span>

          <div className="single-file-con">
            <div className="single-filter">
              <span>Color</span>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className="single-filter">
              <span>Size</span>
              <FilterSize
                onChange={(e) => setSize(e.target.value)}
                options={product.size || []}
              />
            </div>
          </div>
          
          <div className="single-add">
            <div className="amount-con">
              <FaMinus onClick={() => handleQuantity("dec")} />
              <span>{quantity}</span>
              <FaPlus onClick={() => handleQuantity("inc")} />
            </div>
            <button className="single-btn" onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
