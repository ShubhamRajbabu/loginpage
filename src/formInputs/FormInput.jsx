import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { id, onChange, errormessage, label, ...restProps } = props;
  const [focused, setFocused] = useState(false);
  const handleChange = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...restProps}
        onChange={onchange}
        onBlur={handleChange}
        onFocus={() => restProps.name==='confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="errorMessage">{errormessage}</span>
    </div>
  );
};

export default FormInput;
