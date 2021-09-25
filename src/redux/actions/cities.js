export const citiesAction = (data) => {
  let newArr =[];
  data?.map((city)=>newArr.push({key: city.Key, localizedName:city.LocalizedName}));
  return {
    type: "set_cities",
    payload: newArr
  }
}