import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import modalDataReducer from './modal_data_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  modalData: modalDataReducer
});

export default uiReducer;