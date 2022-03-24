import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

import Styles from "./styles.module.scss";

interface InputProps {
  name: string;
  label?: string;
  error?: FieldError;
  slidebar?: boolean;
  numberDashes?: number;
  priceRange?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, slidebar = false, numberDashes = 4, priceRange, ...rest },
  ref
) => {
  return slidebar === false ? (
    <div className={Styles.inputBox}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} ref={ref} type={name} {...rest} />
      {!!error && <span>{error.message}</span>}
    </div>
  ) : (
    <div className={Styles.slideBox}>
     {!!label && <label htmlFor={name}>{label}</label>}
      <div className={Styles.slideField}>
        <input
          name={name}
          type="range"
          defaultValue={10}
          min={10}
          max={40}
          {...rest}
          ref={ref}
        />
        <div className={Styles.slideDashes}>
          {Array.from({length: numberDashes}).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
      </div>
      <div className={Styles.rangeValue}>{priceRange}</div>
    </div>
  );
};

export const Input = forwardRef(InputBase);
