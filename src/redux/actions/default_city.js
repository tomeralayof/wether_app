export const defaultCityAction = (data) => {
  let newArr = [];
  data?.map((city)=> newArr.push({value:city.Temperature.Imperial.Value,unit: city.Temperature.Imperial.Unit}, {value: city.Temperature.Metric.Value,unit:city.Temperature.Metric.Unit},"tel aviv"));
  
  return {
    type: "dafult_city",
    payload: newArr
  }
}