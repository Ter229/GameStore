import React, { useEffect, useState } from "react";
import s from "./PageGame.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartModal from "../../Modal/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../..//redux/slices/cartSlice";
import Cart from "../../Cart/Cart";
const PageGame = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const { id } = useParams();
  // const [game, setGames] = useState();

  useEffect(() => {
    dispatch(fetchCart(id));
  }, [id]);

  if (!items) {
    return "Loading";
  }
  return (
    <div>
      <div className={s.game}>
        <div className={s.game__header}>
          <div className={s.game__title}>{items.title}</div>
          <div className={s.game__statistic}>Cтатистика</div>
        </div>
        <div class={s.game__about}>
          <div className={s.game__content}>
            <div>
              <img className={s.game__about__video} src={items.imageUrl} />
            </div>
            <div>
              <img className={s.game__about__img} src={items.imageUrl} />
              <div className={s.game__text}>
                <p>{items.about}</p>
              </div>
              <div className={s.game__info}>
                <div>
                  ВСЕ ОБЗОРЫ: <a href="#">{items.rating}</a>
                </div>
                <div>
                  ДАТА ВЫХОДА: <a href="#">{items.date}</a>
                </div>
                <div>
                  РАЗРАБОТЧИК: <a href="#">{items.developer}</a>
                </div>
                <div>
                  ИЗДАТЕЛЬ: <a href="#">{items.developer}</a>
                </div>
              </div>
            </div>
          </div>
          <div className={s.game__menu}>
            <ul className={s.game__nav}>
              <li>
                <a href="#">В желаемое</a>
              </li>
              <li>
                <a href="#">Подписаться</a>
              </li>
              <li>
                <a href="#">Скрыть</a>
              </li>
            </ul>
            <a className={s.rec} href="#">
              Список рекомендаций
            </a>
          </div>
        </div>
      </div>
      <div className={s.game__wrapper}>
        <div class={s.game__buy}>
          <div className={s.game__buy__title}>{items.title}</div>
          <div className={s.game__buy__cart}>
            <div id={s.price}>{items.price}₴</div>
            <CartModal
              id={items.id}
              img={items.imageUrl}
              title={items.title}
              price={items.price}
            />
          </div>
        </div>
        <div className={s.game__requirements}>
          <div className={s.game__requirements__title}>
            СИСТЕМНЫЕ ТРЕБОВАНИЯ
          </div>
          <div className={s.game__requirements__stat}>
            <div id={s.min}>
              МИНИМАЛЬНЫЕ:
              <ul className={s.game__requirements__list}>
                <li>
                  <span>64-разрядные процессор и операционная система</span>
                </li>
                <li>
                  ОС: <span>64-bit Windows 10</span>
                </li>
                <li>
                  Процессор: <span>Core i7-6700 or Ryzen 5 1600</span>
                </li>
                <li>
                  Оперативная память: <span>12 GB ОЗУ</span>
                </li>
                <li>
                  Видеокарта:
                  <span>
                    GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380
                  </span>
                </li>
                <li>
                  Место на диске: <span>70 GB</span>
                </li>
              </ul>
            </div>
            <div id={s.max}>
              РЕКОМЕНДОВАННЫЕ:
              <ul className={s.game__requirements__list}>
                <li>
                  <span>64-разрядные процессор и операционная система</span>
                </li>
                <li>
                  ОС: <span>64-bit Windows 10</span>
                </li>
                <li>
                  Процессор: <span>Core i7-12700 or Ryzen 7 7800X3D</span>
                </li>
                <li>
                  Оперативная память: <span>16 GB ОЗУ</span>
                </li>
                <li>
                  Видеокарта:
                  <span>
                    GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770
                  </span>
                </li>
                <li>
                  Место на диске: <span>70 GB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageGame;
