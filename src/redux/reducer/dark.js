const dark = (state = false,action) => {
  switch(action.type) {
    case  "open_dark":
      return state = true; 
       case  "close_dark":
      return state = false;
    default:
     return state;
  }
}

export default dark;