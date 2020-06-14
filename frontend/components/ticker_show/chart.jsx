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
  const [hoverPrice, setPrice] = useState(0);
  const [hoverDiff, setDiff] = useState(0);
  const [hoverPerc, setPerc] = useState(0);
  const [lineColor, setColor] = useState('#21ce99');

  useEffect(() => {
    const data = props.historical[timeFrame];
    setHoverData(props.stockPrice);
    data[0].close < data[data.length-1].close ? setColor('#21ce99') : setColor('#FF0000')
  }, [props.stockPrice, props.historical]);

  const customToolTip = useCallback((e) => {
    return <div className="custom-tooltip">{e.label + ' ET'}</div>;
  });

  const setHoverData = useCallback((currPrice) => {
    if (formatPrice(currPrice) == hoverPrice) return;
    const data = props.historical[timeFrame];
    
    let startingPrice = data[0].close;
    let dayDiff = currPrice - startingPrice;
    let perc = dayDiff / startingPrice;

    let sign = dayDiff > 0 ? "+" : "";

    setPrice(formatPrice(currPrice));
    setDiff(sign + formatPrice(dayDiff));
    setPerc(`(${sign + formatPerc(perc)})`);
  });

  const handleHover = useCallback((e) => {
    if (!e.activePayload) return;
    let price = e.activePayload[0].value;
    setHoverData(price);
  });

  const handleMouseLeave = useCallback((e) => {
    setHoverData(props.stockPrice);
  });

  const changeTimeFrame = useCallback((tf) => {
    return () => {
      if (timeFrame === tf) return
      const newData = props.historical[tf];
      setTF(tf);
      newData[0].close < newData[newData.length-1].close ? setColor('#21ce99') : setColor('#FF0000')
    }
  });

  if (props.historical[timeFrame] === undefined) return null;

  return (
    <div className="chart">
      <HoverData 
        companyName={props.symbol} 
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
        <Line type="linear" dataKey="close" stroke={lineColor} dot={false} strokeWidth={2}/>
        <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true}/>
        <XAxis dataKey='date' hide={true}/>
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
          >{tf}</p>
        ))}
      </div>

      <hr className="chart-hr"/>
    </div>
  )
}

export default Chart;