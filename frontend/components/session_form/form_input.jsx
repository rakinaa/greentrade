import React from "react";

const FormInput = ({ val, label, type, update, errors }) => {
  const ext = errors.length > 0 ? "input-error" : "";
  return (
    <div className="input-container">
      <input
        value={val}
        type={type}
        onChange={update}
        placeholder={label}
        className={`form-input ${ext}`}
        required
      />
      {errors.map((error) => (
        <p key={error} className="form-error">
          {error}
        </p>
      ))}
    </div>
  );
};

export default FormInput;
