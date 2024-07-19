import React from "react";
import styles from "./select.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
type SelectProps = {
  onChange?: any;
  value?: string;
  name?: string;
  style?: any;
  id?: string;
  register?: UseFormRegisterReturn;
  label?: string;
  options: string[];
};

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  register,
  ...rest
}) => {
  return (
 
      <label  className={styles.label}>
        {label}
        <select className={styles.default} {...register} {...rest}>
          {options.length&&options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    
  );
};
