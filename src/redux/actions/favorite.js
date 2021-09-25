export const favorites = (data) => {
  let newArr =[];
  let obj = {};
  obj.city = data[2];
  obj.value = data[1].value;
  let currList = JSON.parse(localStorage.getItem("favorites"));
  currList.push(obj);
  newArr = currList;
  localStorage.setItem("favorites", JSON.stringify(newArr));

  return {
    type: "add_favorite",
    payload: newArr
  }
}