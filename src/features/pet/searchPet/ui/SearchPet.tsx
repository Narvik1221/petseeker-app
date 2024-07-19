import React, { ChangeEvent, useState } from "react";
import { useGetPetsQuery } from "../../../../entities/pet/index";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import searchIcon from "../../../../shared/assets/search_icon.svg";
import styles from "./searchPet.module.scss";
import { useTranslation } from "react-i18next";
export const SearchPet: React.FC = () => {
  const [placeholder, setPlaceholder] = useState("Введите текст");
  const { t } = useTranslation("search");
  const [name, setName] = useState("");
  const [searchParams, setSearchParams] = useState<{
    name?: string;
  }>({});

  useGetPetsQuery(searchParams);

  const handleSearch = () => {
    setSearchParams({
      name: name || undefined,
    });
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFocus = () => {
    setPlaceholder(t("placeholder-focus"));
  };

  const handleBlur = () => {
    setPlaceholder(t("placeholder"));
  };

  return (
 
      <div className={styles.search_container}>
        <button onClick={handleSearch} className={styles.search_btn}></button>
        <input
          placeholder={placeholder}
          className={styles.search_input}
          value={name}
          onChange={handleChangeName}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button className={styles.search_filter}></button>
      </div>

  );
};
