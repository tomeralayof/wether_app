import React from "react";
import SearchCity from "./searchCity";
import { useSelector } from "react-redux";
import ForecastDashboared from "./forcast/forecast_dashboard";

const Home = () => {
  const modal = useSelector((state) => state.modal);
  const err = useSelector((state) => state.cities.err);

  return (
    <React.Fragment>
      {err === "" ? <SearchCity /> : ""}
      {!modal ? <ForecastDashboared /> : ""}
    </React.Fragment>
  );
};

export default Home;
