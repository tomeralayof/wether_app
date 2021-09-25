export const modalAction = (sign) => {
  return sign === true ? {type:"open_modal"}: {type:"close_modal"}
}