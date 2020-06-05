import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalDataReducer(state={}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case OPEN_MODAL:
      newState[action.modalData.label] = action.modalData.data;
      return newState
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
}
