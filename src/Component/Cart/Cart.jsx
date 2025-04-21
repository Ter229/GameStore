import React from "react";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const game = useSelector((state) => state.cart.games);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div>
      <div className={styles.cart__inner}>
        <div className={styles.modal}>
          <h2>Ваша Корзина</h2>
          {game.length > 0 ? (
            game.map((games) => <CartItem key={games.id} {...games} />)
          ) : (
            <p>Ваша корзина пуста</p>
          )}
        </div>
        <div className={styles.cart__cost}>
          <div>
            <div className={styles.cart__block}>
              <div className={styles.cart__title}>Общая стоимость</div>
              <span>{totalPrice}₴</span>
            </div>
            <div className={styles.cart__text}>
              Налог с продаж вычисляется при оформлении покупки в регионах, где
              он применим
            </div>
            <div className={styles.cart__btn}>
              <Link to={"/pay"}>
                <button>Перейти к оплате</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modal__buttons}>
        <Link to={"/"}>
          <div>Продолжить покупки</div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
