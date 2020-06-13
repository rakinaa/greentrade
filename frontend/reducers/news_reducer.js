import { RECEIVE_NEWS } from "../actions/news_actions";

export const newsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.news.articles;
    default:
      return state;
  }
}