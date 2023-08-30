import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import './Register.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(username,email,password)  
    try {
      const response = await axios.post("https://mern-ecom-api-y5yo.onrender.com/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate("/")
      alert("Register Succesfully")
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <div className="register">
      <div className="register-wrapper">        
        <form className="regform"onSubmit={handleRegister}>
        <span className="regtitle">CREATE AN ACCOUNT</span>
          <input
          type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
          type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p style={{fontSize:'10px',margin : '10px 10px 10px'}}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button type="submit">CREATE</button>
          <span>Do you have Account 
            <Link to="/" style={{textDecoration:'none'}}>
            <span style={{color:'red'}}>  Login</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;