import React from "react";
import { useSelector } from "react-redux";
import CityToChoose from "./cityToChoose";

const SearchModal = () => {
  const cities = useSelector((state) => state.cities.cities);

  return (
    <React.Fragment>
      <div className="d-flex flex-column border border-primary pt-2 w-75 m-auto bg-light mb-3">
        {cities &&
          cities.length &&
          cities.map((city, idx) => {
            return <CityToChoose key={idx} city={city} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default SearchModal;
