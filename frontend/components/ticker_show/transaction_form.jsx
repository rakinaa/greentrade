import React, { useState, useCallback } from 'react';
import numeral from 'numeral';

const TransactionForm = (props) => {
  const [quantity, setQuant] = useState(0);
  const [type, setType] = useState("BUY");
  const [buyingPower, setBP] = useState(0);

  const handleSubmit = useCallback((e) => {
    e.preventDefault;
  })

  const updateType = useCallback((type) => {
    return () => {
      setType(type);
    }
  });

  const updateQuant = useCallback((e) => {
    const val = e.currentTarget.value;
    setQuant(val);
  });

  return (
    <form className="transaction-form">
      <div className="transaction-types">
        <p 
          onClick={updateType("BUY")}
          className={type === "BUY" ? "t-active" : "t-inactive"}
        >{`BUY ${props.tickerSymbol}`}</p>
        <p 
          onClick={updateType("SELL")}
          className={type === "SELL" ? "t-active" : "t-inactive"}
        >{`SELL ${props.tickerSymbol}`}</p>
      </div>

      <div className="quantity-input-container">
        <p>Shares: </p>
        <input 
          type="number"
          value={quantity}
          onChange={updateQuant}
          placeholder="0"
          min="0"
        />
      </div>

      <div className="transaction-info">
        <p>Market Price: </p>
        <p>{numeral(props.stockPrice).format('$0,0.00')}</p>
      </div>
      <div className="transaction-info">
        <p>Estimated Cost:</p>
        <p>{numeral(quantity*props.stockPrice).format('$0,0.00')}</p>
      </div>

      <div className="transaction-submit">
        <p className="transaction-errors">{props.errors}</p>

        <button onClick={handleSubmit} className="t-submit">{type}</button>

        <div className="transaction-info">
          <p className="bp-label">Buying Power:</p>
          <p>{numeral(buyingPower).format('$0,0.00')}</p>
        </div>
      </div>
    </form>
  )
}

export default TransactionForm;