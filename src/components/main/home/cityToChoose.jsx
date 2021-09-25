import React from "react";
import { Link } from "react-router-dom";
import { modalAction } from "../../../redux/actions/modal";
import { useDispatch } from "react-redux";
import wether from "../../../services/wetherAjax";
import { cityAction } from "../../../redux/actions/city";
import { fiveDaysForecast } from "../../../redux/actions/fiveDaysFcast";
import { errorAction } from "../../../redux/actions/error";

const CityToChoose = ({ city }) => {
  const dispatch = useDispatch();

  const handleClick = async (key, city) => {
    try {
      key = parseInt(key);
      const { data } = await wether.wetherAjaxCall("chooseCity", key);
      dispatch(cityAction(data, city));
      const foreCastfive = await wether.wetherAjaxCall("fiveDaysFcas", key);
      dispatch(fiveDaysForecast(foreCastfive.data.DailyForecasts));
      dispatch(modalAction(false));
    } catch (err) {
      dispatch(errorAction(err));
      dispatch(modalAction(false));
    }
  };

  return (
    <Link
      onClick={() => handleClick(city.key, city.localizedName)}
      to="#"
      className="p-2 cursor-pointer"
    >
      {city.localizedName}
    </Link>
  );
};

export default CityToChoose;
