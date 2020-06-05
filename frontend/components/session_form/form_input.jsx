import React from 'react';

const FormInput = ({ val, label, type, update, errors }) => {
  const ext = errors.length > 0 ? "-error" : ""
  return (
    <div className="input-container">
      <input value={val} type={type} onChange={update} className={`form-input${ext}`} required/>
      <span className={`floating-label${ext}`}>{label}</span>
      {errors.map((error) => <p className="form-error">{error}</p>)}
    </div>
  )
}

export default FormInput;