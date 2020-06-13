import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import { newsReducer } from './news_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  news: newsReducer
});

export default entitiesReducer;
