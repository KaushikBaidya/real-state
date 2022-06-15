import React from "react";

const TextArea = ({
  name,
  label,
  type = "text",
  register,
  errorMessage = "",
}) => {
  return (
    <div className="form-row">
      <label className="place-item-center">{label}</label>
      <div>
        <textarea
          type={type}
          className={`h-20 form-control ${
            errorMessage ? "input-border-danger" : "input-border-primary"
          }`}
          {...register(name)}
        />
        <p className="text-red-400 text-sm">{errorMessage}</p>
      </div>
    </div>
  );
};

export default TextArea;
