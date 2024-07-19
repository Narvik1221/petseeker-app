import React from "react";
import styles from "./filterPets.module.scss";
import { Text } from "../../../../shared/ui/text";
import {ReactComponent as CircleIcon} from '../../../../shared/assets/circle.svg'
export const FilterPets: React.FC = () => {


  return (
    <div className={styles.filter__list}>
      <button className={styles.filter__item}>
        <CircleIcon className={styles.filter__item_icon}></CircleIcon>
        <span className={styles.text}>Все</span>
      </button>
      <button className={styles.filter__item}>
        <CircleIcon className={styles.filter__item_icon}></CircleIcon>
        <span className={styles.text}>Недавние</span>
      </button>
      <button className={styles.filter__item}>
        <CircleIcon className={styles.filter__item_icon}></CircleIcon>
        <span className={styles.text}>Рядом с вами</span>
      </button>
    </div>
  );
};
