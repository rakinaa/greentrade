const { RECEIVE_STOCK } = require("../actions/stock_action");

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK:
      return action.payload.profile;
    default:
      return state;
  }
};

export default profileReducer;
