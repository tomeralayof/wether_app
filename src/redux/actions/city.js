export const cityAction = (data,city_display) => {
  let newArr = [];
  data?.map((city)=> newArr.push({value:city.Temperature.Imperial.Value,unit: city.Temperature.Imperial.Unit}, {value: city.Temperature.Metric.Value,unit:city.Temperature.Metric.Unit},city_display));
  
  return {
    type: "display_city",
    payload: newArr
  }
}