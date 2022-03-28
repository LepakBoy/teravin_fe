import React, { useState } from "react";

const FormLable = (props) => {
  const { label, onChange, name, type, error, keys } = props;
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="row my-2" key={keys}>
      <div className="col-md-4 p-0">{label}</div>
      <div className="col-md-8 ">
        <input
          onBlur={handleFocus}
          focused={focus.toString()}
          required="true"
          type={type}
          className="w-100 px-1 error-input"
          name={name}
          onChange={onChange}
        />
        <span className="errorMsg ">{error}</span>
      </div>
    </div>
  );
};

export default FormLable;
