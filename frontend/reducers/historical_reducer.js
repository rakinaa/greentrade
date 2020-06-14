const { RECEIVE_STOCK } = require("../actions/stock_action");

const historicalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK:
      return action.payload.historical;
    default:
      return state;
  }
};

export default historicalReducer;
