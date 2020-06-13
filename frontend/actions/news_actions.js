const { fetchNews } = require("../util/new_api_util")

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
})

export const getNews = () => dispatch => {
  return fetchNews().then(
    news => dispatch(receiveNews(news))
  )
}