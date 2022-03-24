import React, { forwardRef, ForwardRefRenderFunction} from "react";
import { FieldError } from "react-hook-form";

import Styles from "./styles.module.scss";

interface TextAreaProps {
  name: string;
  label?: string;
  error?: FieldError;

}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  {
    name,
    label,
    error = null,
    ...rest
  },
    ref

  
) => {
  return (
    <div className={Styles.inputBox}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <textarea name={name} id={name} ref={ref} {...rest} />
      {!!error && <span>{error.message}</span>}
    </div>
  );
};

export const TextArea = forwardRef(TextAreaBase);