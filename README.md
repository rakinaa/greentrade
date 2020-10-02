# Greentrade

[Greentrade live](https://greentrade.herokuapp.com/#/)

Greentrade is an app which allows you to view and search for live stock prices. It is a made as a clone of Robin Hood and emulates its look and user experience. This app was built with Ruby on Rails and React.js with a PostgreSQL database.

![intro-png](app/assets/images/readme_images/intro.png)

## Features

### Landing Page

The splash page uses Sass and React to successfully reproduce the look of Robin Hood's UI, splitting up the areas into individual sections, each represented with their own react component.

```js
const Splash = (props) => {
  return (
    <div>
      <NavBarContainer />
      <Jumbotron />
      <NewsContent />
      <Carousel />
      <Sponsors />
      <Footer />
    </div>
  )
}
```

### Stock Show Page

The stock show page is only available to logged in users. It features a search bar with auto-complete functionality, an interactive chart showing price changes over time on differing time scales, and a live news feed.

Jsx which generats the chart for the current stock being viewed.
```js
<div className="chart">
  <HoverData
    companyName={props.companyName}
    price={hoverPrice}
    dayDifference={hoverDiff}
    percentage={hoverPerc}
  />

  <LineChart
    width={800}
    height={300}
    data={props.historical[timeFrame]}
    onMouseMove={handleHover}
    onMouseLeave={handleMouseLeave}
  >
    <Line
      type="linear"
      dataKey="close"
      connectNulls={true}
      stroke={lineColor}
      dot={false}
      strokeWidth={2}
    />
    <YAxis domain={["dataMin", "dataMax"]} axisLine={false} hide={true} />
    <XAxis dataKey="date" hide={true} />
    <Tooltip
      position={{ y: 0 }}
      offset={-50}
      isAnimationActive={false}
      content={customToolTip}
      wrapperStyle={{ top: -15 }}
    />
  </LineChart>

  <div className="tf-selector">
    {Object.keys(props.historical).map((tf) => (
      <p
        key={tf}
        className={`${timeFrame === tf ? "selected" : "unselected"}`}
        onClick={changeTimeFrame(tf)}
      >
        {tf}
      </p>
    ))}
  </div>

  <hr className="chart-hr" />
</div>
```

### Backend Architecture
Data for stocks is fetched from the IEX Cloud stock api, utilizing both real data and dummy data to maximize the amount of free api calls requested.

```rb
def index
  require 'open-uri'
  test_key = Rails.application.credentials.stock_apis[:iex][:test_key]
  api_key = Rails.application.credentials.stock_apis[:iex][:api_key]

  time_frames = ["1d", "1w", "1m", "3m", "6m", "1y", "2y", "5y"]
  charts = {}
  charts["historical"] = {}
  ticker = stock_params[:ticker]

  time_frames.each do |tf|
    url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/chart/#{tf}?token=#{test_key}"
    if tf == "1d"
      url = "https://cloud.iexapis.com/stable/stock/#{ticker}/intraday-prices?token=#{api_key}"
    elsif tf == "1w"
      url = "https://sandbox.iexapis.com/stable/stock/#{ticker}/chart/5d?token=#{test_key}"
    end
    charts["historical"][tf] = JSON.parse(open(url).read)
  end

  url = "https://cloud.iexapis.com/stable/stock/#{ticker}/company?token=#{api_key}"
  charts["profile"] = JSON.parse(open(url).read)

  url = "https://cloud.iexapis.com/stable/stock/#{ticker}/quote/latestPrice?token=#{api_key}"
  charts["rtPrice"] = JSON.parse(open(url).read)

  render json: charts
end

def stock_params
  params.require(:stock).permit(:ticker)
end
```
### Technologies and Libraries
ReCharts
Moment.js
Numeral.js
animate.css
IEX Cloud Financial Data API
