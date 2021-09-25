export const changeWether = (city) => {
  let res = "";
  let temprature = city[1].value;
  if (temprature >= "25") {
    res = "weather sunny";
  } else if (temprature >= "18" && temprature <= "25") {
    res = "weather cloudy";
  } else if (temprature <= "18" && temprature >= "0") {
    res = "weather rainy";
  } else if (temprature < 0) {
    res = "weather snowy";
  }
  return res;
}; 