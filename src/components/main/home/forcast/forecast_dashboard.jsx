import React from "react";
import ForecastCards from "./Forecast_cards";
import Header from "./header";
import { useSelector } from "react-redux";

const ForecastDashboared = () => {
  const err = useSelector((state) => state.cities.err);
  const modal = useSelector((state) => state.modal);

  console.log("this is the modal", modal);

  return (
    <React.Fragment>
      {!modal && (
        <div
          style={{ height: "70vh" }}
          className="border border-primary mb-3 w-75 m-auto position-relative"
        >
          {err !== "" && (
            <div className="position-absolute top-50 start-50 translate-middle">
              <p className="text-danger">{err}</p>
            </div>
          )}

          {err === "" && (
            <div>
              <Header />
              <ForecastCards />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ForecastDashboared;
