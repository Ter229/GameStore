import React from "react";
import s from "./Header.module.scss";
import cart from "./../../img/cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const games = useSelector((state) => state.cart.count);
  const nick = useSelector((state) => state.profile.saveNick);
  return (
    <header>
      <menu className={s.header__menu}>
        <nav className={s.header__nav}>
          <ul className={s.header__list}>
            <li>
              <Link to="/">Магазин</Link>
            </li>
            <li>
              <Link to="/library">Библиотека</Link>
            </li>
            <li>
              <a href="#">Сообщество</a>
            </li>
            <li>
              <Link to="/profile">
                <a href="#">{nick}</a>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={s.header__acc}>
          <ul>
            <div>
              <span id={s.cart__number}>{games}</span>

              <Link to={"/cart"}>
                <img src={cart} />
              </Link>
            </div>
            <li>
              <a href="#">Уведомления</a>
            </li>
            <li>
              <a href="#">Управления аккаунтом</a>
            </li>
          </ul>
        </nav>
      </menu>
    </header>
  );
}

export default Header;
