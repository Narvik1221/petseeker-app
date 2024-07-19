import React from "react";
import {ReactComponent as LikeIcon} from '../../../../shared/assets/like.svg'
import styles from "./saveCard.module.scss";
export const SaveCard: React.FC = () => {
  const handleSaveButton = () => {
  };

  return (
    <button onClick={handleSaveButton} className={styles.card__like_btn}>
      <LikeIcon className={styles.card__like}></LikeIcon>
    </button>
  );
};
