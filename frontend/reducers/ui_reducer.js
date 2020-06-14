import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import modalDataReducer from './modal_data_reducer';
import loadingReducer from './loading_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  modalData: modalDataReducer,
  loading: loadingReducer
});

export default uiReducer;