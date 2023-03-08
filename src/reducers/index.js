import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import paymentReducer from "./paymentReducer";

export default combineReducers({
  login: loginReducer,
  payment: paymentReducer,
});
