const initialState = {
  favorites: []
}

const favorites = (state = initialState,action) => {
  switch(action.type) {
    case  "add_favorite":
      return {
        ...state,
        favorites: action.payload
      }
      case  "render_page_fav":
      return {
        ...state,
        favorites: action.payload
      }
      case  "remove_item_from_favorite":
        return {
          ...state,
          favorites: action.payload
        }
    default:
     return state;
  }
}

export default favorites;