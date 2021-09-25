import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemAction } from "../../../redux/actions/removeItemFav";
import { toast } from "react-toastify";

const FavoriteCard = ({ fav }) => {
  const favoriteList = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemAction("removeFromFavList", fav, favoriteList));
    toast(`${fav.city} has removed from favorite`);
  };

  return (
    <div className="col-sm-3 mt-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {fav.city} / {fav.value} C °
          </h5>
          <button onClick={() => handleRemove(fav)} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
