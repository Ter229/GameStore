import React from "react";
import s from "./Footer.module.scss";
import friends from "./../../img/friends.png";
import friends2 from "./../../img/friends2.png";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <ul className={s.footer__block}>
          <li>
            <a href="#" className={s.footer__add}>
              Добавить игру
            </a>
          </li>
          <li>
            <a href="#" className={s.footer__chat}>
              Друзья и чат
            </a>
            <img src={friends2} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
