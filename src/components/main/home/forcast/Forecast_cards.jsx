import React from "react";
import ForecastSingleCard from "./forecasr_single_card";
import { useSelector } from "react-redux";

const ForecastCards = () => {
  const fiveDaysFcst = useSelector((state) => state.cities.fiveDaysFcst);
  const isDarkMode = useSelector((state) => state.dark);

  return (
    <div
      className={
        isDarkMode
          ? "border border-primary position-absolute fixed-bottom"
          : "border border-dark position-absolute fixed-bottom"
      }
    >
      <div style={{ height: "10rem" }} className="container">
        <div className="row">
          {fiveDaysFcst &&
            fiveDaysFcst.length &&
            fiveDaysFcst.map((day, idx) => {
              return <ForecastSingleCard key={idx} day={day} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ForecastCards;
