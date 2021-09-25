export const renderPageAction = () => {
  let currList = JSON.parse(localStorage.getItem("favorites"));

  return {
    type: "render_page_fav",
    payload: currList
  }
}