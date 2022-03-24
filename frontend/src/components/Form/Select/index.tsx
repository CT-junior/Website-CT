import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError } from "react-hook-form";

import Styles from "./styles.module.scss";

interface SelectProps {
  name: string;
  label?: string;
  error?: FieldError;
  children?: ReactNode;
  defaultValue?: string
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, children, defaultValue, ...rest },
  ref
) => {
  return (
    <div className={Styles.inputBox}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name} ref={ref} defaultValue={defaultValue} {...rest}>
          {children}
      </select>

      {!!error && <span>{error.message}</span>}
    </div>
  );
};

export const Select = forwardRef(SelectBase);
