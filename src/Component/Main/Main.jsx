import React, { useEffect, useState } from "react";
import s from "./Main.module.scss";
import img1 from "./../../img/search.svg";
import sale_img from "./../../img/poe.webp";
import elden from "./../../img/elden.avif";
import witcher from "./../../img/witcher.png";
import openworld from "./../../img/open_world.webp";
import race from "./../../img/race.webp";
import roleplay from "./../../img/roleplay.webp";
import coop from "./../../img/coop.webp";
import axios from "axios";
import Carousel from "./Carousel/Carousel";

const Main = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://672a7424976a834dd02376e7.mockapi.io/game")
      .then((res) => {
        setGames(res.data);
      });
  }, []);
  return (
    <main>
      <div className={s.main}>
        <menu className={s.main__menu}>
          <ul>
            <li>
              <a href="#">Магазин</a>
            </li>

            <li>
              <a href="#">Новинки</a>
            </li>
            <li>
              <a href="#">Категории</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
          </ul>
          <div className={s.main__search}>
            <input placeholder="поиск" />
            <img src={img1} />
          </div>
        </menu>
        <div className={s.main__rec}>
          <h3>ПОПУЛЯРНОЕ И РЕКОМЕНДУЕМОЕ</h3>

          <Carousel games={games} />

          <div className={s.line__decore}></div>
        </div>

        <div className={s.main__sale}>
          <h3>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h3>
          <div className={s.main__offer}>
            <img className={s.main__sale__img} src={sale_img} />
            <div className={s.main__border}>
              <div>АКЦИЯ НА ВЫХОДНЫХ</div>
              <div className={s.main__border__cost}>
                <div className={s.main__border__sale}>-32%</div>
                <div className={s.main__border__price}>
                  <div className={s.main_throug}>250грн</div>
                  <div>203грн</div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.main__offer}>
            <img className={s.main__sale__img} src={elden} />
            <div className={s.main__border}>
              <div>АКЦИЯ НА ВЫХОДНЫХ</div>
              <div className={s.main__border__cost}>
                <div className={s.main__border__sale}>-50%</div>
                <div className={s.main__border__price}>
                  <div className={s.main_throug}>1000грн</div>
                  <div>500грн</div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.main__offer}>
            <img className={s.main__sale__img} src={witcher} />
            <div className={s.main__border}>
              <div>АКЦИЯ НА ВЫХОДНЫХ</div>
              <div className={s.main__border__cost}>
                <div className={s.main__border__sale}>-40%</div>
                <div className={s.main__border__price}>
                  <div className={s.main_throug}>500грн</div>
                  <div>300грн</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.main__category}>
          <h3>КАТЕГОРИИ</h3>
          <div className={s.main__category__list}>
            <div className={s.main__category__item}>
              <img src={roleplay} />
              <button className={s.main__category__title}>РОЛЕВЫЕ ИГРЫ</button>
            </div>
          </div>
          <div className={s.main__category__list}>
            <div className={s.main__category__item}>
              <img src={openworld} />
              <button className={s.main__category__title}>ОТКРЫТЫЙ МИР</button>
            </div>
          </div>
          <div className={s.main__category__list}>
            <div className={s.main__category__item}>
              <img src={race} />
              <button id="race" className={s.main__category__title}>
                ГОНКИ
              </button>
            </div>
          </div>
          <div className={s.main__category__list}>
            <div className={s.main__category__item}>
              <img src={coop} />
              <button className={s.main__category__title}>ОТКРЫТЫЙ МИР</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
