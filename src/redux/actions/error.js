export const errorAction = (err) => {
  return {
    type: "error_msg",
    payload: err
  }
}