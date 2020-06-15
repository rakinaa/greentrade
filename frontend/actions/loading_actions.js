export const LOAD_NEWS = "LOAD_NEWS";
export const LOAD_STOCK = "LOAD_STOCK";

export const startNewsLoad = () => ({
  type: LOAD_NEWS,
});

export const startStockLoad = () => ({
  type: LOAD_STOCK,
});

// export const startNewsLoading = () => dispatch => {
//   console.log("here")
//   return () => dispatch(startNewsLoad())
// }

// export const startStockLoading = () => dispatch => {
//   return () => dispatch(startStockLoad())
// }
