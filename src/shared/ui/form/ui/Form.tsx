import React from "react";
import styles from "./form.module.scss";
type FormProps = {
  onSubmit?: (event: React.MouseEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
}) => {
  return (
    <form
      className={styles.default}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
