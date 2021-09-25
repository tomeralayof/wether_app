import React from "react";
import wether from "../../../services/wetherAjax";
import { debounce } from "../../../services/debounce";
import { useDispatch } from "react-redux";
import { citiesAction } from "../../../redux/actions/cities";
import { modalAction } from "../../../redux/actions/modal";
import { useSelector } from "react-redux";
import SearchModal from "./searchModal";
import { errorAction } from "../../../redux/actions/error";

const SearchCity = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const isDarkMode = useSelector((state) => state.dark);

  const handleChange = debounce(async (e) => {
    try {
      let val = e.target.value;
      val ? dispatch(modalAction(true)) : dispatch(modalAction(false));
      const { data } = await wether.wetherAjaxCall("autoComplete", val);
      dispatch(citiesAction(data));
    } catch (err) {
      dispatch(errorAction(err));
    }
  }, 500);

  return (
    <React.Fragment>
      <div className="d-flex flex-column">
        <div className="input-group input-group-sm w-75 p-2 m-auto mt-2 ">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control border border-primary"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        {modal ? (
          <SearchModal />
        ) : (
          <div className="d-flex flex-column pt-2 w-75 m-auto ">
            <p className={isDarkMode ? "text-danger" : "text-black"}>
              Choose a city to display ...
            </p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchCity;
