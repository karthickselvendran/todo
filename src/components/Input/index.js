import React, { forwardRef } from "react";
import "./input.css";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default Input;
