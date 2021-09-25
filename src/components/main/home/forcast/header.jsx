import React from "react";
import FavoriteBtn from "./fav_btn";
import ForeCastCity from "./forecast_city";

const Header = () => {
  return (
    <React.Fragment>
      <ForeCastCity />
      <FavoriteBtn />
    </React.Fragment>
  );
};

export default Header;
