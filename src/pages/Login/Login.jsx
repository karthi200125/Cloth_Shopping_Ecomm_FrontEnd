import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Login.css'
import {Link} from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username, password });
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <span className="logintitle">SIGN IN</span>
        <form className="loginform">
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} >
            LOGIN
          </button>
          {error && <span className="err">wrong Username Or Password</span>}
          <span className="fp">Forget password?</span>          
          <span>create a new account 
          <Link to="/register"style={{textDecoration:'none',marginLeft:'10px'}} >
          <span className="reg-navi">Register</span>
          </Link>                        
            </span>
        </form>
      </div>
    </div>
  );
};

export default Login;