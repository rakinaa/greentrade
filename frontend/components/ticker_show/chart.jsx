import React, { useState, useCallback } from 'react';
import stockData from './aapl_data';
import stockData2 from './aapl_data2';
import { LineChart, Line, YAxis, XAxis, Tooltip } from 'recharts';


const Chart = (props) => {
  const [data, setData] = useState(props.historical["1d"]);

  const handleClick = useCallback(() => {
      setData(stockData2);
    }
  ) 

  const customToolTip = useCallback((e) => {
    return <div className="custom-tooltip">{e.label + ' ET'}</div>;
  })

  return (
    <div className="chart">
      <LineChart 
          width={800} 
          height={300} 
          data={data} 
          // onMouseMove={props.handleHover} 
          // onMouseLeave={props.handleMouseLeave}
        >
        <Line type="linear" dataKey="close" stroke={'#21ce99'} dot={false} strokeWidth={2}/>
        <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true}/>
        <XAxis dataKey='date' hide={true}/>
        <Tooltip
          position={{ y: 0 }}
          offset={props.toolTipOffset}
          isAnimationActive={false}
          content={props.customToolTip}
          wrapperStyle={{ top: -15 }}
        />
      </LineChart>
      <div onClick={handleClick} className="green-button">change</div>
      
    </div>
  )
}

export default Chart;