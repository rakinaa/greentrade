import React, { useState, useCallback, useEffect } from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip } from 'recharts';
import HoverData from './hover_data';
import moment from 'moment';
import numeral from 'numeral';

const formatPrice = (price) => {
  return numeral(price).format('$0,0.00');
}

const formatPerc = (perc) => {
  return numeral(perc).format('0.00%');
}

const Chart = (props) => {
  const [timeFrame, setTF] = useState("1d");
  const [data, setData] = useState(props.historical["1d"]);
  const [hoverPrice, setPrice] = useState(0);
  const [hoverDiff, setDiff] = useState(0);
  const [hoverPerc, setPerc] = useState(0);
  const [toolTipOffset, setOffset] = useState(-50);

  useEffect(() => {
    console.log("mounted");
    setHoverData(data[data.length-1].close);
  }, [])

  const customToolTip = useCallback((e) => {
    return <div className="custom-tooltip">{e.label + ' ET'}</div>;
  })

  const setHoverData = useCallback((currPrice) => {
    let startingPrice = data[0].close;
    let dayDiff = currPrice - startingPrice;
    let perc = dayDiff / startingPrice;

    let sign = dayDiff > 0 ? "+" : "";

    setPrice(formatPrice(currPrice));
    setDiff(sign + formatPrice(dayDiff));
    setPerc(`(${sign + formatPerc(perc)})`);
  })

  const handleHover = useCallback((e) => {
    if (!e.activePayload) return;
    let price = e.activePayload[0].value;
    setHoverData(price);
  })

  const handleMouseLeave = useCallback((e) => {
    let price = data[data.length-1].close;
    setHoverData(price);
  })

  const changeTimeFrame = useCallback((tf) => {
    return () => {
      if (timeFrame === tf) return
      setTF(tf);
      setData(props.historical[tf]);
    }
  })


  return (
    <div className="chart">
      <HoverData 
        companyName={"AAPL"} 
        price={hoverPrice} 
        dayDifference={hoverDiff} 
        percentage={hoverPerc} 
      />

      <LineChart 
          width={800} 
          height={300} 
          data={data} 
          onMouseMove={handleHover} 
          onMouseLeave={handleMouseLeave}
        >
        <Line type="linear" dataKey="close" stroke={'#21ce99'} dot={false} strokeWidth={2}/>
        <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true}/>
        <XAxis dataKey='date' hide={true}/>
        <Tooltip
          position={{ y: 0 }}
          offset={toolTipOffset}
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
          >{tf}</p>
        ))}
      </div>

      <hr className="chart-hr"/>
    </div>
  )
}

export default Chart;