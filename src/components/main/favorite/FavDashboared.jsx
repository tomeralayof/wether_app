import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const FavoriteDashboared = () => {
  const favoriteList = useSelector((state) => state.favorites.favorites);
  const idDarkMode = useSelector((state) => state.dark);

  return (
    <div className="m-auto w-75">
      <h5 className={idDarkMode ? "text-primary" : "text-dark"}>
        My Favorite List:{" "}
      </h5>
      {favoriteList && !favoriteList.length && (
        <p className={idDarkMode ? "text-primary" : "text-dark"}>
          Your favorite list is empty
        </p>
      )}

      <div className="row">
        {favoriteList &&
          favoriteList.length &&
          favoriteList.map((fav, idx) => {
            return <FavoriteCard key={idx} fav={fav} />;
          })}
      </div>
    </div>
  );
};

export default FavoriteDashboared;
