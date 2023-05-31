import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}
const Input = ({ placeholder, ...rest }: InputProps) => {
  return <input type="text" placeholder={placeholder} {...rest} />;
};

export default Input;
