import React, { useState } from "react";
import axios from "axios";
import './Register.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setshowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return; 
    }
    setIsLoading(true);
    console.log(username,email,password)  
    try {
      const response = await axios.post("https://mern-ecom-api-y5yo.onrender.com/api/auth/register", {
        username,
        email,
        password,
      });      
      navigate("/")      
    } catch (err) {
      console.log(err);
    }finally{
      setIsLoading(false);
    }
  };
  


  return (
    <div className="register">
      <div className="register-wrapper">        
        <form className="regform"onSubmit={handleRegister}>
        <span className="regtitle">CREATE AN ACCOUNT</span>
          <input className="input"
          type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input className="input"
          type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password">
          <input className="passinput"
            placeholder="password"
            type={showpassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showpassword ? 
          <FaEye onClick={() =>setshowPassword(!showpassword)} size={20}/>          
           : <FaEyeSlash onClick={() =>setshowPassword(!showpassword)} size={20}/>          
           }
          </div>
          <p style={{fontSize:'10px',margin : '10px 10px 10px'}}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button type="submit" disabled={isLoading}>{isLoading ? <span style={{color:'white'}}>Please Wait ...</span> : "CREATE" }</button>
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