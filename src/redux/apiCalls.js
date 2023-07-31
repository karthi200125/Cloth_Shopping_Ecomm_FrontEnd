
import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { clearCart } from "./cartRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    dispatch(clearCart()); 
  } catch (err) {
    dispatch(loginFailure());
    throw err;
  }
};
