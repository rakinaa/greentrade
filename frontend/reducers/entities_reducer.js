import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import newsReducer from './news_reducer';
import historicalReducer from './historical_reducer';
import profileReducer from './profile_reducer';
import priceReducer from './price_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  news: newsReducer,
  historical: historicalReducer,
  price: priceReducer,
  porfile: profileReducer
});

export default entitiesReducer;
