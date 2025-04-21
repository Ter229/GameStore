import React from "react";
import s from "./Library.module.scss";
import { useSelector } from "react-redux";

const LibraryActive = () => {
  const currentGame = useSelector((state) => state.library.currentGame);
  return (
    <div className={s.event}>
      <div className={s.event__date}>7 ЯНВАРЯ</div>
      <div className={s.event__wrapper}>
        <div className={s.event__img}>
          <img src={currentGame.img} />
        </div>
        <div className={s.event__info}>
          <div>НОВОСТЬ</div>
          <div className={s.event__title}>Профилактические работы</div>
          <div>
            В среду, 8 января 2025 г., с 9:00 до 13:00 (МСК) будут проходить
            профилактические работы по обслуживанию игровых серверов
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryActive;
