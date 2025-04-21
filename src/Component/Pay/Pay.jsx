import React from "react";
import s from "./Pay.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addGames } from "../../redux/slices/librarySlice";
import { addItems, countCart, clearItems } from "../../redux/slices/cartSlice";

const Pay = () => {
  // const dispatch = useDispatch();

  // const sendGame = () => {
  //
  // };
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.library.gamesBuy);
  const cartItem = () => {
    dispatch(clearItems([]));
    dispatch(countCart(-1));
    currentGame.forEach((game) => {
      dispatch(addGames(game)); // Добавляем каждый объект по одному
    });
  };
  return (
    <div className={s.pay}>
      <div>
        <div className={s.pay__title}>СПОСОБ ОПЛАТЫ</div>
        <div>
          <div className={s.pay__text}>Пожалуйста, выберите способ оплаты</div>
          <form className={s.pay__form}>
            <select>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
            </select>
          </form>
          <div className={s.pay__prompt}>
            Вы сможете проверить заказ перед его оплатой.
          </div>
          <div className={s.pay__buttons}>
            <button>Назад</button>
            <button onClick={() => cartItem()}>Продолжить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
