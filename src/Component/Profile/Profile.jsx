import React from "react";
import s from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const nick = useSelector((state) => state.profile.saveNick);
  const name = useSelector((state) => state.profile.name);
  const description = useSelector((state) => state.profile.description);
  const avatar = useSelector((state) => state.profile.avatar);

  return (
    <div className={s.profile}>
      <div className={s.profile__header}>
        <div className={s.profile__content}>
          <img
            className={s.profile__img}
            src={
              avatar
                ? avatar
                : "https://avatars.fastly.steamstatic.com/2748eee8dc517550da4f72e41d8b2a0a240a68cf_full.jpg"
            }
          />
          <div className={s.profile__info}>
            <div id={s.nick}>{nick}</div>
            <div id={s.about}>{name}, Honduras</div>
            <div>{description}</div>
          </div>
          <div>
            <div id={s.lvl}>
              Уровень <span id={s.lvl__num}>23</span>
            </div>
            <div id={s.achive}>
              <img
                id={s.achive__img}
                src="https://cdn.fastly.steamstatic.com/steamcommunity/public/images/items/570/05b1b9d504df01096b406777be0d7331d995cf9e.png"
              />
              <div>
                <div>Ganker</div>
                <div>500 ед. опыта</div>
              </div>
            </div>
            <Link to={"/edit/main"}>
              <div id={s.edit}>Редактировать профиль</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
