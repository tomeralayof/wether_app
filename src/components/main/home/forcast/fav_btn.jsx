import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { favorites } from "../../../../redux/actions/favorite";
import { removeItemAction } from "../../../../redux/actions/removeItemFav";
import utils from "../../../../services/utiles";

const FavoriteBtn = () => {
  const city = useSelector((state) => state.cities.city);
  const favoriteList = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const isFavExist = utils.contain(favoriteList, city);

  const handleFav = () => {
    if (!isFavExist) {
      dispatch(favorites(city));
      toast("the item has added to favorite");
    } else {
      dispatch(removeItemAction("removeFromHome", city, favoriteList));
      toast("the item has removed from favorite");
    }
  };
  return (
    <React.Fragment>
      <div className="position-absolute top-0 end-0 p-3">
        <button onClick={() => handleFav()} className="btn btn-favorite">
          <i
            className={
              isFavExist
                ? "fas fa-heart text-danger"
                : "far fa-heart text-danger"
            }
          ></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default FavoriteBtn;
