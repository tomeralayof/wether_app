export function errorHandler (err) {
  let res = "";
  if(err.response && err.response.status === 404) {
      res = "the dada your are trying to get is not found..." 
  }
 else if(err.response && err.response.status > 404) {
    res = "unexpected error has accured"
  }
  return res;
}