import React from "react";
import styles from "./MySelect.module.css";

const MySelect = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      className={styles.select}
      value={value}
      name=""
      id=""
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((item, index) => (
        <option key={index} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
