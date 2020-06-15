import { fetchStock } from "../util/stock_api_util";

export const RECEIVE_STOCK = "RECEIVE_STOCK";

const receiveStock = (payload) => ({
  type: RECEIVE_STOCK,
  payload,
});

export const getStock = (stock) => (dispatch) => {
  return fetchStock(stock).then((payload) => dispatch(receiveStock(payload)));
};
