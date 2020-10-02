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
