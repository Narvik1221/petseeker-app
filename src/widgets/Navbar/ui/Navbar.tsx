import React from "react";
import { Link } from "react-router-dom";
import {
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  ADD_PET_CARD,
} from "../../../app/router/consts";

import { ReactComponent as MainIcon } from "../../../shared/assets/main_icon.svg";
import { ReactComponent as ProfileIcon } from "../../../shared/assets/profile_icon.svg";
import { ReactComponent as FavoriteIcon } from "../../../shared/assets/favorite_icon.svg";
import { ReactComponent as AddIcon } from "../../../shared/assets/add_icon.svg";
import styles from "./navbar.module.scss";
const Navbar: React.FC = () => {
  // const { theme, setTheme } = useTheme();

  // const handleLightThemeClick = () => {
  //   setTheme("light");
  // };
  // const handleDarkThemeClick = () => {
  //   setTheme("dark");
  // };
  const activeMainIcon =
    location.pathname === MAIN_ROUTE ? styles.active_icon : "";
  const activeMainText =
    location.pathname === MAIN_ROUTE ? styles.active_text : "";

  const activeAddIcon =
    location.pathname === ADD_PET_CARD ? styles.active_icon : "";
  const activeAddText =
    location.pathname === ADD_PET_CARD ? styles.active_text : "";
  return (
    <nav className={styles.navbar__container}>
      <div className={styles.navbar__list}>
        <Link className={styles.navbar__item} to={MAIN_ROUTE}>
          <div className={styles.navbar__icon_container}>
            <MainIcon className={activeMainIcon} />
          </div>
          <span className={activeMainText}> Главная</span>
        </Link>

        <Link className={styles.navbar__item} to={REGISTRATION_ROUTE}>
          <div className={styles.navbar__icon_container}>
            <ProfileIcon />
          </div>
          <span> Профиль</span>
        </Link>

        <Link className={styles.navbar__item} to={ADD_PET_CARD}>
          <div className={styles.navbar__icon_container}>
            {" "}
            <AddIcon className={activeAddIcon} />
          </div>
          <span className={activeAddText}> Объявления</span>
        </Link>

        <Link className={styles.navbar__item} to={MAIN_ROUTE}>
          <div className={styles.navbar__icon_container}>
            <FavoriteIcon />
          </div>
          Избранное
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
