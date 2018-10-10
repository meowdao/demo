import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import {intlReducer as intl} from "react-intl-redux";
import validations from "./validation";


export default combineReducers({
  intl,
  routing,
  validations,
});
