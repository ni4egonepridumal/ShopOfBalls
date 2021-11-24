import react, { useState } from "react";
import styles from "./Cart.module.css";

const CartItem = ({ balls }) => {
  const [typeCort, setTypeCort] = useState("dd");

  return (
    <>
      {balls.map((item) => (
        <div key={item.id} className={styles.cart}>
          <div className={styles.cart_description}>
            <p className={styles.cart_name}>
              Название: <br />
              {item.name}
            </p>
            <p>Размер: {item.sizes}</p>
            <p>
              Площадка:
              <select>
                {item.types.map((item, index) => (
                  <option
                    key={index}
                    value={typeCort}
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </p>
            <p>Цена: {item.price}</p>
          </div>
          <div className={styles.cart_img}>
            <img src={item.imageUrl} alt="" />
          </div>
          <div className={styles.cart_inner}>
            <div
              onClick={() => console.log("add to favorite")}
              className={styles.cart_like}
            >
              <img src="./img/heart256.png" alt="add to like" />
            </div>
            <div className={styles.cart_basket}>
              <img src="./img/addToCart256.png" alt="add to basket" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
