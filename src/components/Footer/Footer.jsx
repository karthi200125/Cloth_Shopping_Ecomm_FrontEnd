import React from 'react';
import './Footter.css'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../../assets/payments.png";

const Footer = () => {
  return (
    <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="ft">About</div>
                    <div className="text1 about">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                
                <div className="contact" >
                    <div className="ft">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text1">
                            salem , Tamilnadu - 637502
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text1">Phone: 1234567890</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope className='env'/>
                        <div className="text1">Email: skarthikeyan25052001@gmail.com</div>
                    </div>
                </div>

                <div className="col cat">
                    <div className="ft">Products</div>
                    <span className="text">Shirts</span>
                    <span className="text">Jeans</span>
                    <span className="text">T Shirts</span>
                    <span className="text">Shoes</span>
                    <span className="text">Inner Wear</span>
                    <span className="text">Womens section</span>
                </div>
                <div className="col pages">
                    <div className="ft">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        FOSSIL CART 2022 CREATED BY KARTHICK. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
  );
};

export default Footer;
