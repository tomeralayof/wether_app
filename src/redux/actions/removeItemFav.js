export const removeItemAction = (param,data,favoriteList) => {
  let result=[];
  if(param === "removeFromHome") {
    const city = data[2];
     result = favoriteList.filter(list => list.city!== city);
    localStorage.setItem("favorites", JSON.stringify(result));
  }
  else if(param === "removeFromFavList") {
    const city = data;
    result = favoriteList.filter(list => list!== city);
    localStorage.setItem("favorites", JSON.stringify(result));
  }
  
  return {
    type: "remove_item_from_favorite",
    payload: result
  }
}