import React from 'react';

const HoverData = (props) => {
  return (
    <div className="hover-data-container">
      <h3 className="hover-company">{props.companyName}</h3>
      <p className="hover-price">{props.price}</p>
      <div className="hover-caption">
          <p className="hover-difference">{props.dayDifference}</p>
          <p className="hover-percentage">{props.percentage}</p>
      </div>
    </div>
  )
}

export default HoverData;