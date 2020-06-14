import { RECEIVE_NEWS } from "../actions/news_actions";
import { RECEIVE_STOCK } from "../actions/stock_action";
import { LOAD_STOCK, LOAD_NEWS } from "../actions/loading_actions";

const loadingReducer = (state = {stock: true, news: true}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_STOCK:
      newState.stock = false;
      return newState;
    case RECEIVE_NEWS:
      newState.news = false;
      return newState;
    case LOAD_STOCK:
      newState.stock = true;
      return newState;
    case LOAD_NEWS:
      newState.news = true;
      return newState;
    default:
      return state;
  }
};

export default loadingReducer;