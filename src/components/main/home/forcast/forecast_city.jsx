import React, { useState } from "react";
import { useSelector } from "react-redux";
import { changeWether } from "../../../../services/wether_img_func";

const ForeCastCity = () => {
  const [iscelsius, setCelsius] = useState(true);
  const city = useSelector((state) => state.cities.city);
  const isDarkMode = useSelector((state) => state.dark);
  const handleClick = () => {
    setCelsius(!iscelsius);
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-row m-auto">
        <div className="p-2">
          {city && city.length && <div className={changeWether(city)}></div>}
        </div>

        <div className="p-2">
          <p className={isDarkMode ? "text-primary" : "text-dark"}>{city[2]}</p>

          {city && city.length && iscelsius && (
            <p className="forecast text-primary">
              {city[1].value} {city[1].unit} °
            </p>
          )}

          {city && city.length && !iscelsius && (
            <p className="forecast text-primary">
              {city[0].value} {city[0].unit}
            </p>
          )}

          <button className="btn btn-primary" onClick={() => handleClick()}>
            {iscelsius ? "Fahrenheit" : "Celsius"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForeCastCity;
