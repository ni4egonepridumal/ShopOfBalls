import React, { useState } from "react";
import styles from "./Navigation.module.css";
import MySelect from "./MySelect";

const Navigation = () => {
  const [selectCort, setSelectCort] = useState("");
  const choiseCort = (sort) => {
    setSelectCort(sort);
    console.log(sort);
  };
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <img src="./img/logo_wilson.webp" alt="" />
      </div>
      <div className={styles.search}>
        <input type="text" name="" id="" />
        <img src="./img/search.svg" alt="" />
      </div>
      <MySelect
        value={selectCort}
        onChange={choiseCort}
        defaultValue="Покрытие"
        options={[
          { value: "title", name: "Асфальт" },
          { value: "title", name: "Крытая площадка" },
          { value: "title", name: "Смешанная" },
        ]}
      />
      <div className={styles.favorite}>
        <img src="./img/addInLike256.png" alt="add to favorite" />
      </div>
      <div className={styles.basket}>
        <img src="./img/basketball256.png" alt="add to basket" />
      </div>
    </div>
  );
};

export default Navigation;
