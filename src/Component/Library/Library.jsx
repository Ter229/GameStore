import React from "react";
import s from "./Library.module.scss";
import { useSelector } from "react-redux";
import LibraryGame from "./LibraryGame";
import LibraryActive from "./LibraryActive";
import { Link } from "react-router-dom";

const Library = () => {
  const game = useSelector((state) => state.library.games);
  const currentGame = useSelector((state) => state.library.currentGame);

  return (
    <div className={s.library}>
      <div className={s.wrapper}>
        <div className={s.wrapper__list}>
          <input
            placeholder="Поиск по названию"
            className={s.wrapper__search}
          />
          {game.map((item) => (
            <LibraryGame key={item.id} {...item} />
          ))}
        </div>
        <div className={s.content}>
          {currentGame.length === 0 ? (
            <div className={s.emptyState}>
              <h2>Выберите игру</h2>
            </div>
          ) : (
            <>
              <div className={s.content__container}>
                <div className={s.content___bg}>
                  <img src={currentGame.img} alt="Game Background" />
                </div>
                <div className={s.content__inner}>
                  <div className={s.content__game}>
                    <span className={s.play}>ИГРАТЬ</span>
                    <span className={s.last__start}>
                      ПОСЛЕДНИЙ ЗАПУСК<span>Сегодня</span>
                    </span>
                    <span className={s.u__game}>
                      ВЫ ИГРАЛИ<span>320,3 ч.</span>
                    </span>
                    <span className={s.achive}>
                      ДОСТИЖЕНИЯ<span>32/58</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.content__about}>
                <div className={s.content__menu}>
                  <span>
                    <Link to={"/game-page/id"}>Страница в магазине</Link>
                  </span>

                  <span>Доп. контент</span>
                  <span>Центр сообщества</span>
                  <span>Обсуждения</span>
                  <span>Руководства</span>
                </div>
                <div className={s.content__active}>
                  <div>
                    <LibraryActive />
                    <LibraryActive />
                  </div>
                  <div className={s.content__friends}>
                    <div>ДРУЗЬЯ, ИГРАЮЩИЕ В ЭТО</div>
                    <div className={s.content__friends__inner}>
                      <div>Друзей, игравших недавно: 2</div>
                      <div className={s.content__friends__block}>
                        <img />
                        <div className={s.content__friends__text}>
                          <div>Born to revo</div>
                          <div>31 ч. за последнее время</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;
