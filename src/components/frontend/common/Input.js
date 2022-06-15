import React from "react";

const Input = ({ name, label, type = "text", register, errorMessage = "" }) => {
  return (
    <div className="form-row">
      <label className="place-item-center">{label}</label>
      <div>
        <input
          type={type}
          className={
            errorMessage
              ? "form-control input-border-danger"
              : "form-control  input-border-primary"
          }
          {...register(name)}
        />
        <p className="text-red-400 text-sm">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Input;
