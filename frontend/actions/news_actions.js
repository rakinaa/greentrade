const { fetchNews } = require("../util/new_api_util")

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveTheNews = news => ({
  type: RECEIVE_NEWS,
  news
})

export const receiveNews = () => dispatch => {
  return fetchNews().then(
    news => dispatch(receiveTheNews(news))
  )
}