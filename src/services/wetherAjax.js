 import axios from "axios";
import {ApiKey} from "./config.json";
import {ApiUrl} from "./config.json";

function wetherAjaxCall(param,txt) {
  if(param === "autoComplete") return axios.get(`${ApiUrl}/locations/v1/cities/autocomplete?apikey=${ApiKey}&q=${txt}`);
  else if(param === "chooseCity") return axios.get(`${ApiUrl}/currentconditions/v1/${txt}?apikey=${ApiKey}`);
  else if(param === "fiveDaysFcas") return axios.get(`${ApiUrl}/forecasts/v1/daily/5day/${txt}?apikey=${ApiKey}`);
} 

const wether = {
  wetherAjaxCall,
}

export default wether;