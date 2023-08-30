import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Login.css'
import {Link} from 'react-router-dom'


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return; 
    }
    setIsLoading(true);
    try {
      await login(dispatch, { username, password });
      navigate("/home");
    } catch (error) {
      console.error(error);
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        
        <form className="loginform">
        <span className="logintitle">SIGN IN</span>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} disabled={isLoading}>
            {isLoading ? <span style={{color:'white'}}>Please Wait ...</span> : "Login"}
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