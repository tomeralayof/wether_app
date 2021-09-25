function contain(favoriteList,city) {
  let cityToCheck = city[2];
  for(let i=0;i<favoriteList.length;i++) {
    if(cityToCheck === favoriteList[i].city) return true; 
  }
  return false;
}

 function changeWether(city) {
   console.log(city);
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

const utils = {
  contain,
  changeWether
}

export default utils;