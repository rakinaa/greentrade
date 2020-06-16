class Api::StocksController < ApplicationController
  
  def index
    require 'open-uri'
    test_key = Rails.application.credentials.stock_apis[:iex][:test_key]
    api_key = Rails.application.credentials.stock_apis[:iex][:api_key]
    fmp_key = Rails.application.credentials.stock_apis[:fmp][:api_key]
    fmp_key = Rails.application.credentials.stock_apis[:fmp][:api_key]
    

    time_frames = ["1d", "1w", "1m", "3m", "6m", "1y", "2y", "5y"]
    # time_frames = ["1d", "1w", "1m"]
    charts = {}
    charts["historical"] = {}
    ticker = stock_params[:ticker]

    # iex quote
    # url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/quote/latestPrice?token=#{api_key}"

    time_frames.each do |tf|
      url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/chart/#{tf}?token=#{test_key}"
      if tf == "1d"
        # url = "https://cloud.iexapis.com/stable/stock/#{ticker}/intraday-prices?token=#{api_key}"
        # url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/intraday-prices?token=#{test_key}&chartInterval=10"
        url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/intraday-prices?token=#{test_key}"
      elsif tf =="1w"
        url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/chart/5d?token=#{test_key}"
      end
      p url
      charts["historical"][tf] = JSON.parse(open(url).read)
    end

    # url = "https://www.alphavantage.co/query?function=TEMA&symbol=#{ticker}&interval=daily&time_period=30&series_type=open&apikey=#{api_key}"
    # charts["historical"]["1m"] = JSON.parse(open(url).read)
    # p url

    # url = "https://cloud.iexapis.com/stable/stock/#{ticker}/company?token=#{api_key}"
    url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/company?token=#{test_key}"
    charts["profile"] = JSON.parse(open(url).read)

    # url = "https://financialmodelingprep.com/api/v3/quote-short/#{ticker}?apikey=#{fmp_key}"
    # charts["rtPrice"] = JSON.parse(open(url).read)[0]["price"]
    
    # url = "https://cloud.iexapis.com/stable/stock/#{ticker}/quote/latestPrice?token=#{api_key}"
    url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/quote/latestPrice?token=#{test_key}"
    charts["rtPrice"] = JSON.parse(open(url).read)

    render json: charts
  end

  def stock_params
    params.require(:stock).permit(:ticker)
  end
end