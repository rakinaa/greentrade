class Api::NewsController < ApplicationController
  def index
    api_key = Rails.application.credentials.news_api[:api_key];
    url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=#{api_key}"
    @news = JSON.parse(open(url).read)
    render json: @news
  end
end
