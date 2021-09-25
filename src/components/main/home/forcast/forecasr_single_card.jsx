import React from "react";
import { useSelector } from "react-redux";

const ForecastSingleCard = ({ day }) => {
  const isDarkMode = useSelector((state) => state.dark);

  return (
    <div
      style={{ height: "10rem" }}
      className="col-sm border border-dark position-relative"
    >
      <p className={isDarkMode ? "text-danger" : ""}>
        <strong> {day.day} </strong>
      </p>
      <p className={isDarkMode ? "text-primary" : ""}>{day.temp} F</p>
    </div>
  );
};

export default ForecastSingleCard;
