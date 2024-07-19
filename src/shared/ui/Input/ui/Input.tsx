import React from "react";
import styles from "./input.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
type InputProps = {
  onChange?: any;
  placeholder?: string;
  value?: string;
  name?: string;
  style?: any;
  id?: string;
  type?: string;
  accept?: string;
  multiple?: boolean;
  register?: UseFormRegisterReturn;
  label?: string;
};

export const Input: React.FC<InputProps> = ({ label, register, ...rest }) => {
  return (
    <label className={styles.label}>
      {label}
      <input className={styles.default} {...register} {...rest} />
    </label>
  );
};
