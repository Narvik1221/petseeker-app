import React, { CSSProperties } from "react";
import styles from "./text.module.scss";
type TextProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};

export const Title: React.FC<TextProps> = ({ style, children }) => {
  return <h2 className={styles.default} style={style}>{children}</h2>;
};
