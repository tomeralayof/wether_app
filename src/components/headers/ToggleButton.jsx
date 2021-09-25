import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { darkAction } from "../../redux/actions/dark";

const ToggleButton = () => {
  const isDarkMode = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (isDarkMode) {
      dispatch(darkAction(false));
      document.body.classList.add("light");
    } else {
      dispatch(darkAction(true));
      document.body.classList.add("dark");
    }
  };

  return (
    <DarkModeToggle
      onChange={() => handleChange()}
      checked={isDarkMode}
      size={80}
    />
  );
};

export default ToggleButton;
