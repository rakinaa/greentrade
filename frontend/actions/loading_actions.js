export const LOAD_NEWS = "LOAD_NEWS";
export const LOAD_STOCK = "LOAD_STOCK";

const startNewsLoad = () => ({
  type: LOAD_NEWS
})

const startStockLoad = () => ({
  type: LOAD_STOCK
})

export const startNewsLoading = () => dispatch => {
  return () => dispatch(startNewsLoad())
}

export const startStockLoading = () => dispatch => {
  return () => dispatch(startStockLoad())
}