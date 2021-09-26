import './App.css';
import {Switch,Route} from "react-router-dom";
import NavBar from "./components/headers/navBar";
import Home from './components/main/home/homeGeneral';
import FavoriteDashboared from './components/main/favorite/FavDashboared';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import wether from './services/wetherAjax';
import { useDispatch,useSelector } from 'react-redux';
import { defaultCityAction } from './redux/actions/default_city';
import { useState } from 'react';
import { fiveDaysForecast } from './redux/actions/fiveDaysFcast';
import { renderPageAction } from './redux/actions/renderPageFav';
import { errorHandler } from './services/errorHandler';
import { errorAction } from './redux/actions/error';
import axios from 'axios';

function App() {
  const isDarkMode = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const[location,setLocation] = useState({});

async function success(pos) {
  let crd = pos.coords;
  let latitude = crd.latitude;
  let longitude = crd.longitude;
   let {data} = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=hFErH3ODYR7lAvbJl8CJiZYIfHdxcPCN&q=${latitude}%2C${longitude}`);
    let obj = { temp: data.GeoPosition.Elevation.Metric.Value , country: data.Country.EnglishName ,city: data.LocalizedName}
  setLocation(obj);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

  useEffect(() => {
    const getDefault = async () => {
      try {
        const { data } = await wether.wetherAjaxCall("chooseCity", 215854);
        dispatch(defaultCityAction(data));
        const defaultFiveDays = await wether.wetherAjaxCall("fiveDaysFcas",215854);
        dispatch(fiveDaysForecast(defaultFiveDays.data.DailyForecasts));
      } catch(err) {
        const error = errorHandler(err);
       dispatch(errorAction(error));
      }
    }
    getDefault();
     let currList = JSON.parse(localStorage.getItem("favorites"));
     if(!currList) {
      let favorite = [];
      localStorage.setItem("favorites", JSON.stringify(favorite));
     } else {
       dispatch(renderPageAction());
     }
     navigator.geolocation.getCurrentPosition(success, error);  
     // eslint-disable-next-line
  }, []);


  return (
    <div  style={isDarkMode? {backgroundColor: "black"} : {backgroundColor:"white"}}
    className="App">
      <ToastContainer/>
      <header>
      <NavBar location ={location} />
      </header>
      <main>
        <Switch>
        <Route path="/favorite" exact component={FavoriteDashboared}  />
        <Route path="/" exact component={Home}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
