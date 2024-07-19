import type { FC } from "react";
import styles from "./petCard.module.scss";
import { Pet } from "../index";
import { Text } from "../../../shared/ui/text";

type PetProps = {
  description: Pet;
  actionSlots?: React.ReactNode;
};

export const PetCard: FC<PetProps> = ({ description, actionSlots }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__image_container}>
        <img
          src={description.images?.length ? description.images[0] : ""}
          alt=""
        />
      </div>
      <div className={styles.card__like_container}>
        <Text myClass={"subtitle"}>{description.name}</Text>
        {actionSlots}
      </div>
    
      <Text>{description.price}</Text>
      <Text myClass={"gray"}>{description.geo}</Text>
    </div>
  );
};
