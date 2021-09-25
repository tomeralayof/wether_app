//reducer
const modal = (state = false,action) => {
  switch(action.type) {
    case  "open_modal":
      return state = true;

      case  "close_modal":
      return state = false;
    default:
     return state;
  }
}

export default modal;