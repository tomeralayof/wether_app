import cities from "./cities";
import modal from "./modal";
import favorites from "./favorite";
import {combineReducers} from 'redux';
import dark from "./dark";
export const allReducers = combineReducers({
  cities,
  modal,
  favorites,
  dark
});