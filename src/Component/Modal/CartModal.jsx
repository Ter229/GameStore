import React, { useState } from "react";
import Modal from "react-modal";
import s from "../Main/PageGame/PageGame.module.scss";
import styles from "./CartModal.module.scss";
import { Link } from "react-router-dom";
import { addItems, countCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addGames, addGamesBuy } from "../../redux/slices/librarySlice";

const CartModal = ({ img, title, price, id }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const fff = useSelector((state) => state.cart.games.length);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
    };
    dispatch(addItems(item));
    dispatch(addGamesBuy(item));
  };
  const setModalCart = () => {
    setModalOpen(true);
    onClickAdd();
    dispatch(countCart(fff));
  };
  return (
    <div>
      <button id={s.cart} onClick={() => setModalCart(true)}>
        Корзина
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        className={styles.modal}
        overlayClassName={styles.overlay}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <div>
          <button
            className={styles.modal__close}
            onClick={() => setModalOpen(false)}
          >
            x
          </button>
          <h2>Добавлено в корзину!</h2>
          <div className={styles.modal__content}>
            <img className={styles.modal__img} src={img} />
            <div className={styles.modal__about}>
              <div id={styles.modal__title}>{title}</div>
              <div className={styles.modal__text}>
                <div id={styles.modal__price}>{price}₴</div>
                <div className={styles.modal__option}>
                  <button>Добавить</button>
                  <button>Удалить</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal__buttons}>
            <div>Продолжить покупки</div>

            <Link to={"/cart"}>
              <div>Открыть корзину</div>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
