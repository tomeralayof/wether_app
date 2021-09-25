 
const initialState = {
  cities: [],
  city:[],
  fiveDaysFcst: [],
  err: ""
}

const cities = (state = initialState,action) => {
  switch(action.type) {
    case "set_cities":
      return {     
       ...state, 
      cities : action.payload
      } 
      case "five_days_forecast":
      return {     
       ...state, 
       fiveDaysFcst : action.payload
      } 
      case "dafult_city":
      return {     
       ...state, 
      city : action.payload
      } 
      case "display_city":
      return {     
       ...state, 
      city : action.payload
      } 
      case "error_msg":
      return {     
       ...state, 
       err : action.payload
      } 
    default:
     return state;
  }
}

export default cities;