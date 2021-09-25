export const fiveDaysForecast = (data) => {
  let newArr =[];
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday"];
  data.map((city,idx)=> newArr.push({temp: city.Temperature.Minimum.Value, day: days[idx]}));

  return {
    type: "five_days_forecast",
    payload: newArr
  }
}