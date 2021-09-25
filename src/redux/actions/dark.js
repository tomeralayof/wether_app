export const darkAction = (sign) => {
  return sign === true ? {type:"open_dark"}: {type:"close_dark"}
}