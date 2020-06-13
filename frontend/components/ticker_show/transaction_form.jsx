import React, { useState } from 'react';

const TransactionForm = (props) => {
  const [quantity, setQuant] = useState(0);
  const [cost, setCost] = useState(0);
  const [type, setType] = useState("BUY");
  const [buyingPower, setBP] = useState(0);


  const updateType = useCallback((type) => {
    return () => {
      setType(type);
    }
  });

  const updateType = useCallback((e) => {
    setQuant(e.currentTarget.value);
  })
  return (
    <form className="transaction-form">
      <div className="transaction-types">
        <button 
          onClick={updateType("BUY")}
          className={type === "BUY" ? "t-active" : "t-inactive"}
        >{`BUY ${props.ticker_symbol}`}</button>
        <button 
          onClick={updateType("SELL")}
          className={type === "SELL" ? "t-active" : "t-inactive"}
        >{`SELL ${props.ticker_symbol}`}</button>
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

      <div className="transaction-price">
        <p>Market Price: </p>
        <p>{numeral(this.props.price[this.props.ticker][0].price).format('$0,0.00')}</p>
      </div>
      <div className="transaction-price">
        <p>Estimated Cost:</p>
        <p>{numeral(this.state.cost).format('$0,0.00')}</p>
      </div>
    </form>
  )
}

export default TransactionForm;