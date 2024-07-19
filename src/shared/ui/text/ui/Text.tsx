import React, { CSSProperties, ReactNode, JSXElementConstructor } from "react";
import styles from "./text.module.scss";

type TextProps = {
  children?: ReactNode;
  style?: CSSProperties;
  tag?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
  myClass?: string;
};

export const Text: React.FC<TextProps> = ({
  myClass = "default",
  tag: CustomTag = "span",
  children,
}) => {
  return <CustomTag className={styles[myClass]}>{children}</CustomTag>;
};
