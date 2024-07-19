import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./textArea.module.scss";
type TextareaProps = {
  onChange?: any;
  value?: string;
  name?: string;
  style?: any;
  id?: string;
  register?: UseFormRegisterReturn;
  label?: string;
};

export const TextArea: React.FC<TextareaProps> = ({ label, register, ...rest }) => {
  return (
    <label className={styles.label}>
      {label}
      <textarea className={styles.default} {...register} {...rest}></textarea>
    </label>
  );
};


