const { RECEIVE_STOCK } = require("../actions/stock_action");

const priceReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK:
      return action.payload.rtPrice;
    default:
      return state;
  }
};

export default priceReducer;
