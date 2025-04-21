import React from "react";
import styles from "./Cart.module.scss";
import { removeItems } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeGame = () => {
    dispatch(removeItems(props.id));
  };
  return (
    <div className={styles.modal__content}>
      <img className={styles.modal__img} src={props.img} />
      <div className={styles.modal__about}>
        <div id={styles.modal__title}>{props.title}</div>
        <div className={styles.modal__text}>
          <div id={styles.modal__price}>{props.price}₴</div>
          <div className={styles.modal__option}>
            <button>Добавить</button>
            <button onClick={() => removeGame()}>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
